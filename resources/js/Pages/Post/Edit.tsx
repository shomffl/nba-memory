import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";

const Edit = (props: any) => {
    const { post } = props;
    const { data, setData, put } = useForm<SendPost>("EditCreate", {
        game_id: post.game_id,
        title: post.title,
        detail: post.detail,
    });

    const handleEditPost = (e: any) => {
        e.preventDefault();
        put(route("posts.update", post.id));
    };

    return (
        <Authenticated auth={props.auth} header={null}>
            <form onSubmit={handleEditPost}>
                <div className="px-40 py-20">
                    <h1 className="text-5xl p-2">
                        <input
                            className="border border-black "
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                    </h1>
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
                            <textarea
                                value={data.detail}
                                onChange={(e) =>
                                    setData("detail", e.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-3 rounded">
                            save
                        </button>
                    </div>
                </div>
            </form>
        </Authenticated>
    );
};

export default Edit;
