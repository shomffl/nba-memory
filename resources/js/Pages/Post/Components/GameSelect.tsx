import {
    setDataByMethod,
    setDataByObject,
    setDataByKeyValuePair,
} from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import { Post } from "../Create";

type Game = {
    id: number;
    matched_at: string;
    home_team: {
        name: string;
    };
    away_team: {
        name: string;
    };
};

type GamesDate = {
    matched_at: string;
};

type Props = {
    games: Game[];
    gamesDate: GamesDate[];
    setData: setDataByObject<Post> &
        setDataByMethod<Post> &
        setDataByKeyValuePair<Post>;
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
                    {games[i].home_team.name}&nbsp; vs&nbsp;
                    {games[i].away_team.name}
                </option>
            );
        }
    }

    console.log("changeDate", changeDate);
    console.log("gameId", gameId);
    return (
        <>
            <select
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
                value={gameId}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setData("game_id", e.target.value)
                }
            >
                <option>Unselected</option>
                {gameList}
            </select>
        </>
    );
};

export default GameSelect;
