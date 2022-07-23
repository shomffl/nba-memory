import React from "react";
import Authenticated from "../../Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

interface Post {
    game_id: string;
    title: string;
    detail: string;
}

const Create = (props: any) => {
    const { data, setData } = useForm<Post>({
        game_id: "",
        title: "",
        detail: "",
    });

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
        </Authenticated>
    );
};

export default Create;
