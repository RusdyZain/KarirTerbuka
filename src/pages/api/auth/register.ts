import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;

  const jwtToken = jwt.sign(
    {
      phonenumber: data.phonenumber,
      email: data.email,
    },
    process.env.NEXTAUTH_SECRET as string
  );

  try {
    const hashPassword = await argon2.hash(data.password);
    const response = await prisma.user.create({
      data: {
        phonenumber: data.phonenumber,
        email: data.email,
        username: data.username,
        password: hashPassword,
      },
    });

    res.setHeader('Set-Cookie', `token=${jwtToken};`);
    res.status(200).json({
      phonenumber: response.phonenumber,
      email: response.email,
      token: jwtToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menyimpan data',
    });
  }
}
