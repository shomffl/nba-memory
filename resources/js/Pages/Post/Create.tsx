import React, { useState, useEffect } from "react";
import Authenticated from "../../Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import GameSelect from "./Components/GameSelect";

export type Post = {
    game_id: string | any;
    title: string;
    detail: string;
};

const Create = (props: any) => {
    const { games, gamesDate }: any = props;
    const { data, setData, post } = useForm<Post>({
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
                        <label>Score</label>
                        <div className="flex ">
                            <div className="pr-4">
                                <span>HOME : </span>
                                {games[indexOfGame] != null
                                    ? games[indexOfGame]?.home_team_point
                                    : "????"}
                            </div>
                            <div>
                                <span>AWAY : </span>
                                {games[indexOfGame] != null
                                    ? games[indexOfGame]?.away_team_point
                                    : "????"}
                            </div>
                        </div>
                    </div>
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
                    <div>
                        <button>Send</button>
                    </div>
                </div>
            </form>
        </Authenticated>
    );
};

export default Create;
