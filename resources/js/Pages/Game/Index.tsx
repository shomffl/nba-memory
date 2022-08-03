import React, { useState, useEffect, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";

const Index = (props: any) => {
    const { schedules } = props;
    const { data, setData } = useForm({
        matched_at: "",
    });

    const handleDateClick = useCallback((arg: any) => {
        setData({
            matched_at: arg.dateStr,
        });
    }, []);

    const handleEventClick = useCallback((clickInfo: EventClickArg) => {
        console.log(clickInfo.event.title);
    }, []);

    useEffect(() => {
        localStorage.setItem("matched_at", schedules[0].date);
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

    console.log(localStorage.getItem("matched_at"));
    return (
        <Authenticated auth={props.auth} header={null}>
            <Head title="Memory"></Head>
            <div className="w-9/12 px-10 py-5">
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
        </Authenticated>
    );
};

export default Index;
