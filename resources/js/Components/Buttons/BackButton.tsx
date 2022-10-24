import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const BackButton = (props: any) => {
    const { link } = props;
    return (
        <Link
            as="button"
            href={link}
            className="bg-gray-1000 text-white hover:text-white hover:bg-red-900 shadow hover:shadow-2xl hover:scale-105 active:scale-100 px-5 py-1 rounded duration-200"
        >
            Back
        </Link>
    );
};

export default BackButton;
