import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";

const Show = (props: { auth: any; post: Post }) => {
    const { post } = props;

    return (
        <Authenticated auth={props.auth} header={null}>
            <div className="px-40 py-20">
                <h1 className="text-5xl p-2">{post.title}</h1>
                <div>
                    <h2 className="p-2 pr-5">{post.game.matched_at}</h2>

                    <div>
                        <h2 className="p-2 pr-5">
                            {post.game.home_team.name}&nbsp;(
                            {post.game.home_team_point})&nbsp;vs&nbsp;
                            {post.game.away_team.name}&nbsp;(
                            {post.game.away_team_point})
                        </h2>
                    </div>
                    <div>
                        <p>{post.detail}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={(e) => Inertia.get(`/posts/${post.id}/edit`)}
                        className="bg-yellow-400 hover:bg-yellow-600 px-3 rounded"
                    >
                        edit
                    </button>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
