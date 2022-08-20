import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AdminAuthenticated";
import { Head, useRemember } from "@inertiajs/inertia-react";
import "@fullcalendar/react/dist/vdom";
import Calendar from "./Components/Calendar";

const Index = (props: any) => {
    const { schedules, gamesByDate } = props;
    const [todayGames, setTodayGames] = useRemember<Array<Game>>([]);
    const [changeMode, setChangeMode] = useState<boolean>(true);
    const [editGameData, setEditGameData] = useState<any>();

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

    const handleUpdatePoint = (e: any) => {
        e.preventDefault();
        Inertia.put(`/admin/games/${editGameData?.id}`, editGameData, {
            onSuccess: () => {
                setChangeMode(!changeMode);
                rewriteData();
            },
        });
    };

    /**
     * 点数更新後にデータを書き換えるための関数
     * propsの更新タイミングが遅いため、propsの更新を待たずに直接データをsetする
     */
    const rewriteData = () => {
        const data = todayGames?.filter(
            (e: any) => !(e.id == editGameData?.id)
        );
        data.push(editGameData);
        setTodayGames(data);
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
                                    <h2 className="flex justify-between items-center rounded font-bold shadow w-3/4 my-3 px-2 py-3 bg-white">
                                        <img
                                            className="w-1/12"
                                            src={todayGame.home_team.logo}
                                        />
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
                                        <img
                                            className="w-1/12"
                                            src={todayGame.away_team.logo}
                                        />
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
                            <div>
                                <div>
                                    <h2 className="flex justify-between items-center rounded font-bold shadow  my-3 px-4 py-3 bg-white">
                                        <img
                                            className="w-1/12"
                                            src={editGameData?.home_team.logo}
                                        />
                                        <div>
                                            {editGameData?.home_team.name}
                                            &nbsp;
                                        </div>
                                        &nbsp;vs&nbsp;
                                        <div>
                                            {editGameData?.away_team.name}
                                            &nbsp;
                                        </div>
                                        <img
                                            className="w-1/12"
                                            src={editGameData?.away_team.logo}
                                        />
                                    </h2>
                                    <div className="flex items-center">
                                        <input
                                            className="text-2xl w-2/4 text-center"
                                            type="number"
                                            value={
                                                editGameData?.home_team_point
                                            }
                                            onChange={(e) =>
                                                setEditGameData({
                                                    ...editGameData,
                                                    home_team_point:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                        &nbsp;vs&nbsp;
                                        <input
                                            className="text-2xl w-2/4 text-center"
                                            type="number"
                                            value={
                                                editGameData?.away_team_point
                                            }
                                            onChange={(e) =>
                                                setEditGameData({
                                                    ...editGameData,
                                                    away_team_point:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-between px-4 py-8">
                                    <button
                                        onClick={(e) => {
                                            setChangeMode(!changeMode);
                                        }}
                                        className="px-6 py-2 bg-gray-1000 text-white shadow hover:text-white hover:bg-red-900 hover:shadow-2xl hover:scale-105 rounded duration-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleUpdatePoint}
                                        className="px-6 py-2 bg-gray-1000 text-white shadow hover:text-white hover:bg-blue-1000 hover:shadow-2xl hover:scale-105 rounded duration-200"
                                    >
                                        Update
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
