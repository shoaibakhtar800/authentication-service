import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
})

export const RegisterSchemas = z.object({
    email: z.string().email({
        message: "Email is required!",
    }),
    password: z.string()
        .min(6, {
            message: "Minimum 6 characters required!",
        })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, {
            message: "Password must be strong: At least one uppercase letter, one lowercase letter, one number, and one special character",
        }),
    name: z.string().min(1, {
        message: "Name is required!",
    }),
});