import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import PekerjaanValidation from '@/validations/PekerjaanValidation';

async function getPekerjaan(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.cookies.token === 'undefined') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(
    req.cookies.token,
    process.env.NEXTAUTH_SECRET as string,
    (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    }
  );

  try {
    const result = await prisma.pekerjaan.findMany();
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Terjadi kesalahan saat mengambil data pekerjaan' });
  }
}

async function createPekerjaan(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const validation = PekerjaanValidation.safeParse(data);
  if (validation.success === false) {
    return res.status(403).json(validation.error.flatten().fieldErrors);
  }
  try {
    const result = await prisma.pekerjaan.create({
      data: data,
    });
    res.status(200).json(result);
  } catch (error) {
    console.error('Error creating pekerjaan:', error);
    res
      .status(500)
      .json({ message: 'Terjadi kesalahan saat membuka lowongan pekerjaan' });
  }
}

async function updatePekerjaan(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  try {
    const result = await prisma.pekerjaan.update({
      where: {
        id: data.id,
      },
      data: data,
    });
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Terjadi kesalahan saat memperbarui data pekerjaan' });
  }
}

async function deletePekerjaan(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;

  try {
    const result = await prisma.pekerjaan.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: 'Terjadi kesalahan saat menghapus pekerjaan',
    });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return getPekerjaan(req, res);
  }
  if (req.method === 'POST') {
    return createPekerjaan(req, res);
  }
  if (req.method === 'PUT') {
    return updatePekerjaan(req, res);
  }
  if (req.method === 'DELETE') {
    return deletePekerjaan(req, res);
  }
}
