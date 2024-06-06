import { z } from 'zod';

export const SignUpValidation = z.object({
    name: z.string().min(2, { message: "Too Short" }).max(50, { message: "Too Long" }),
    username: z.string().min(2),
    email: z.string().email({ message: "please Enter email" }),
    password: z.string().min(8, { message: "Too short" }),
});

export const LoginValidation = z.object({
    email: z.string().min(2, {
        message: "Too short !😡"
    }),
    password: z.string().min(8, { message: "Too short !🦉" }),
})

export const SearchValidation = z.object ({
    searchUrl:  z.string().min(2, {
        message: "Too short !😡"
    }),
})