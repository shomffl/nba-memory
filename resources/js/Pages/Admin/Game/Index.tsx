import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AdminAuthenticated";
import { Head } from "@inertiajs/inertia-react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventContentArg, formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import { CalendarStyleWrapper } from "../../../Components/CalendarStyleWrapper";

const Index = (props: any) => {
    const { schedules } = props;
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
                    />
                </CalendarStyleWrapper>
            </div>
        </Authenticated>
    );
};

export default Index;
