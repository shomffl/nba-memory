import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/inertia-react";

const Show = (props: { auth: any; post: Post; previousPage: number }) => {
    const { post, previousPage } = props;

    // previousUrlの値によって戻るボタンの遷移先URLを変更
    const changePreviousUrl = () => {
        if (previousPage == 1) {
            return "posts.index";
        } else if (previousPage == 2) {
            return "games.index";
        }
        return "favorites.index";
    };

    return (
        <Authenticated auth={props.auth} header={null}>
            <Head title="PULL ORIGIN" />

            <div className="px-28 py-20">
                <div className="bg-gray-100 rounded py-20 px-20 shadow-xl">
                    <div className="pb-10">
                        <h2>Match</h2>
                        <div className="flex">
                            <h1 className="bg-white text-3xl rounded px-5 py-2 mr-2 shadow">
                                {post.game.matched_at}
                            </h1>

                            <h1 className="flex items-center bg-white text-3xl rounded px-5 py-2 mr-2 shadow">
                                <img
                                    className="w-8 max-h-8"
                                    src={post.game.home_team.logo}
                                />
                                &nbsp;
                                {post.game.home_team.name}&nbsp;(
                                {post.game.home_team_point})&nbsp;vs&nbsp;
                                {post.game.away_team.name}&nbsp;(
                                {post.game.away_team_point})&nbsp;
                                <img
                                    className="w-8 max-h-8"
                                    src={post.game.away_team.logo}
                                />
                            </h1>
                        </div>
                    </div>

                    <div className="pb-10">
                        <h2>Title</h2>
                        <h1 className="bg-white text-3xl rounded px-5 py-2 shadow ">
                            {post.title}
                        </h1>
                    </div>

                    <div className="pb-16">
                        <h2>Detail</h2>
                        <p className="bg-white rounded px-5 py-2 shadow whitespace-pre-wrap">
                            {post.detail}
                        </p>
                    </div>

                    <div className="pb-16">
                        <h2>Link</h2>
                        <div className="flex flex-col gap-3">
                            {post.links.map((link) => (
                                <a
                                    href={link.url}
                                    key={link.id}
                                    target="_blank"
                                    className="bg-white text-blue-700 font-bold underline rounded px-5 py-2 shadow"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <Link
                            href={route(changePreviousUrl())}
                            className="bg-gray-1000 text-white hover:text-white hover:bg-red-900 shadow hover:shadow-2xl hover:scale-105 active:scale-100 px-5 py-1 rounded duration-200"
                        >
                            Back
                        </Link>

                        <Link
                            href={route("posts.edit", post.id)}
                            className="bg-gray-1000 text-white hover:text-white hover:bg-blue-1000 shadow hover:shadow-2xl hover:scale-105 active:scale-100 px-5 py-1 rounded duration-200"
                        >
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
