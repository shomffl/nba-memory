import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { IconButton } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Create = (props: any) => {
    const { teams, favoriteTeamIds } = props;
    const { data, setData } = useForm<any>({
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
            <div className="flex flex-col gap-5 mt-10 px-10">
                <div className="flex items-center justify-between">
                    <h1 className="border-b-2 w-max border-gray-1000">
                        Favroite Team
                    </h1>

                    <button className="flex items-end bg-gray-1000 text-white px-10 py-2 border-b-4 border-[#506266] rounded-sm active:scale-95 active:border-opacity-10 duration-100">
                        <h2>Save</h2>
                        <DoubleArrowIcon />
                    </button>
                </div>

                <div className="grid grid-cols-5 gap-8 border-2 border-gray-300 py-7 rounded-2xl drop-shadow">
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

                <div className="grid grid-cols-5 gap-8 my-5">
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
