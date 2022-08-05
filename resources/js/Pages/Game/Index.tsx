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

type Post = {
    id: number;
    title: string;
    detail: string;
    game: Game;
};

const Index = (props: any) => {
    const { schedules, gamesByDate, postsByDate } = props;
    const [todayGames, setTodayGames] = useState<Array<Game>>([]);
    const [todayPosts, setTodayPosts] = useState<Array<Post>>([]);
    /**
     * カレンダーの日付クリック時に実行される関数
     * クリックした日付に試合があればtodayGamesに格納
     * クリックした日付に感想があればtodayPostsに格納
     */
    const handleDateClick = useCallback((arg: any) => {
        if (arg.dateStr in gamesByDate) {
            setTodayGames(gamesByDate[arg.dateStr]);
            setTodayPosts(postsByDate[arg.dateStr]);
        } else {
            setTodayGames([]);
            setTodayPosts([]);
        }
    }, []);

    /**
     * カレンダーイベントのクリック時に実行される関数
     */
    const handleEventClick = useCallback((clickInfo: EventClickArg) => {
        console.log("event", clickInfo.event.extendedProps.game_id);
    }, []);

    /**
     * 初回レンダリングジに実行される関数。試合のidと日付をデフォルトで格納する。
     */
    useEffect(() => {
        localStorage.setItem("matched_at", schedules[0].date);
        localStorage.setItem("id", gamesByDate[schedules[0]["date"]][0].id);
    }, []);
    console.log(todayGames);
    console.log(todayPosts);
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
                    <div>
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
                    <div className="pt-5">
                        {todayPosts.map((todayPost) => (
                            <div key={todayPost.id}>
                                {todayPost.title}{" "}
                                {todayPost.game.home_team.name} vs{" "}
                                {todayPost.game.away_team.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
