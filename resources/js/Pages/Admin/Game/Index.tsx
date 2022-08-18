import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AdminAuthenticated";
import { Head, useRemember } from "@inertiajs/inertia-react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventContentArg, formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { CalendarStyleWrapper } from "../../../Components/CalendarStyleWrapper";

const Index = (props: any) => {
    const { schedules, gamesByDate } = props;
    const [todayGames, setTodayGames] = useRemember<Array<Game>>(
        [],
        "IndexTodayGames"
    );
    console.log(todayGames);
    /**
     * カレンダーの日付クリック時に実行される関数
     * クリックした日付に試合があればtodayGamesに格納
     * クリックした日付に感想があればtodayPostsに格納
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
            <div className="py-5 p-10">
                <CalendarStyleWrapper>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        locale="us"
                        locales={allLocales}
                        titleFormat={{
                            year: "2-digit",
                            month: "2-digit",
                            day: "2-digit",
                        }}
                        headerToolbar={{
                            start: "",
                            center: "title",
                            end: "today prev,next",
                        }}
                        contentHeight="75vh"
                        events={schedules}
                        dateClick={handleDateClick}
                    />
                </CalendarStyleWrapper>
            </div>
        </Authenticated>
    );
};

export default Index;
