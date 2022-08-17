import React, { useState, useEffect, memo } from "react";
import { Inertia } from "@inertiajs/inertia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ImpressionBoxs = memo(
    (props: {
        postsByDate: any;
        todayPosts: Array<Post>;
        setTodayPosts: any;
    }) => {
        const { postsByDate, todayPosts, setTodayPosts } = props;

        const handleDeletePost = (id: number, mathced_at: string) => {
            Inertia.delete(`/posts/${id}`, {
                onBefore: () => confirm("本当に削除しますか？"),
                onSuccess: () => removeData(id, mathced_at),
            });
        };

        /**
         * 感想を削除後にstateの値を更新
         * propsが変更されるタイミングが間に合わないため
         * @param id 感想ID
         * @param matched_at 試合日時
         */
        const removeData = (id: number, matched_at: string) => {
            const data = postsByDate[matched_at].filter(
                (e: any) => !(e.id == id)
            );
            setTodayPosts(data);
        };

        return (
            <div>
                <h1>感想</h1>
                {todayPosts?.map((todayPost) => (
                    <div
                        key={todayPost.id}
                        className="py-1 flex justify-between"
                    >
                        <div className="w-4/5">
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography>
                                        {todayPost.title} <br />
                                        {todayPost.game.home_team.name} vs{" "}
                                        {todayPost.game.away_team.name}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{todayPost.detail}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className="flex flex-col justify-start py-1 px-1">
                            <div className="pb-3">
                                <button
                                    onClick={(e) =>
                                        Inertia.get(`/posts/${todayPost.id}`)
                                    }
                                    className="bg-gray-1000 text-white hover:bg-blue-1000 hover:text-white  hover:shadow-2xl px-0.5 py-0.5 rounded duration-150"
                                >
                                    &nbsp;SHOW&nbsp;
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={(e) =>
                                        handleDeletePost(
                                            todayPost.id,
                                            todayPost.game.matched_at
                                        )
                                    }
                                    className="bg-gray-1000 text-white hover:bg-red-900 hover:text-white hover:shadow-2xl px-1 py-0.5 rounded duration-150"
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
);

export default ImpressionBoxs;
