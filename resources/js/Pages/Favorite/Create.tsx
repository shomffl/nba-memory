import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Create = (props: any) => {
    const { teams, favoriteTeamIds } = props;
    const { data, setData, post } = useForm<any>({
        selectedTeamIds: favoriteTeamIds,
    });

    const isIncludedIdInFavorites = (id: any) => {
        return data.selectedTeamIds.includes(id);
    };
    console.log(props);

    const blankSpot = () => {
        const domList = [];
        for (let i = 1; i <= 5 - data.selectedTeamIds.length; i++) {
            domList.push(
                <div
                    className="flex gap-5 justify-center items-center w-2/3 bg-gray-500 opacity-60 mx-auto py-2"
                    key={i}
                >
                    <h1>&nbsp;</h1>
                </div>
            );
        }

        return domList;
    };

    const addTeamId = (id: any) => {
        console.log();
        if (data.selectedTeamIds.length < 5) {
            setData("selectedTeamIds", [...data.selectedTeamIds, id]);
        } else {
            alert("お気に入りチームは5チームまでしか設定できません");
        }
    };

    const deleteTeamId = (id: any) => {
        const modefindDate = data.selectedTeamIds.filter((e: any) => e != id);
        console.log(modefindDate);
        setData("selectedTeamIds", modefindDate);
    };

    return (
        <Authenticated auth={props.auth} header={null}>
            <Head title="PULL ORIGIN"></Head>
            <div className="flex flex-col gap-10 mt-10 px-10">
                <div className="flex items-center justify-between">
                    <button className="flex items-end border-b-2 border-red-900 pr-4 hover:scale-105 active:scale-100 duration-200">
                        <KeyboardDoubleArrowLeftIcon />
                        <h2>Back</h2>
                    </button>
                    <h1 className="border-b-2 text-4xl w-max ">
                        Favroite Team
                    </h1>

                    {data.selectedTeamIds.length != 0 ? (
                        <button
                            onClick={(e) => post(route("favorites.store"))}
                            disabled={data.selectedTeamIds.length == 0}
                            className="flex items-end border-b-2 border-gray-1000 pl-4 hover:scale-105 active:scale-100 duration-200 animate-bounce hover:animate-none"
                        >
                            <h2>Save</h2>
                            <KeyboardDoubleArrowRightIcon />
                        </button>
                    ) : (
                        <div className="flex items-end border-b-2 border-gray-1000 text-gray-400 border-opacity-50 pl-4">
                            <h2>Save</h2>
                            <KeyboardDoubleArrowRightIcon />
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-5 gap-8 border-2 border-gray-300 py-7 rounded-2xl drop-shadow ">
                    {data.selectedTeamIds.map((id: any) => (
                        <div key={id}>
                            <button
                                onClick={(e) => deleteTeamId(id)}
                                className="flex gap-5 justify-center items-center border-2 w-2/3 bg-gray-100 border-b-4 border-gray-300 mx-auto py-1 active:border-opacity-10 active:scale-95 duration-100"
                            >
                                <h1>{teams[id - 1].name}</h1>
                                <img
                                    className="max-h-8 w-7"
                                    src={teams[id - 1].logo}
                                />
                            </button>
                        </div>
                    ))}
                    {blankSpot()}
                </div>

                <div className="grid grid-cols-5 gap-5 my-5">
                    {teams.map((team: any) => (
                        <div key={team.id}>
                            {isIncludedIdInFavorites(team.id) ? (
                                <button
                                    onClick={(e) => deleteTeamId(team.id)}
                                    className="flex gap-5 justify-center items-center border w-2/3 bg-gray-500 opacity-60 mx-auto py-1 scale-95 duration-100"
                                >
                                    <h1>{team.name}</h1>
                                    <img
                                        className="max-h-7 w-6"
                                        src={team.logo}
                                    />
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => addTeamId(team.id)}
                                    className="flex gap-5 justify-center items-center border-2 w-2/3 bg-gray-100 border-b-4 border-gray-300 mx-auto py-1 active:border-opacity-10 active:scale-95 duration-100"
                                    key={team.id}
                                >
                                    <h1>{team.name}</h1>
                                    <img
                                        className="max-h-8 w-7"
                                        src={team.logo}
                                    />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
