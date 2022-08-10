import React, { useState, useEffect, useCallback } from "react";
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import { EventClickArg } from "@fullcalendar/react";
import Calendar from "./Components/Calendar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Team = {
    id: number;
    name: string;
};

type Game = {
    id: number;
    home_team_id: number;
    away_team_id: number;
    home_team: Team;
    away_team: Team;
    matched_at: string;
    series_id: number;
};

type Post = {
    id: number;
    title: string;
    detail: string;
    game: Game;
};

type RegisterdPost = {};

const Index = (props: any) => {
    const { schedules, gamesByDate, postsByDate } = props;
    const [todayGames, setTodayGames] = useState<Array<Game>>([]);
    const [todayPosts, setTodayPosts] = useState<Array<Post>>([]);

    // const [selectedGame, setSelectedGame] = useState<any>({
    //     postInfo: "",
    //     match: "",
    // });

    /**
     * カレンダーの日付クリック時に実行される関数
     * クリックした日付に試合があればtodayGamesに格納
     * クリックした日付に感想があればtodayPostsに格納
     */
    const handleDateClick = useCallback((arg: any) => {
        console.log("handleDateClick", arg.dateStr);
        if (arg.dateStr in gamesByDate) {
            setTodayGames(gamesByDate[arg.dateStr]);
            setTodayPosts(postsByDate[arg.dateStr]);
        } else {
            setTodayGames([]);
            setTodayPosts([]);
        }
    }, []);

    /**
     * カレンダーイベントのクリック時に実行される関数
     * 日付をクリックしても実行されるため、条件分岐でイベントがクリックされた時にのみ実行されるように変更
     */
    const handleEventClick = useCallback((clickInfo: EventClickArg) => {
        if (clickInfo.event.title != "") {
            setTodayPosts(
                postsByDate[clickInfo.event.extendedProps.matched_at]
            );
            setTodayGames(
                gamesByDate[clickInfo.event.extendedProps.matched_at]
            );
        }
    }, []);

    /**
     * 初回レンダリングジに実行される関数。試合のidと日付をデフォルトで格納する。
     */
    useEffect(() => {
        localStorage.setItem("matched_at", schedules[0].date);
        localStorage.setItem("id", gamesByDate[schedules[0]["date"]][0].id);
    }, []);
    console.log("todayGames", todayGames);
    console.log("todayPosts", todayPosts);
    /**
     * Create.tsxへ遷移するための関数
     *
     * @param id 試合ID
     * @param matched_at 試合日時
     */
    const transitionCreatePage = (id: any, matched_at: any) => {
        localStorage.setItem("id", id);
        localStorage.setItem("matched_at", matched_at);

        Inertia.get("/posts/create");
    };

    return (
        <Authenticated auth={props.auth} header={null}>
            <Head title="Memory"></Head>
            <div className="flex px-10 py-5">
                <div className="w-9/12">
                    <Calendar
                        schedules={schedules}
                        handleEventClick={handleEventClick}
                        handleDateClick={handleDateClick}
                    />
                </div>
                <div className="flex flex-col w-3/12">
                    <div className="overflow-auto h-12 ml-5 mb-5 bg-gray-200 rounded shadow-xl">
                        <h1>{todayGames[0]?.matched_at || "not game"}</h1>
                    </div>

                    <div className="overflow-auto h-96 ml-5 mb-5 bg-gray-200 rounded shadow-xl">
                        <div className="m-3">
                            <h1>試合</h1>
                            {todayGames.map((todayGame) => (
                                <div key={todayGame.id}>
                                    {todayGame.home_team.name} vs{" "}
                                    {todayGame.away_team.name}
                                    <button
                                        onClick={() =>
                                            transitionCreatePage(
                                                todayGame.id,
                                                todayGame.matched_at
                                            )
                                        }
                                        className="px-3 mx-2 bg-blue-300 rounded hover:bg-blue-400"
                                    >
                                        add
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="overflow-auto h-56 ml-5 bg-gray-200 rounded shadow-xl">
                        <div className="m-3">
                            <h1>感想</h1>
                            {todayPosts?.map((todayPost) => (
                                <div key={todayPost.id} className="py-1 flex">
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                        >
                                            <Typography>
                                                {todayPost.title} <br />
                                                {
                                                    todayPost.game.home_team
                                                        .name
                                                }{" "}
                                                vs{" "}
                                                {todayPost.game.away_team.name}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {todayPost.detail}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <div className="flex flex-col justify-start py-1 pl-1">
                                        <div className="pb-3">
                                            <button className="bg-green-400 hover:bg-green-600 px-2 rounded duration-150">
                                                &nbsp;edit&nbsp;
                                            </button>
                                        </div>
                                        <div>
                                            <button className="bg-red-400 hover:bg-red-600 px-1 rounded duration-150">
                                                delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
