import React from "react";
import { Link } from "@inertiajs/inertia-react";

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
                    <div className="w-3/4 bg-white hover:bg-gray-100 hover:scale-105 text-center p-1 rounded font-bold">
                        <h2>
                            <button
                                onClick={() =>
                                    transitionCreatePage(
                                        todayGame.id,
                                        todayGame.matched_at
                                    )
                                }
                            >
                                {todayGame.home_team.name} (
                                {todayGame.home_team_point}) vs{" "}
                                {todayGame.away_team.name} (
                                {todayGame.away_team_point})
                            </button>
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
