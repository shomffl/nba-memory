import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

const Index = (props: { auth: any; posts: Array<Post>; seasons: any }) => {
    const { posts, seasons } = props;
    const { data, setData } = useForm<any>({
        season: seasons[0].id,
        orderby: 0,
    });

    console.log(posts);
    return (
        <Authenticated auth={props.auth} header={null}>
            <div className="px-28 py-20">
                <div>
                    <div>
                        <label>SEASON</label>
                        <select
                            onChange={(e) => setData("season", e.target.value)}
                        >
                            {seasons.map((season: any) => (
                                <option key={season.id} value={season.id}>
                                    {season.season}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>ORDER BY</label>
                        <select
                            onChange={(e) => setData("orderby", e.target.value)}
                        >
                            <option value={0}>POSTED DATE↑</option>
                            <option value={1}>POSTED DATE↓</option>
                            <option value={2}>MATCHED DATE↑</option>
                            <option value={3}>MATCHED DATE↓</option>
                        </select>
                    </div>

                    <button
                        className="bg-blue-1000 text-white px-3 py-1 rounded-lg"
                        onClick={(e) => Inertia.get(route("posts.index"), data)}
                    >
                        send
                    </button>
                    {posts.map((post) => (
                        <div
                            className="bg-gray-100 my-10 pb-5 px-10 rounded-md shadow-lg"
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
                                        {post.game.away_team.name}&nbsp;(
                                        {post.game.away_team_point})
                                    </p>
                                    <img
                                        src={post.game.away_team.logo}
                                        className="w-8 mx-1"
                                    />
                                </div>
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
