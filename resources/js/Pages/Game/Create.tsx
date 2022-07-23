import React from "react";
import Authenticated from "../../Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";

interface Post {
    game_id: string;
    title: string;
    detail: string;
}

const Create = (props: any) => {
    const { games }: any = usePage().props;
    const { data, setData } = useForm<Post>({
        game_id: "",
        title: "",
        detail: "",
    });
    console.log(data);
    console.log(games);
    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Memory
                </h2>
            }
        >
            <div>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={(e) => setData("title", e.target.value)}
                    />
                </div>
                <div>
                    <label>Detail</label>
                    <textarea
                        onChange={(e) => setData("detail", e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label>Match-Up</label>
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
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
