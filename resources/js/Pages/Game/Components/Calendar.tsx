import React from "react";
import { Inertia } from "@inertiajs/inertia";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";

const Calendar = (props: any) => {
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
            contentHeight="auto"
            dayMaxEvents={2}
            events={schedules}
            eventClick={handleEventClick}
            dateClick={handleDateClick}
        />
    );
};

export default Calendar;
