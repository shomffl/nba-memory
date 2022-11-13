import React, { useState, useEffect, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useRemember, InertiaLink } from "@inertiajs/inertia-react";
import { EventClickArg } from "@fullcalendar/react";
import Calendar from "../../Game/PC/Components/Calendar";
import ImpressionBox from "../../Game/PC/Components/ImpressionsBox";
import GamesBox from "../../Game/PC/Components/GamesBox";
import { Settings } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";

const Index = (props: any) => {
    const {
        schedules,
        handleEventClick,
        handleDateClick,
        todayGames,
        todayPosts,
        postsByDate,
        setTodayPosts,
    } = props;

    return (
        <div className="flex px-10 py-5">
            <div className="w-8/12">
                <Calendar
                    schedules={schedules}
                    handleEventClick={handleEventClick}
                    handleDateClick={handleDateClick}
                />
            </div>
            <div className="flex flex-col w-4/12">
                <div className="flex">
                    <div className="flex justify-center items-center w-full font-bold h-12 ml-5 mb-5 bg-gray-100 rounded shadow-lg">
                        <h1>{todayGames[0]?.matched_at || "no match"}</h1>
                    </div>
                    <ActionIcon
                        onClick={() => Inertia.get(route("favorites.create"))}
                        className="flex justify-center text-black items-center w-1/12 h-12 ml-3 mb-5 bg-gray-100 rounded shadow-lg hover:bg-gray-200"
                    >
                        <Settings strokeWidth={1.5} />
                    </ActionIcon>
                </div>

                <div className="overflow-auto h-[40vh] ml-5 mb-10 bg-gray-100 rounded shadow-lg">
                    <div className="m-3">
                        <GamesBox
                            todayGames={todayGames}
                            todayPosts={todayPosts}
                        />
                    </div>
                </div>
                <div className="overflow-auto ml-5 h-[30vh] bg-gray-100 rounded shadow-lg">
                    <div className="m-3">
                        <ImpressionBox
                            postsByDate={postsByDate}
                            todayPosts={todayPosts}
                            setTodayPosts={setTodayPosts}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
