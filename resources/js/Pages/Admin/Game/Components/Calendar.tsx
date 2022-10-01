import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarStyleWrapper } from "../../../../Components/CalendarStyleWrapper";

const Calendar = (props: {
    schedules: Array<Schedule>;
    handleDateClick: (arg: any) => void;
}) => {
    const { schedules, handleDateClick } = props;
    return (
        <div className="w-3/5 bg-gray-100 shadow-2xl mr-5">
            <CalendarStyleWrapper>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locale="us"
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
    );
};

export default Calendar;
