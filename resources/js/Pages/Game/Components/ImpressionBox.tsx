import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ImpressionBox = (props: {
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
        const data = postsByDate[matched_at].filter((e: any) => !(e.id == id));
        setTodayPosts(data);
    };

    return (
        <div>
            <h1>感想</h1>
            {todayPosts?.map((todayPost) => (
                <div key={todayPost.id} className="py-1 flex justify-between">
                    <div className="w-3/4">
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
                                className="bg-green-400 hover:bg-green-600 px-0.5 rounded duration-150"
                            >
                                &nbsp;show&nbsp;
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
                                className="bg-red-400 hover:bg-red-600 px-1 rounded duration-150"
                            >
                                delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImpressionBox;
