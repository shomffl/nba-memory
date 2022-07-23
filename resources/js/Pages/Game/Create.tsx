import React from "react";
import Authenticated from "../../Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Axios } from "axios";

type Post = {
    game_id: string;
    title: string;
    detail: string;
};

const Create = (props: any) => {
    const { games }: any = usePage().props;
    const { data, setData } = useForm<Post>({
        game_id: "",
        title: "",
        detail: "",
    });
    console.log(data);
    console.log(games);
    console.log(props);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        Inertia.post(route("games.store"), data);
    };

    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Memory
                </h2>
            }
        >
            <form onSubmit={handleSubmit}>
                <div className="p-5">
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <label>{props.errors.title}</label>
                    </div>
                    <div>
                        <label>Detail</label>
                        <textarea
                            onChange={(e) => setData("detail", e.target.value)}
                        ></textarea>
                        <label>{props.errors.detail}</label>
                    </div>
                    <div className="p-3">
                        <label className="pr-3">Match-Up</label>
                        <select
                            onChange={(e) => setData("game_id", e.target.value)}
                        >
                            <option>Unselected</option>
                            {games.map(
                                (data: {
                                    id: number;
                                    home_team: { name: string };
                                    away_team: { name: string };
                                }) => {
                                    return (
                                        <option key={data.id} value={data.id}>
                                            {data.home_team.name}&nbsp; vs&nbsp;
                                            {data.away_team.name}
                                        </option>
                                    );
                                }
                            )}
                        </select>
                        {props.errors.game_id && (
                            <span>The match-up field is required.</span>
                        )}
                    </div>
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </form>
        </Authenticated>
    );
};

export default Create;
