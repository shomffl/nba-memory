import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import "@fullcalendar/react/dist/vdom";
import FullCalendar, { EventContentArg, formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";

const Index = (props: any) => {
    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Memory
                </h2>
            }
        >
            <Head title="Memory"></Head>
            <div className="p-10 ">
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
                        start: "dayGridMonth,dayGridWeek,dayGridDay",
                        center: "title",
                        end: "myCustomButton today prev,next",
                    }}
                    customButtons={{
                        myCustomButton: {
                            text: "create",
                            click: function () {
                                Inertia.get(route("posts.create"));
                            },
                        },
                    }}
                />
            </div>
        </Authenticated>
    );
};

export default Index;
