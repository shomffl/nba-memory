import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/inertia-react";

const Error = (props: any) => {
    const { status } = props;
    const title: any = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
    };

    const description: any = {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
    };

    return (
        <div className="min-h-screen bg-white">
            <nav className="bg-gray-100 border-b border-gray-100 shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/games">
                                    <ApplicationLogo className="block h-10 w-auto text-gray-500" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("games.index")}
                                    active={route().current("games.index")}
                                >
                                    Calendar
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("posts.index")}
                                    active={route().current("posts.index")}
                                >
                                    Posts
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("posts.create")}
                                    active={route().current("posts.create")}
                                >
                                    Create
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex flex-col items-center my-10">
                <div className="text-6xl mb-4">{title[status]}</div>
                <div className="text-2xl">{description[status]}</div>
            </div>
        </div>
    );
};

export default Error;
