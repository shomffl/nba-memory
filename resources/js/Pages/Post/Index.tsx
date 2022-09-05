import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm, Link } from "@inertiajs/inertia-react";

const Index = (props: {
    auth: any;
    postsSortByPosted: Array<Post>;
    postsSortByMatched: Array<PostSortByMatched>;
    seasons: Array<Season>;
    viewOption: number;
}) => {
    const { postsSortByPosted, postsSortByMatched, seasons, viewOption } =
        props;
    const { data, setData } = useForm<any>({
        season: seasons[0].id,
        orderby: "",
    });

    console.log(postsSortByMatched);

    return (
        <Authenticated auth={props.auth} header={null}>
            <div className="px-28 py-20">
                <div>
                    <div>
                        <label>SEASON</label>
                        <select
                            onChange={(e) => setData("season", e.target.value)}
                        >
                            {seasons.map((season) => (
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
                        onClick={(e) =>
                            Inertia.get(route("posts.index"), data, {
                                preserveState: true,
                            })
                        }
                    >
                        send
                    </button>
                    {viewOption == 0 ? (
                        <div>
                            {postsSortByPosted.map((post) => (
                                <button
                                    onClick={(e) =>
                                        Inertia.get(`posts/${post.id}`)
                                    }
                                    className="bg-gray-100 w-full my-10 pb-5 px-10 rounded-md shadow-lg"
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
                                                {post.game.home_team.name}&nbsp;
                                                ({post.game.home_team_point}
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
                                    <h1 className="flex">
                                        title&nbsp;:&nbsp;{post.title}
                                    </h1>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div>
                            {postsSortByMatched.map((post) => (
                                <button
                                    onClick={(e) =>
                                        Inertia.get(
                                            `/posts/${post.posts[0].id}`
                                        )
                                    }
                                    className="bg-gray-100 w-full my-10 pb-5 px-10 rounded-md shadow-lg"
                                    key={post.id}
                                >
                                    <div className="flex items-center">
                                        <p>{post.matched_at}</p>
                                        <div className="flex items-center p-4">
                                            <img
                                                src={post.home_team.logo}
                                                className="w-8 mx-1"
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
                                                className="w-8 mx-1"
                                            />
                                        </div>
                                    </div>
                                    <h1 className="flex">
                                        title&nbsp;:&nbsp;{post.posts[0].title}
                                    </h1>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
