import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AdminAuthenticated";
import { Head, useRemember } from "@inertiajs/inertia-react";
import "@fullcalendar/react/dist/vdom";
import Calendar from "./Components/Calendar";

const Index = (props: any) => {
    const { schedules, gamesByDate } = props;
    const [todayGames, setTodayGames] = useRemember<Array<Game>>(
        [],
        "IndexTodayGames"
    );
    const [changeMode, setChangeMode] = useState<boolean>(true);
    const [editGameData, setEditGameData] = useState<Game>();
    console.log(changeMode);
    console.log("editGameData", editGameData);
    /**
     * カレンダーの日付クリック時に実行される関数
     * クリックした日付に試合があればtodayGamesに格納
     */
    const handleDateClick = (arg: any) => {
        if (arg.dateStr in gamesByDate) {
            setTodayGames(gamesByDate[arg.dateStr]);
        } else {
            setTodayGames([]);
        }
    };

    return (
        <Authenticated auth={props.auth} header={null}>
            <Head title="Memory"></Head>
            <div className="flex py-5 p-10">
                <Calendar
                    schedules={schedules}
                    handleDateClick={handleDateClick}
                />

                <div className="w-2/5 bg-gray-100 shadow-2xl p-5">
                    <h1>試合</h1>
                    {changeMode ? (
                        <div>
                            {todayGames?.map((todayGame) => (
                                <div
                                    key={todayGame.id}
                                    className="flex items-center justify-between"
                                >
                                    <h2 className="flex items-center rounded font-bold shadow w-3/4 my-3 px-2 py-3 bg-white">
                                        <div>
                                            {todayGame.home_team.name}
                                            &nbsp;(
                                            {todayGame.home_team_point})
                                        </div>
                                        &nbsp;vs&nbsp;
                                        <div>
                                            {todayGame.away_team.name}
                                            &nbsp;(
                                            {todayGame.away_team_point})
                                        </div>
                                    </h2>
                                    <div>
                                        <button
                                            onClick={(e) => {
                                                setChangeMode(!changeMode);
                                                setEditGameData(todayGame);
                                            }}
                                            className="px-5 py-2 bg-gray-1000 text-white shadow hover:text-white hover:bg-blue-1000 hover:shadow-2xl hover:scale-105 rounded duration-200"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center justify-between">
                                <h2 className="flex items-center rounded font-bold shadow w-3/4 my-3 px-2 py-3 bg-white">
                                    <div>
                                        {editGameData?.home_team.name}
                                        &nbsp;(
                                        {editGameData?.home_team_point})
                                    </div>
                                    &nbsp;vs&nbsp;
                                    <div>
                                        {editGameData?.away_team.name}
                                        &nbsp;(
                                        {editGameData?.away_team_point})
                                    </div>
                                </h2>
                                <div className="flex">
                                    <button
                                        onClick={(e) => {
                                            setChangeMode(!changeMode);
                                        }}
                                        className="px-3 py-2 mx-3 bg-gray-1000 text-white shadow hover:text-white hover:bg-red-900 hover:shadow-2xl hover:scale-105 rounded duration-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            setChangeMode(!changeMode);
                                        }}
                                        className="px-5 py-2 bg-gray-1000 text-white shadow hover:text-white hover:bg-blue-1000 hover:shadow-2xl hover:scale-105 rounded duration-200"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
