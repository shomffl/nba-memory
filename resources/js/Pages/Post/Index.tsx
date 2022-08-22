import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";

const Index = (props: { auth: any; posts: any }) => {
    const { posts } = props;
    return (
        <Authenticated auth={props.auth} header={null}>
            <div className="px-28 py-20">
                <div>
                    {posts.map((post: Post) => (
                        <div
                            className="bg-gray-100 my-10 pb-5 px-10 rounded-md shadow-lg"
                            key={post.id}
                        >
                            <div className="flex items-center">
                                <p>{post.game.matched_at}</p>
                                <p className="flex items-center p-4">
                                    <img
                                        src={post.game.home_team.logo}
                                        className="w-8 mx-1"
                                    />
                                    <p>
                                        {post.game.home_team.name}&nbsp; (
                                        {post.game.home_team_point}
                                        )&nbsp;vs&nbsp;
                                        {post.game.away_team.name}&nbsp;(
                                        {post.game.away_team_point})
                                    </p>
                                    <img
                                        src={post.game.away_team.logo}
                                        className="w-8 mx-1"
                                    />
                                </p>
                            </div>
                            <h1>title&nbsp;:&nbsp;{post.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
