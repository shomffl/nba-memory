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
                <div key={todayGame.id}>
                    {todayGame.home_team.name} vs {todayGame.away_team.name}
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
    );
};

export default GamesBox;
