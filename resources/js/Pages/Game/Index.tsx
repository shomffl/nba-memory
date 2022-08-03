import React, { useState, useEffect, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";

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
    const { data, setData } = useForm({
        matched_at: "",
    });
    const [todayGames, setTodayGames] = useState<Array<Game>>([]);

    const handleDateClick = useCallback((arg: any) => {
        setData({
            matched_at: arg.dateStr,
        });
        if (arg.dateStr in gamesByDate) {
            setTodayGames(gamesByDate[arg.dateStr]);
        } else {
            setTodayGames([]);
        }
    }, []);

    console.log("gamesByDate", gamesByDate);
    console.log("todayGame", todayGames);
    const handleEventClick = useCallback((clickInfo: EventClickArg) => {
        console.log(clickInfo.event.title);
    }, []);

    useEffect(() => {
        localStorage.setItem("matched_at", schedules[0].date);
        localStorage.setItem("id", gamesByDate[schedules[0]["date"]][0].id);
    }, []);

    const clickCreateButton = () => {
        Inertia.get(route("posts.create"));
        if (data.matched_at == "") {
            localStorage.setItem("matched_at", schedules[0].date);
        } else {
            for (let i = 0; i < schedules.length; i++) {
                if (data.matched_at == schedules[i].date) {
                    localStorage.setItem("matched_at", data.matched_at);
                    break;
                } else {
                    localStorage.setItem("matched_at", schedules[0].date);
                }
            }
        }
    };

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
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        locale="ja"
                        locales={allLocales}
                        titleFormat={{
                            year: "2-digit",
                            month: "2-digit",
                            day: "2-digit",
                        }}
                        headerToolbar={{
                            start: "dayGridMonth",
                            center: "title",
                            end: "myCustomButton today prev,next",
                        }}
                        customButtons={{
                            myCustomButton: {
                                text: "create",
                                click: clickCreateButton,
                            },
                        }}
                        contentHeight="auto"
                        dayMaxEvents={2}
                        events={schedules}
                        eventClick={handleEventClick}
                        dateClick={handleDateClick}
                    />
                </div>
                <div className="w-3/12 ml-5 bg-gray-200 rounded shadow-xl">
                    <div>{}</div>
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
