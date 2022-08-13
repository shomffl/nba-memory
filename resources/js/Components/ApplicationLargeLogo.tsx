import React from "react";

interface Props {
    className: string;
}

export default function ApplicationLargeLogo({ className }: Props) {
    return <img className={className} src={"/logo/large-logo.png"} />;
}
