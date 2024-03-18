import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Mínimo de 8 caracteres'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
