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

type RegisterdPost = {};

const Index = (props: any) => {
    const { schedules, gamesByDate, postsByDate } = props;
    const [todayGames, setTodayGames] = useState<Array<Game>>([]);
    const [todayPosts, setTodayPosts] = useState<Array<Post>>([]);
    const [selectedGame, setSelectedGame] = useState<any>({
        postInfo: "",
        match: "",
    });
    console.log(props);
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
        setTodayPosts(postsByDate[clickInfo.event.extendedProps.matched_at]);
        setSelectedGame({
            postInfo: clickInfo.event.extendedProps,
            match: clickInfo.event.title,
        });
    }, []);
    console.log("selectedGame", selectedGame);

    /**
     * 初回レンダリングジに実行される関数。試合のidと日付をデフォルトで格納する。
     */
    useEffect(() => {
        localStorage.setItem("matched_at", schedules[0].date);
        localStorage.setItem("id", gamesByDate[schedules[0]["date"]][0].id);
    }, []);
    console.log("todayGames", todayGames);
    console.log("todayPosts", todayPosts);
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
                <div className="flex flex-col w-3/12">
                    <div className="overflow-auto h-10 ml-5 mb-5 bg-gray-200 rounded shadow-xl">
                        <h1>{todayGames[0]?.matched_at || "not game"}</h1>
                    </div>

                    <div className="overflow-auto h-80 ml-5 mb-5 bg-gray-200 rounded shadow-xl">
                        <div>
                            <h1>試合</h1>
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
                    <div className="overflow-auto h-48 ml-5 bg-gray-200 rounded shadow-xl">
                        <div>
                            <h1>感想</h1>
                            {todayPosts?.map((todayPost) => (
                                <div key={todayPost.id}>
                                    {todayPost.title}{" "}
                                    {todayPost.game.home_team.name} vs{" "}
                                    {todayPost.game.away_team.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
