import React from "react";
import Calendar from "./Components/Calendar";
import ImpressionBox from "./Components/ImpressionsBox";
import GamesBox from "./Components/GamesBox";

const Index = (props: any) => {
    const {
        schedules,
        handleEventClick,
        handleDateClick,
        todayGames,
        todayPosts,
        postsByDate,
        setTodayPosts,
    } = props;

    return (
        <div className="flex px-10 py-5">
            <div className="w-8/12">
                <Calendar
                    schedules={schedules}
                    handleEventClick={handleEventClick}
                    handleDateClick={handleDateClick}
                />
            </div>
            <div className="flex flex-col w-4/12">
                <div className="flex">
                    <div className="flex justify-center items-center w-full font-bold h-12 ml-5 mb-5 bg-gray-100 rounded shadow-lg">
                        <h1>{todayGames[0]?.matched_at || "no match"}</h1>
                    </div>
                </div>

                <div className="overflow-auto h-[40vh] ml-5 mb-10 bg-gray-100 rounded shadow-lg">
                    <div className="m-3">
                        <GamesBox
                            todayGames={todayGames}
                            todayPosts={todayPosts}
                        />
                    </div>
                </div>
                <div className="overflow-auto ml-5 h-[30vh] bg-gray-100 rounded shadow-lg">
                    <div className="m-3">
                        <ImpressionBox
                            postsByDate={postsByDate}
                            todayPosts={todayPosts}
                            setTodayPosts={setTodayPosts}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
