import React, { useState, useEffect, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useRemember, InertiaLink } from "@inertiajs/inertia-react";
import { EventClickArg } from "@fullcalendar/react";
import BreakPoints from "../BreakPoints";
import IndexPC from "./PC/Index";
import IndexMobile from "./Mobile/Index";

const Index = (props: any) => {
    const { schedules, gamesByDate, postsByDate, teams } = props;
    const [todayGames, setTodayGames] = useRemember<Array<Game>>(
        [],
        "IndexTodayGames"
    );
    const [todayPosts, setTodayPosts] = useRemember<Array<Post>>(
        [],
        "IndexTodayPosts"
    );
    const [opened, setOpened] = useState(false);

    /**
     * カレンダーの日付クリック時に実行される関数
     * クリックした日付に試合があればtodayGamesに格納
     * クリックした日付に感想があればtodayPostsに格納
     */
    const handleDateClick = (arg: any) => {
        setOpened(true);

        if (arg.dateStr in gamesByDate) {
            setTodayGames(gamesByDate[arg.dateStr]);
            setTodayPosts(postsByDate[arg.dateStr]);
        } else {
            setTodayGames([]);
            setTodayPosts([]);
        }
    };

    /**
     * カレンダーイベントのクリック時に実行される関数
     * 日付をクリックしても実行されるため、条件分岐でイベントがクリックされた時にのみ実行されるように変更
     */
    const handleEventClick = (clickInfo: EventClickArg) => {
        if (clickInfo.event.title != "") {
            setTodayPosts(
                postsByDate[clickInfo.event.extendedProps.matched_at]
            );
            setTodayGames(
                gamesByDate[clickInfo.event.extendedProps.matched_at]
            );
        }
        if (clickInfo.event.extendedProps.post_id) {
            Inertia.get(
                route("posts.show", clickInfo.event.extendedProps.post_id)
            );
        }
    };

    /**
     * 初回レンダリングジに実行される関数。試合のidと日付をデフォルトで格納する。
     */
    useEffect(() => {
        localStorage.setItem("matched_at", schedules[0].date);
        localStorage.setItem("id", gamesByDate[schedules[0]["date"]][0].id);
    }, []);

    return (
        <Authenticated auth={props.auth} session={props.session} header={null}>
            <Head title="PULL ORIGIN"></Head>

            {BreakPoints() ? (
                <IndexPC
                    schedules={schedules}
                    handleEventClick={handleEventClick}
                    handleDateClick={handleDateClick}
                    todayGames={todayGames}
                    todayPosts={todayPosts}
                    postsByDate={postsByDate}
                    setTodayPosts={setTodayPosts}
                />
            ) : (
                <IndexMobile
                    schedules={schedules}
                    handleEventClick={handleEventClick}
                    handleDateClick={handleDateClick}
                    todayGames={todayGames}
                    todayPosts={todayPosts}
                    setTodayGames={setTodayGames}
                    setTodayPosts={setTodayPosts}
                    gamesByDate={gamesByDate}
                    postsByDate={postsByDate}
                    opened={opened}
                    setOpened={setOpened}
                />
            )}
        </Authenticated>
    );
};

export default Index;
