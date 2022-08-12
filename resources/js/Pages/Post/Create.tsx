import React, { useState, useEffect } from "react";
import Authenticated from "../../Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import GameSelect from "./Components/GameSelect";

const Create = (props: any) => {
    const { games, gamesDate }: any = props;
    const { data, setData, post } = useForm<SendPost>("PostCreate", {
        game_id: localStorage.getItem("id"),
        title: "",
        detail: "",
    });

    /**
     *  添字に使用するための試合ID
     *  IDは1から始まるがデータの数え方は0から始まるためマイナス1している
     */
    const indexOfGame = Number(localStorage.getItem("id")) - 1;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        post(route("posts.store"));
    };

    const handleAllDeletePost = () => {
        setData({ game_id: "", title: "", detail: "" });
    };

    return (
        <Authenticated auth={props.auth} header={null}>
            <form onSubmit={handleSubmit}>
                <div className="p-5">
                    <div className="p-3">
                        <label className="pr-3">Match-Up</label>
                        <GameSelect
                            games={games}
                            gamesDate={gamesDate}
                            setData={setData}
                        />
                        {props.errors.game_id && (
                            <span>The match-up field is required.</span>
                        )}
                    </div>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => {
                                setData("title", e.target.value);
                            }}
                        />
                        <label>{props.errors.title}</label>
                    </div>
                    <div>
                        <label>Detail</label>
                        <textarea
                            value={data.detail}
                            onChange={(e) => setData("detail", e.target.value)}
                        ></textarea>
                        <label>{props.errors.detail}</label>
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </div>
            </form>
            <div>
                <button
                    onClick={handleAllDeletePost}
                    className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded duration-100"
                >
                    ALL DELETE
                </button>
            </div>
        </Authenticated>
    );
};

export default Create;
