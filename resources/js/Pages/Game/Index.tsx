import React, { useState, useEffect, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import { EventClickArg } from "@fullcalendar/react";
import Calendar from "./Components/Calendar";

type Team = {
    id: number;
    name: string;
};

type Game = {
    id: number;
    home_team_id: number;
    away_team_id: number;
    home_team: Team;
    away_team: Team;
    matched_at: string;
    series_id: number;
};

const Index = (props: any) => {
    const { schedules, gamesByDate } = props;
    const [todayGames, setTodayGames] = useState<Array<Game>>([]);

    /**
     * カレンダーの日付クリック時に実行される関数
     * クリックした日付に試合があればtodayGamesに格納
     */
    const handleDateClick = useCallback((arg: any) => {
        if (arg.dateStr in gamesByDate) {
            setTodayGames(gamesByDate[arg.dateStr]);
        } else {
            setTodayGames([]);
        }
    }, []);

    /**
     * カレンダーイベントのクリック時に実行される関数
     */
    const handleEventClick = useCallback((clickInfo: EventClickArg) => {
        console.log(clickInfo.event.title);
    }, []);

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
    const transitionCreatePage = (id: any, matched_at: any) => {
        localStorage.setItem("id", id);
        localStorage.setItem("matched_at", matched_at);

        Inertia.get("/posts/create");
    };

    return (
        <Authenticated auth={props.auth} header={null}>
            <Head title="Memory"></Head>
            <div className="flex px-10 py-5">
                <div className="w-9/12">
                    <Calendar
                        schedules={schedules}
                        handleEventClick={handleEventClick}
                        handleDateClick={handleDateClick}
                    />
                </div>
                <div className="w-3/12 ml-5 bg-gray-200 rounded shadow-xl">
                    {todayGames[0]?.matched_at || "not game"}

                    {todayGames.map((todayGame) => (
                        <div key={todayGame.id}>
                            {todayGame.home_team.name} vs{" "}
                            {todayGame.away_team.name}
                            <button
                                onClick={() =>
                                    transitionCreatePage(
                                        todayGame.id,
                                        todayGame.matched_at
                                    )
                                }
                                className="px-3 mx-2 bg-blue-300 rounded hover:bg-blue-400"
                            >
                                add
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
