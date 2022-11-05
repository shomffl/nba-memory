import React from "react";
import { Link } from "@inertiajs/inertia-react";

interface Props {
    href: string;
    active: boolean;
    children: React.ReactNode;
}

export default function NavLink({ href, active, children }: Props) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "text-white border-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-white transition duration-150 ease-in-out"
                    : "text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-300 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
