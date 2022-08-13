import React from "react";
import ApplicationLargeLogo from "@/Components/ApplicationLargeLogo";
import { Link } from "@inertiajs/inertia-react";

interface Props {
    children: React.ReactNode;
}

export default function Guest({ children }: Props) {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center p-28  bg-gray-100">
            <div>
                <Link href="/games">
                    <ApplicationLargeLogo className="w-auto h-40 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
