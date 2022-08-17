import React, { useState, useEffect, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useRemember, InertiaLink } from "@inertiajs/inertia-react";
import { EventClickArg } from "@fullcalendar/react";
import Calendar from "./Components/Calendar";
import ImpressionBox from "./Components/ImpressionsBox";
import GamesBox from "./Components/GamesBox";

const Index = (props: any) => {
    const { schedules, gamesByDate, postsByDate } = props;
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

    /**
     * Create.tsxへ遷移するための関数
     *
     * @param id 試合ID
     * @param matched_at 試合日時
     */
    const transitionCreatePage = useCallback((id: any, matched_at: string) => {
        localStorage.setItem("id", id);
        localStorage.setItem("matched_at", matched_at);

        Inertia.get("/posts/create");
    }, []);

    return (
        <Authenticated auth={props.auth} header={null}>
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
                    <div className="flex justify-center items-center font-bold h-12 ml-5 mb-5 bg-gray-100 rounded shadow-xl">
                        <h1>{todayGames[0]?.matched_at || "no match"}</h1>
                    </div>

                    <div className="overflow-auto h-96 ml-5 mb-5 bg-gray-100 rounded shadow-xl">
                        <div className="m-3">
                            <GamesBox
                                todayGames={todayGames}
                                transitionCreatePage={transitionCreatePage}
                            />
                        </div>
                    </div>
                    <div className="overflow-auto h-56 ml-5 bg-gray-100 rounded shadow-xl">
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

export default Index;
