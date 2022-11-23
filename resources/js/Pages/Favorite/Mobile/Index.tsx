import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Calendar from "../../Game/Mobile/Components/Calendar";
import GamesBox from "../../Game/Mobile/Components/GamesBox";
import { Settings } from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
import { Modal } from "@mantine/core";
import ImpressionBox from "@/Pages/Game/Mobile/Components/ImpressionsBox";

const Index = (props: any) => {
    const {
        schedules,
        handleEventClick,
        handleDateClick,
        todayGames,
        todayPosts,
        postsByDate,
        setTodayPosts,
        opened,
        setOpened,
    } = props;

    return (
        <div>
            {/* <div className="flex flex-col w-4/12">
                <div className="flex">
                    <ActionIcon
                        onClick={() => Inertia.get(route("favorites.create"))}
                        className="flex justify-center text-black items-center w-1/12 h-12 ml-3 mb-5 bg-gray-100 rounded shadow-lg hover:bg-gray-200"
                    >
                        <Settings strokeWidth={1.5} />
                    </ActionIcon>
                </div>
            </div> */}
            <div className="w-full">
                <Calendar
                    schedules={schedules}
                    handleEventClick={handleEventClick}
                    handleDateClick={handleDateClick}
                />
            </div>

            <Modal opened={opened} onClose={() => setOpened(false)}>
                <ImpressionBox
                    setOpened={setOpened}
                    postsByDate={postsByDate}
                    todayPosts={todayPosts}
                    setTodayPosts={setTodayPosts}
                />
                <GamesBox todayGames={todayGames} todayPosts={todayPosts} />
            </Modal>
        </div>
    );
};

export default Index;
