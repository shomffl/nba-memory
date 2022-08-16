import React from "react";

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
                    <div className="w-4/5 bg-white hover:bg-white hover:shadow hover:scale-105 text-center p-1 rounded font-bold border border-gray-200">
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
                            className="px-3 py-1 mx-2 bg-gray-1000 text-white hover:text-white hover:bg-blue-1000 hover:shadow-2xl hover:scale-105 rounded duration-200"
                        >
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GamesBox;
