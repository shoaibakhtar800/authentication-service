import { newPassword } from "@/actions/new-password";
import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string()
        .min(6, { message: "Minimum 6 characters required!" })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, {
            message: "Password must be strong: At least one uppercase letter, one lowercase letter, one number, and one special character",
        })
    ),
    newPassword: z.optional(z.string()
        .min(6, { message: "Minimum 6 characters required!" })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, {
            message: "Password must be strong: At least one uppercase letter, one lowercase letter, one number, and one special character",
        })
    )
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false;
        }

        return true;
    }, {
        message: "New password is required!",
        path: ["newPassword"]
    })
    .refine((data) => {
        if (!data.password && data.newPassword) {
            return false;
        }

        return true;
    }, {
        message: "Password is required!",
        path: ["password"]
    })
    .refine((data) => {
        return !(data.password && data.newPassword && data.password === data.newPassword);
    }, {
        message: "Old password and new password cannot be the same!",
        path: ["newPassword"]
    });

export const NewPasswordSchema = z.object({
    password: z.string()
        .min(6, {
            message: "Minimum 6 characters required!",
        })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, {
            message: "Password must be strong: At least one uppercase letter, one lowercase letter, one number, and one special character",
        }),
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
    code: z.optional(z.string()),
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