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
            <div className="bg-gray-100 rounded py-5 px-5 mx-5 my-5 shadow-lg">
                <div>
                    <div className="pb-5">
                        <h2>Match</h2>
                        <div className="flex flex-col gap-1">
                            <h1 className="w-max bg-white text-base rounded px-5 py-1 mr-2 shadow">
                                {post.game.matched_at}
                            </h1>

                            <h1 className="w-max flex items-center bg-white text-base rounded px-5 py-2 mr-2 shadow">
                                <img
                                    className="max-h-6"
                                    src={post.game.home_team.logo}
                                />
                                &nbsp;
                                {post.game.home_team.name}&nbsp;(
                                {post.game.home_team_point})&nbsp;vs&nbsp;
                                {post.game.away_team.name}&nbsp;(
                                {post.game.away_team_point})&nbsp;
                                <img
                                    className="max-h-6"
                                    src={post.game.away_team.logo}
                                />
                            </h1>
                        </div>
                    </div>

                    <div className="pb-5">
                        <div className="flex items-end gap-2">
                            <h2>Title</h2>
                            <p className="text-red-1000 text-sm">
                                {errors.title}
                            </p>
                        </div>
                        <input
                            className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-xl"
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                    </div>

                    <div className="pb-5">
                        <div className="flex items-end gap-2">
                            <h2>Detail</h2>
                            <p className="text-red-1000 text-sm">
                                {errors.detail}
                            </p>
                        </div>
                        <textarea
                            className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000"
                            rows={5}
                            value={data.detail}
                            onChange={(e) => setData("detail", e.target.value)}
                        ></textarea>
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
