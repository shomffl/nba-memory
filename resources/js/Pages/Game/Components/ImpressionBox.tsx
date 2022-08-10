import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ImpressionBox = (props: { todayPosts: Array<Post> }) => {
    const { todayPosts } = props;

    return (
        <div>
            <h1>感想</h1>
            {todayPosts?.map((todayPost) => (
                <div key={todayPost.id} className="py-1 flex">
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
                    <div className="flex flex-col justify-start py-1 pl-1">
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
                            <button className="bg-red-400 hover:bg-red-600 px-1 rounded duration-150">
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
