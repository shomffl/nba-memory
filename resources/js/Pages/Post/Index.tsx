import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";

const Index = (props: { auth: any; posts: Array<Post>; seasons: any }) => {
    const { posts, seasons } = props;
    const [season, setSeason] = useState(seasons[0].id);

    return (
        <Authenticated auth={props.auth} header={null}>
            <div className="px-28 py-20">
                <div>
                    <select onChange={(e) => setSeason(e.target.value)}>
                        {seasons.map((season: any) => (
                            <option key={season.id} value={season.id}>
                                {season.season}
                            </option>
                        ))}
                    </select>

                    <button
                        className="bg-blue-1000 text-white px-3 py-1 rounded-lg"
                        onClick={(e) =>
                            Inertia.get(route("posts.index"), {
                                season: season,
                            })
                        }
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
