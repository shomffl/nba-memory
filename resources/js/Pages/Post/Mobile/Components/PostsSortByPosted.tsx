import { Inertia } from "@inertiajs/inertia";
import React from "react";

const PostsSortByPosted = (props: { postsSortByPosted: Array<Post> }) => {
    const { postsSortByPosted } = props;
    return (
        <div>
            {postsSortByPosted.map((post) => (
                <button
                    onClick={(e) => Inertia.get(`posts/${post.id}`)}
                    className="bg-gray-100 w-full my-5 p-2 px-5 rounded-md shadow-lg active:scale-100"
                    key={post.id}
                >
                    <div className="flex flex-col items-start gap-3">
                        <p>{post.game.matched_at}</p>
                        <div className="flex items-center pb-2">
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
                    <h2 className="flex">title&nbsp;:&nbsp;{post.title}</h2>
                </button>
            ))}
        </div>
    );
};

export default PostsSortByPosted;
