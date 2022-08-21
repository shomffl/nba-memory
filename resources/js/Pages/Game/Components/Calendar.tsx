import React, { useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { CalendarStyleWrapper } from "../../../Components/CalendarStyleWrapper";

type Props = {
    schedules: Schedule[];
    handleEventClick: (arg: EventClickArg) => void;
    handleDateClick: (arg: DateClickArg) => void;
};

const Calendar = (props: Props) => {
    const { schedules, handleEventClick, handleDateClick } = props;

    const defaultDate: any = localStorage.getItem("view_date");

    /**
     * 現在表示されているカレンダーの月をデフォルトで表示
     * リロードしても表示される月が変わらないようするための関数
     * @param date カレンダーに表示されている日付
     */
    const getViewDate = (date: any) => {
        let viewDefaultDate = null;
        if (date.getMonth() + 1 < 10) {
            viewDefaultDate =
                date.getFullYear() + "-0" + (date.getMonth() + 1) + "-01";
        } else {
            viewDefaultDate =
                date.getFullYear() + "-" + (date.getMonth() + 1) + "-01";
        }
        localStorage.setItem("view_date", viewDefaultDate);
    };

    return (
        <div className="bg-gray-100 shadow-2xl">
            <CalendarStyleWrapper>
                <FullCalendar
                    datesSet={(arg) => {
                        getViewDate(arg.view.currentStart);
                    }}
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
