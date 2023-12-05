import z from "zod";

const RegisterValidation = z
  .object({
    id: z.string(),
    username: z.string().min(2, "Username yang Anda masukkan tidak boleh kurang dari 2 karakter"),
    email: z.string().min(2, "Email yang Anda masukkan tidak boleh kurang dari 2 karakter"),
    phonenumber: z.string().min(2, "Nomor telepon tidak boleh kurang dari 2  "),
    password: z.string().min(2, "password tidak boleh kurang dari 2,").max(20,"password tidak boleh lebih dari 20 karakter"),
 
  })
  .partial({
    id: true,
  });

export type projectDataType = z.infer<typeof RegisterValidation>;
export default RegisterValidation;
