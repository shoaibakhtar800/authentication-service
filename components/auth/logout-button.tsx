"use client";

import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    const router = useRouter();

    const onclick = async () => {
        await logout();
        router.push("/auth/login");
    }

    return (
        <span onClick={onclick} className="cursor-pointer">
            {children}
        </span>
    );
};