import React, { useState } from "react";
import { Head, useForm, Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Links from "./Components/Links";
import BackButton from "@/Components/Buttons/BackButton";

const Edit = (props: any) => {
    const { post, data, setData, link, setLink, handleEditPost, errors } =
        props;

    return (
        <form onSubmit={handleEditPost}>
            <div className="px-28 py-20">
                <div className="bg-gray-100 rounded py-20 px-20 shadow-xl">
                    <div className="pb-10">
                        <h2>Match</h2>
                        <div className="flex">
                            <h1 className="bg-white text-3xl rounded px-5 py-2 mr-2 shadow">
                                {post.game.matched_at}
                            </h1>

                            <h1 className="flex items-center bg-white text-3xl rounded px-5 py-2 mr-2 shadow">
                                <img
                                    className="w-8 max-h-8"
                                    src={post.game.home_team.logo}
                                />
                                &nbsp;
                                {post.game.home_team.name}&nbsp;(
                                {post.game.home_team_point})&nbsp;vs&nbsp;
                                {post.game.away_team.name}&nbsp;(
                                {post.game.away_team_point})&nbsp;
                                <img
                                    className="w-8 max-h-8"
                                    src={post.game.away_team.logo}
                                />
                            </h1>
                        </div>
                    </div>

                    <div className="pb-10">
                        <h2>Title</h2>

                        <input
                            className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-3xl"
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
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

                    <div className="pb-16">
                        <Links
                            data={data}
                            setData={setData}
                            link={link}
                            setLink={setLink}
                        />
                    </div>

                    <div className="flex justify-between">
                        <BackButton link={route("posts.show", post.id)} />

                        <button
                            className="bg-gray-1000 text-white hover:text-white hover:bg-blue-1000 shadow hover:shadow-2xl hover:scale-105 active:scale-100 px-5 py-1 rounded duration-200"
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Edit;
