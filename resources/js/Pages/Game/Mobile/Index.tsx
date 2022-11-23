import React, { useState } from "react";
import Calendar from "../Mobile/Components/Calendar";
import ImpressionBox from "../Mobile/Components/ImpressionsBox";
import GamesBox from "../Mobile/Components/GamesBox";
import { Modal, Button, Group } from "@mantine/core";

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
        <div className="">
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
