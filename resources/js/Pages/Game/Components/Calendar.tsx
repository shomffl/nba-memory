import React, { useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { CalendarStyleWrapper } from "./CalendarStyleWrapper";

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

    const defaultDate: any = localStorage.getItem("matched_at");
    return (
        <div className="bg-gray-100 shadow-2xl">
            <CalendarStyleWrapper>
                <FullCalendar
                    eventTextColor="#262626"
                    eventBackgroundColor="white"
                    eventBorderColor="#889c9b"
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
                    initialDate={defaultDate}
                    contentHeight="75vh"
                    dayMaxEvents={1}
                    events={schedules}
                    eventClick={handleEventClick}
                    dateClick={handleDateClick}
                />
            </CalendarStyleWrapper>
        </div>
    );
};

export default Calendar;
