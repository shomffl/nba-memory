import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";

export type Post = {
    game_id: string | any;
    title: string;
    detail: string;
};

const Edit = (props: any) => {
    const { post } = props;
    console.log(post);
    return (
        <Authenticated auth={props.auth} header={null}>
            <div className="px-40 py-20">
                <h1 className="text-5xl p-2">{post.title}</h1>
                <div>
                    <h2 className="p-2 pr-5">{post.game.matched_at}</h2>

                    <div>
                        <h2 className="p-2 pr-5">
                            {post.game.home_team.name} vs{" "}
                            {post.game.away_team.name}
                        </h2>
                        <h1 className="p-2 pr-5">
                            {post.game.home_team_point} vs{" "}
                            {post.game.away_team_point}
                        </h1>
                    </div>
                    <div>
                        <p>{post.detail}</p>
                    </div>
                </div>
                <div>
                    <button className="bg-yellow-400 hover:bg-yellow-600 px-3 rounded">
                        save
                    </button>
                </div>
            </div>
        </Authenticated>
    );
};

export default Edit;
