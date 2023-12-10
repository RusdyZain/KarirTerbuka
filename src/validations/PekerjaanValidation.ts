import z from 'zod';

const gambarRegex = /\.(jpeg|jpg|png)$/i;

const PekerjaanValidation = z
  .object({
    id: z.string(),
    namapekerjaan: z.string(),
    uploadgambar: z.string(),
    lokasi: z.string(),
    kriteria: z.string(),
    kategoripekerjaan: z.string(),
    rentanggaji: z.string(),
    detaillowongan: z.string(),

    deskripsipekerjaan: z.string(),
    catatan: z.string(),
  })
  .partial({
    id: true,
  });

export type projectDataType = z.infer<typeof PekerjaanValidation>;
export default PekerjaanValidation;
