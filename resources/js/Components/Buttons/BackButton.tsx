import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import BreakPoints from "@/Pages/BreakPoints";

const BackButton = (props: any) => {
    const { link } = props;

    return (
        <Link
            as="button"
            href={link}
            className={
                BreakPoints()
                    ? "bg-gray-1000 text-white hover:text-white hover:bg-red-900 shadow hover:shadow-2xl hover:scale-105 active:scale-100 px-5 py-1 rounded duration-200"
                    : "bg-gray-1000 text-white active:bg-red-900 shadow active:scale-105 px-5 py-1 rounded"
            }
        >
            Back
        </Link>
    );
};

export default BackButton;
