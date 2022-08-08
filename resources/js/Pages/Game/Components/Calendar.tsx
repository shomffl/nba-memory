import React from "react";
import { Inertia } from "@inertiajs/inertia";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";

type Schedule = {
    display: string;
    date: string;
    match: string;
};

type Props = {
    schedules: Schedule[];
    handleEventClick: (arg: EventClickArg) => void;
    handleDateClick: (arg: DateClickArg) => void;
};

const Calendar = (props: Props) => {
    const { schedules, handleEventClick, handleDateClick } = props;
    return (
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
                end: "today prev,next",
            }}
            contentHeight="75vh"
            dayMaxEvents={1}
            events={schedules}
            eventClick={handleEventClick}
            dateClick={handleDateClick}
        />
    );
};

export default Calendar;
