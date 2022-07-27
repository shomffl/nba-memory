import React from "react";

const GameSelect = (props: any) => {
    const { games, setData } = props;
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
    return (
        <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setData("game_id", e.target.value)
            }
        >
            <option>Unselected</option>
            {gameList}
        </select>
    );
};

export default GameSelect;
