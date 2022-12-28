import React from "react";
import { Inertia } from "@inertiajs/inertia";

type Props = {
    postsSortByPosted: Array<PostsSortByPosted>;
};

const PostsSortByPosted = (props: Props) => {
    const { postsSortByPosted } = props;
    return (
        <div>
            {postsSortByPosted.map((post) => (
                <button
                    onClick={() =>
                        Inertia.visit(`posts/${post.id}`, {
                            preserveScroll: true,
                        })
                    }
                    className="bg-gray-100 w-full my-5 pb-5 px-10 rounded-md shadow-lg hover:scale-[1.01] duration-200 active:scale-100"
                    key={post.id}
                >
                    <div className="flex items-center">
                        <p>{post.game.matched_at}</p>
                        <div className="flex items-center p-4">
                            <img
                                src={post.game.home_team.logo}
                                className="max-h-7 w-6 mx-1"
                            />
                            <p>
                                {post.game.home_team.name}&nbsp; (
                                {post.game.home_team_point}
                                )&nbsp;vs&nbsp;
                                {post.game.away_team.name}
                                &nbsp;(
                                {post.game.away_team_point})
                            </p>
                            <img
                                src={post.game.away_team.logo}
                                className="max-h-7 w-6 mx-1"
                            />
                        </div>
                    </div>
                    <h1 className="flex">title&nbsp;:&nbsp;{post.title}</h1>
                </button>
            ))}
        </div>
    );
};

export default PostsSortByPosted;
