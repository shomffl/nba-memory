import React from "react";
import { Link } from "@inertiajs/inertia-react";
import BackButton from "@/Components/Buttons/BackButton";
import { Inertia } from "@inertiajs/inertia";

const Show = (props: { post: Post; BackButtonLink: any }) => {
    const { post, BackButtonLink } = props;

    return (
        <div className="bg-gray-100 rounded py-5 px-5 mx-5 my-5 shadow-lg">
            <div>
                <div className="pb-5">
                    <h2>Match</h2>

                    <div className="flex flex-col gap-1">
                        <h1 className="w-max bg-white text-base rounded px-5 py-1 mr-2 shadow">
                            {post.game.matched_at}
                        </h1>

                        <h1 className="w-max flex items-center bg-white text-base rounded px-5 py-2 mr-2 shadow">
                            <img
                                className="max-h-6"
                                src={post.game.home_team.logo}
                            />
                            &nbsp;
                            {post.game.home_team.name}&nbsp;(
                            {post.game.home_team_point})&nbsp;vs&nbsp;
                            {post.game.away_team.name}&nbsp;(
                            {post.game.away_team_point})&nbsp;
                            <img
                                className="max-h-6"
                                src={post.game.away_team.logo}
                            />
                        </h1>
                    </div>
                </div>

                <div className="pb-5">
                    <h2>Title</h2>
                    <h1 className="bg-white text-lg rounded px-3 py-1 shadow ">
                        {post.title}
                    </h1>
                </div>

                <div className="pb-5">
                    <h2>Detail</h2>
                    <p className="overflow-auto h-[40vh] bg-white rounded border-y-2 border-gray-1000 border-opacity-50 text-sm px-3 py-1 shadow whitespace-pre-wrap">
                        {post.detail}
                    </p>
                </div>

                <div className="pb-5">
                    <h2>Link</h2>
                    <div>
                        {post.links.length == 0 ? (
                            <div className="bg-white text-black rounded px-5 py-1 shadow">
                                No Link
                            </div>
                        ) : (
                            <div className="flex flex-col gap-3">
                                {post.links.map((link) => (
                                    <a
                                        href={link.url}
                                        key={link.id}
                                        target="_blank"
                                        className="bg-white text-blue-700 font-bold underline rounded px-5 py-1 shadow"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-between">
                    <BackButton link={BackButtonLink()} />

                    <Link
                        href={route("posts.edit", post.id)}
                        className="bg-gray-1000 text-white shadow active:shadow-2xl active:scale-105 px-5 py-1 rounded"
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Show;
