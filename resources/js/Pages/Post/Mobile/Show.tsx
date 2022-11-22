import React from "react";
import { Link } from "@inertiajs/inertia-react";
import BackButton from "@/Components/Buttons/BackButton";

const Show = (props: { post: Post; BackButtonLink: any }) => {
    const { post, BackButtonLink } = props;

    return (
        <div className="py-5 px-5 mx-5 my-5">
            <div>
                <div className="pb-5">
                    <h2>Match</h2>

                    <div className="flex flex-col gap-1 border-l border-gray-1000">
                        <h1 className="w-max text-base pl-3 py-1 mr-2">
                            {post.game.matched_at}
                        </h1>

                        <h1 className="w-max flex items-center text-base px-2 py-1 mr-2">
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

                <h2>Title</h2>
                <div className="pb-5">
                    <h1 className="text-lg px-3 py-1 border-l border-gray-1000">
                        {post.title}
                    </h1>
                </div>

                <div className="pb-5">
                    <h2>Detail</h2>
                    <div className="border-y border-gray-100">
                        <p className="overflow-auto h-[40vh] border-l border-gray-1000 text-sm px-3 py-1 whitespace-pre-wrap">
                            {post.detail}
                        </p>
                    </div>
                </div>

                <div className="pb-8">
                    <h2>Link</h2>
                    <div>
                        {post.links.length == 0 ? (
                            <div className="bg-white text-black rounded px-5 py-1 shadow">
                                No Link
                            </div>
                        ) : (
                            <ul className="flex flex-col gap-3 list-decimal list-inside">
                                {post.links.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            className="text-blue-700 font-bold underline px-1 py-2"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
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
