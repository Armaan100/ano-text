import {z} from 'zod';

export const signInSchema = z.object({
    identifier: z.boolean(),
    password: z.string(),
})