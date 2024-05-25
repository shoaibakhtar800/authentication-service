import * as Z from "zod";

export const LoginSchema = Z.object({
    email: Z.string().email({
        message: "Email is required",
    }),
    password: Z.string().min(1, {
        message: "Password is required",
    }),
})

export const RegisterSchemas = Z.object({
    email: Z.string().email({
        message: "Email is required",
    }),
    password: Z.string().min(6, {
        message: "Minimum 6 characters required",
    }),
    name: Z.string().min(1, {
        message: "Name is required",
    }),
})