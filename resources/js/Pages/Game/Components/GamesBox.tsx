import React, { memo } from "react";

const GamesBox = memo(
    (props: {
        todayGames: Array<Game>;
        todayPosts: Array<Post>;
        transitionCreatePage: (id: any, matched_at: string) => void;
    }) => {
        const { todayGames, todayPosts, transitionCreatePage } = props;

        /**
         * 感想が書かれているかどうかでopacityを変える関数
         * @param id 試合ID
         * @returns opacityのスタイル
         */
        const changeOpacity = (id: any) => {
            if (todayPosts?.find((e) => e.game_id === id)) {
                return { opacity: 0.3 };
            }
        };

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
                            <div
                                style={changeOpacity(todayGame.id)}
                                className="flex justify-between items-center p-2 bg-white hover:bg-white hover:shadow hover:scale-105 active:bg-blue-50 text-center duration-150 rounded font-bold border border-gray-200"
                            >
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
                                style={changeOpacity(todayGame.id)}
                                className="px-3 py-1 mx-2 bg-gray-1000 text-white hover:text-white hover:bg-blue-1000 hover:shadow-2xl hover:scale-105 active:ring active:ring-gray-400 rounded duration-200"
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
);

export default GamesBox;
