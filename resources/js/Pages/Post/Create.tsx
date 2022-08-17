import React, { useState, useEffect } from "react";
import Authenticated from "../../Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, useForm, Link } from "@inertiajs/inertia-react";
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

    return (
        <Authenticated auth={props.auth} header={null}>
            <Head title="PULL ORIGIN" />
            <div className="px-28 py-20">
                <form onSubmit={handleSubmit}>
                    <div className="bg-gray-100 rounded py-20 px-20 shadow-xl">
                        <div className="pb-10">
                            <h2>Match</h2>
                            <GameSelect
                                games={games}
                                gamesDate={gamesDate}
                                setData={setData}
                            />
                            {props.errors.game_id && (
                                <p className="text-red-1000">
                                    The match-up field is required.
                                </p>
                            )}
                        </div>

                        <div className="pb-10">
                            <h2>Title</h2>
                            <input
                                className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-3xl"
                                type="text"
                                value={data.title}
                                onChange={(e) => {
                                    setData("title", e.target.value);
                                }}
                            />
                            <label className="text-red-1000">
                                {props.errors.title}
                            </label>
                        </div>

                        <div className="pb-10">
                            <h2>Detail</h2>
                            <textarea
                                className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000"
                                rows={10}
                                value={data.detail}
                                onChange={(e) =>
                                    setData("detail", e.target.value)
                                }
                            ></textarea>
                            <label className="text-red-1000">
                                {props.errors.detail}
                            </label>
                        </div>
                        <div className="flex justify-between">
                            <Link
                                href={route("games.index")}
                                className="bg-gray-1000 text-white hover:text-white hover:bg-red-900 shadow hover:shadow-2xl hover:scale-105 px-5 py-1 rounded duration-200"
                            >
                                Back
                            </Link>

                            <button
                                className="bg-gray-1000 text-white hover:text-white hover:bg-blue-1000 shadow hover:shadow-2xl hover:scale-105 px-5 py-1 rounded duration-200"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
};

export default Create;
