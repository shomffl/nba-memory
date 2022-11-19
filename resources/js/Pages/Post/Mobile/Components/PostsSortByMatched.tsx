import { Inertia } from "@inertiajs/inertia";
import React from "react";

const PostsSortByMatched = (props: {
    postsSortByMatched: Array<PostSortByMatched>;
}) => {
    const { postsSortByMatched } = props;
    return (
        <div>
            {postsSortByMatched.map((post) => (
                <button
                    onClick={(e) => Inertia.get(`/posts/${post.posts[0].id}`)}
                    className="bg-gray-100 w-full my-5 p-2 px-5 rounded-md shadow-lg active:scale-100"
                    key={post.id}
                >
                    <div className="flex flex-col items-start gap-3">
                        <p>{post.matched_at}</p>
                        <div className="flex items-center pb-2">
                            <img
                                src={post.home_team.logo}
                                className="max-h-7 w-6 mx-1"
                            />
                            <p>
                                {post.home_team.name}&nbsp; (
                                {post.home_team_point}
                                )&nbsp;vs&nbsp;
                                {post.away_team.name}
                                &nbsp;(
                                {post.away_team_point})
                            </p>
                            <img
                                src={post.away_team.logo}
                                className="max-h-7 w-6 mx-1"
                            />
                        </div>
                    </div>
                    <h1 className="flex">
                        title&nbsp;:&nbsp;{post.posts[0].title}
                    </h1>
                </button>
            ))}
        </div>
    );
};

export default PostsSortByMatched;
