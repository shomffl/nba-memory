import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import GameSelect from "./Components/GameSelect";
import Links from "./Components/Links";
import BackButton from "@/Components/Buttons/BackButton";

const Create = (props: any) => {
    const {
        session,
        games,
        gamesDate,
        data,
        setData,
        link,
        setLink,
        handleSubmit,
        errors,
    }: any = props;

    return (
        <div className="px-28 py-20">
            <div className="bg-gray-100 rounded py-20 px-20 shadow-xl">
                <div className="pb-10">
                    <h2>Match</h2>
                    <GameSelect
                        games={games}
                        gamesDate={gamesDate}
                        setData={setData}
                    />
                    {errors.game_id && (
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
                    <label className="text-red-1000">{errors.title}</label>
                </div>

                <div className="pb-10">
                    <h2>Detail</h2>
                    <textarea
                        className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000"
                        rows={10}
                        value={data.detail}
                        onChange={(e) => setData("detail", e.target.value)}
                    ></textarea>
                    <label className="text-red-1000">{errors.detail}</label>
                </div>

                <div className="pb-10">
                    <Links
                        data={data}
                        setData={setData}
                        link={link}
                        setLink={setLink}
                    />
                </div>

                <div className="flex justify-between">
                    {session.calendar == 1 ? (
                        <BackButton link={route("games.index")} />
                    ) : (
                        <BackButton link={route("favorites.index")} />
                    )}

                    <button
                        onClick={handleSubmit}
                        className="bg-gray-1000 text-white hover:text-white hover:bg-blue-1000 shadow hover:shadow-2xl hover:scale-105 active:scale-100 px-5 py-1 rounded duration-200"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Create;
