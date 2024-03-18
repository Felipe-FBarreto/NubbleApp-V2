import {z} from 'zod';

export const forgotPassword = z.object({
  email: z.string().email('E-mail inválido'),
});

export type ForgotPassword = z.infer<typeof forgotPassword>;
