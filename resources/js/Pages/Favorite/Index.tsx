import React, { useState, useEffect, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useRemember, InertiaLink } from "@inertiajs/inertia-react";
import { EventClickArg } from "@fullcalendar/react";
import Calendar from "../Game/Components/Calendar";
import ImpressionBox from "../Game/Components/ImpressionsBox";
import GamesBox from "../Game/Components/GamesBox";
import { Settings } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";

const FavoriteTeam = (props: any) => {
    const { schedules, gamesByDate, postsByDate, teams } = props;
    const [todayGames, setTodayGames] = useRemember<Array<Game>>(
        [],
        "IndexTodayGames"
    );
    const [todayPosts, setTodayPosts] = useRemember<Array<Post>>(
        [],
        "IndexTodayPosts"
    );

    /**
     * カレンダーの日付クリック時に実行される関数
     * クリックした日付に試合があればtodayGamesに格納
     * クリックした日付に感想があればtodayPostsに格納
     */
    const handleDateClick = (arg: any) => {
        if (arg.dateStr in gamesByDate) {
            setTodayGames(gamesByDate[arg.dateStr]);
            setTodayPosts(postsByDate[arg.dateStr]);
        } else {
            setTodayGames([]);
            setTodayPosts([]);
        }
    };

    /**
     * カレンダーイベントのクリック時に実行される関数
     * 日付をクリックしても実行されるため、条件分岐でイベントがクリックされた時にのみ実行されるように変更
     */
    const handleEventClick = (clickInfo: EventClickArg) => {
        if (clickInfo.event.title != "") {
            setTodayPosts(
                postsByDate[clickInfo.event.extendedProps.matched_at]
            );
            setTodayGames(
                gamesByDate[clickInfo.event.extendedProps.matched_at]
            );
        }
    };

    /**
     * 初回レンダリングジに実行される関数。試合のidと日付をデフォルトで格納する。
     */
    useEffect(() => {
        localStorage.setItem("matched_at", schedules[0].date);
        localStorage.setItem("id", gamesByDate[schedules[0]["date"]][0].id);
    }, []);

    return (
        <Authenticated auth={props.auth} session={props.session} header={null}>
            <Head title="PULL ORIGIN"></Head>
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
                            onClick={() =>
                                Inertia.get(route("favorites.create"))
                            }
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
        </Authenticated>
    );
};

export default FavoriteTeam;
