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
                    <button
                        className="w-4/5"
                        onClick={() =>
                            transitionCreatePage(
                                todayGame.id,
                                todayGame.matched_at
                            )
                        }
                    >
                        <div className="flex justify-between items-center p-2 bg-white hover:bg-white hover:shadow hover:scale-105 text-center  rounded font-bold border border-gray-200">
                            <img
                                className="w-1/12"
                                src={todayGame.home_team.logo}
                            />
                            <h2>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        &nbsp;
                                        {todayGame.home_team.name} (
                                        {todayGame.home_team_point})
                                    </div>
                                    &nbsp;vs&nbsp;
                                    <div className="flex items-center">
                                        {todayGame.away_team.name} (
                                        {todayGame.away_team_point})&nbsp;
                                    </div>
                                </div>
                            </h2>
                            <img
                                className="w-1/12"
                                src={todayGame.away_team.logo}
                            />
                        </div>
                    </button>

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
