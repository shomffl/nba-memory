import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ImpressionBox = (props: { todayPosts: Array<Post> }) => {
    const { todayPosts } = props;

    const handleDeletePost = (id: any) => {
        Inertia.delete(`/posts/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
            onSuccess: () => console.log("success!!!"),
        });
    };

    return (
        <div>
            <h1>感想</h1>
            {todayPosts?.map((todayPost) => (
                <div key={todayPost.id} className="py-1 flex justify-between">
                    <div className="w-2/3">
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
                                onClick={(e) => handleDeletePost(todayPost.id)}
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
