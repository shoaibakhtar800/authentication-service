import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string,
) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "🔒 Your 2FA Code",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>🔑 Two-Factor Authentication</h2>
                <p>Use the following code to complete your sign-in:</p>
                <p style="font-size: 24px; font-weight: bold; color: #2E86C1;">${token}</p>
                <p>If you did not request this code, you can safely ignore this email.</p>
                <br/>
                <p>Thank you!</p>
                <p><strong>The Team at Resend</strong></p>
            </div>
        `
    })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "🔑 Reset Your Password",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>🔐 Reset Your Password</h2>
                <p>We received a request to reset your password.</p>
                <p>Click the link below to proceed:</p>
                <p><a href="${resetLink}" style="color: #2E86C1; text-decoration: none;">🔗 Reset Password</a></p>
                <p>If you didn’t request this, please ignore this email.</p>
                <br/>
                <p>Stay secure,</p>
                <p><strong>The Team at Resend</strong></p>
            </div>
        `
    });
};

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "✉️ Confirm Your Email Address",
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>📧 Confirm Your Email</h2>
                <p>Welcome! Please confirm your email address to complete your setup.</p>
                <p>Click the link below to confirm:</p>
                <p><a href="${confirmLink}" style="color: #2E86C1; text-decoration: none;">🔗 Confirm Email</a></p>
                <p>If you didn’t request this, please ignore this email.</p>
                <br/>
                <p>Thank you for joining us!</p>
                <p><strong>The Team at Resend</strong></p>
            </div>
        `
    });
};