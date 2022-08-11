import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GamesBox = (props: {
    todayGames: Array<Game>;
    transitionCreatePage: (id: any, matched_at: string) => void;
}) => {
    const { todayGames, transitionCreatePage } = props;
    return (
        <div>
            <h1>試合</h1>
            {todayGames.map((todayGame) => (
                <div
                    key={todayGame.id}
                    className="flex justify-between my-2 items-center"
                >
                    <div className="w-3/4 bg-white text-center p-1 rounded font-bold">
                        <h2>
                            {todayGame.home_team.name} (
                            {todayGame.home_team_point}) vs{" "}
                            {todayGame.away_team.name} (
                            {todayGame.away_team_point})
                        </h2>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                transitionCreatePage(
                                    todayGame.id,
                                    todayGame.matched_at
                                )
                            }
                            className="px-3 py-1 mx-2 bg-blue-300 rounded hover:bg-blue-400 uppercase"
                        >
                            add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GamesBox;
