import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { PlayerTrackNext } from "tabler-icons-react";
import { Calendar } from "tabler-icons-react";

const Create = (props: any) => {
    const {
        teams,
        session,
        data,
        deleteTeamId,
        isIncludedIdInFavorites,
        addTeamId,
        post,
    } = props;

    const blankSpot = () => {
        const domList = [];
        for (let i = 1; i <= 5 - data.selectedTeamIds.length; i++) {
            domList.push(
                <div
                    className="flex gap-5 justify-center items-center w-2/3 bg-gray-500 opacity-60 mx-auto py-1"
                    key={i}
                >
                    <h1>&nbsp;</h1>
                </div>
            );
        }

        return domList;
    };

    return (
        <div className="flex flex-col gap-4 mt-5 px-10">
            <h1 className="border-b-2 text-4xl w-max">Favroite Team</h1>

            <div className="flex items-center justify-between">
                {session.calendar != 2 ? (
                    <Link
                        href={route("games.index")}
                        as="button"
                        className="flex items-center gap-1 border-b-2 border-red-900 active:scale-105"
                    >
                        <Calendar strokeWidth={1.5} />
                    </Link>
                ) : (
                    <Link
                        href={route("favorites.index")}
                        as="button"
                        className="flex items-center gap-1 border-b-2 border-red-900 active:scale-105"
                    >
                        <Calendar strokeWidth={1.5} />
                        <h2>Calendar</h2>
                    </Link>
                )}

                {data.selectedTeamIds.length != 0 ? (
                    <button
                        onClick={(e) => post(route("favorites.store"))}
                        disabled={data.selectedTeamIds.length == 0}
                        className="flex items-end border-b-2 border-gray-1000 active:scale-105"
                    >
                        <PlayerTrackNext strokeWidth={1.5} />
                    </button>
                ) : (
                    <div className="flex items-end border-b-2 border-gray-1000 text-gray-400 border-opacity-50">
                        <PlayerTrackNext strokeWidth={1.5} />
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 gap-8 pt-7 ">
                {data.selectedTeamIds.map((id: any) => (
                    <div key={id}>
                        <button
                            onClick={(e) => deleteTeamId(id)}
                            className="flex gap-3 justify-center items-center border-2 w-2/3 bg-gray-100 border-b-4 border-gray-300 mx-auto py-1 active:border-opacity-10 active:scale-95 duration-100"
                        >
                            <h2>{teams[id - 1].name}</h2>
                            <img
                                className="max-h-8 w-7"
                                src={teams[id - 1].logo}
                            />
                        </button>
                    </div>
                ))}
                {blankSpot()}
            </div>

            <div className="grid grid-cols-2 gap-5 my-5 overflow-auto h-[40vh] border-y-4 border-gray-300 py-5">
                {teams.map((team: any) => (
                    <div key={team.id}>
                        {isIncludedIdInFavorites(team.id) ? (
                            <button
                                onClick={(e) => deleteTeamId(team.id)}
                                className="flex gap-3 justify-center items-center border w-2/3 bg-gray-500 opacity-60 mx-auto py-1 scale-95 duration-100"
                            >
                                <h2>{team.name}</h2>
                                <img className="max-h-7 w-6" src={team.logo} />
                            </button>
                        ) : (
                            <button
                                onClick={(e) => addTeamId(team.id)}
                                className="flex gap-3 justify-center items-center border-2 w-2/3 bg-gray-100 border-b-4 border-gray-300 mx-auto py-1 active:border-opacity-10 active:scale-95 duration-100"
                                key={team.id}
                            >
                                <h2>{team.name}</h2>
                                <img className="max-h-8 w-7" src={team.logo} />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Create;
