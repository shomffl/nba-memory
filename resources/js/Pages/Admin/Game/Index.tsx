import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AdminAuthenticated";
import { Head, useRemember } from "@inertiajs/inertia-react";
import "@fullcalendar/react/dist/vdom";
import Calendar from "./Components/Calendar";
import GamesBox from "./Components/GamesBox";
import EditGameBox from "./Components/EditGameBox";

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

                <div
                    className="w-2/5 overflow-auto bg-gray-100 shadow-2xl p-5"
                    style={{ height: "700px" }}
                >
                    <h1>試合</h1>
                    {changeMode ? (
                        <GamesBox
                            todayGames={todayGames}
                            changeMode={changeMode}
                            setChangeMode={setChangeMode}
                            setEditGameData={setEditGameData}
                        />
                    ) : (
                        <EditGameBox
                            editGameData={editGameData}
                            setEditGameData={setEditGameData}
                            changeMode={changeMode}
                            setChangeMode={setChangeMode}
                            handleUpdatePoint={handleUpdatePoint}
                        />
                    )}
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
