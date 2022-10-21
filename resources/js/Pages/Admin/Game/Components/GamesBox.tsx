import React from "react";

const GamesBox = (props: {
    todayGames: Array<Game>;
    changeMode: boolean;
    setChangeMode: React.Dispatch<React.SetStateAction<boolean>>;
    setEditGameData: React.Dispatch<any>;
}) => {
    const { todayGames, changeMode, setChangeMode, setEditGameData } = props;
    return (
        <div>
            {todayGames?.map((todayGame) => (
                <div
                    key={todayGame.id}
                    className="flex items-center justify-between"
                >
                    <div className="flex justify-between items-center rounded font-bold shadow w-3/4 my-3 px-2 py-3 bg-white">
                        <img
                            className="max-h-10 w-8"
                            src={todayGame.home_team.logo}
                        />
                        <div>
                            {todayGame.home_team.name}
                            &nbsp;(
                            {todayGame.home_team_point})
                        </div>
                        &nbsp;vs&nbsp;
                        <div>
                            {todayGame.away_team.name}
                            &nbsp;(
                            {todayGame.away_team_point})
                        </div>
                        <img
                            className="max-h-10 w-8"
                            src={todayGame.away_team.logo}
                        />
                    </div>
                    <div>
                        <button
                            onClick={(e) => {
                                setChangeMode(!changeMode);
                                setEditGameData(todayGame);
                            }}
                            className="px-5 py-2 bg-gray-1000 text-white shadow hover:text-white hover:bg-blue-1000 hover:shadow-2xl hover:scale-105 rounded duration-200"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GamesBox;
