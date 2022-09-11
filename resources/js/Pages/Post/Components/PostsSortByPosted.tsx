import { Inertia } from "@inertiajs/inertia";
import React from "react";

const PostsSortByPosted = (props: { postsSortByPosted: Array<Post> }) => {
    const { postsSortByPosted } = props;
    return (
        <div>
            {postsSortByPosted.map((post) => (
                <button
                    onClick={(e) => Inertia.get(`posts/${post.id}`)}
                    className="bg-gray-100 w-full my-10 pb-5 px-10 rounded-md shadow-lg hover:scale-[1.01] duration-200 active:scale-100"
                    key={post.id}
                >
                    <div className="flex items-center">
                        <p>{post.game.matched_at}</p>
                        <div className="flex items-center p-4">
                            <img
                                src={post.game.home_team.logo}
                                className="w-8 mx-1"
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
                                className="w-8 mx-1"
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
