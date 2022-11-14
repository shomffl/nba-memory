import {
    setDataByMethod,
    setDataByObject,
    setDataByKeyValuePair,
} from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";

type GamesDate = {
    matched_at: string;
};

type Props = {
    games: Game[];
    gamesDate: GamesDate[];
    setData: setDataByObject<SendPost> &
        setDataByMethod<SendPost> &
        setDataByKeyValuePair<SendPost>;
};

const GameSelect = (props: Props) => {
    const { games, gamesDate, setData } = props;
    const [changeDate, setChangeDate] = useState<any>(
        localStorage.getItem("matched_at")
    );
    const [gameId, setGameId] = useState<any>(localStorage.getItem("id"));

    let gameList: any[] = [];

    for (let i = 0; i < games.length; i++) {
        if (games[i].matched_at == localStorage.getItem("matched_at")) {
            gameList.push(
                <option key={games[i].id} value={games[i].id}>
                    {games[i].home_team.name}&nbsp;({games[i].home_team_point})
                    vs&nbsp;
                    {games[i].away_team.name}&nbsp;({games[i].away_team_point})
                </option>
            );
        }
    }

    return (
        <div className="flex flex-col gap-1">
            <select
                className="w-max text-md rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000"
                value={changeDate}
                onChange={(e) => {
                    localStorage.setItem("matched_at", e.target.value);
                    setChangeDate(e.target.value);
                }}
            >
                {gamesDate.map((gamesDate: { matched_at: string }) => (
                    <option key={gamesDate.matched_at}>
                        {gamesDate.matched_at}
                    </option>
                ))}
            </select>
            <select
                className="w-max text-md rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000"
                value={gameId}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    localStorage.setItem("id", e.target.value);
                    setGameId(e.target.value);
                    setData("game_id", e.target.value);
                }}
            >
                <option>Unselected</option>
                {gameList}
            </select>
        </div>
    );
};

export default GameSelect;
