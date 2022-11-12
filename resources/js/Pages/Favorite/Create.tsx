import React, { useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { Check } from "tabler-icons-react";
import { Calendar } from "tabler-icons-react";
import { NotificationsProvider } from "@mantine/notifications";
import { CustomNotification } from "../../Components/CustomNotification";

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
        if (data.selectedTeamIds.length < 4) {
            setData("selectedTeamIds", [...data.selectedTeamIds, id]);
            CustomNotification({
                title: "お気に入りチームが追加されました",
                body: "他に選択したいチームがない場合は「Save」を押してください",
                type: 1,
            });
        } else if (data.selectedTeamIds.length == 4) {
            setData("selectedTeamIds", [...data.selectedTeamIds, id]);
            CustomNotification({
                title: "お気に入り登録可能チームが上限に達しました",
                body: "選択したチームに間違いない場合は、「Save」を押してください",
                type: 1,
            });
        } else {
            CustomNotification({
                title: "お気に入りチームは5チームまでしか選択できません",
                body: "選択しているチームを外すか、「Save」を押して決定してください",
                type: 0,
            });
        }
    };

    const deleteTeamId = (id: any) => {
        CustomNotification({
            title: "お気に入りチームが解除されました",
            body: "お気に入りチーム画面を使用するには、1チーム以上お気に入り登録する必要があります",
            type: 0,
        });
        const modefindDate = data.selectedTeamIds.filter((e: any) => e != id);
        setData("selectedTeamIds", modefindDate);
    };

    useEffect(() => {
        if (data.selectedTeamIds.length != 0) {
            CustomNotification({
                title: "お気に入りチームが選択されています",
                body: "他に選択したいチームがない場合は「Save」を押してください",
                type: 1,
            });
        }
    }, []);

    return (
        <NotificationsProvider autoClose={5000}>
            <Authenticated
                auth={props.auth}
                session={props.session}
                header={null}
            >
                <Head title="PULL ORIGIN"></Head>
                <div className="flex flex-col gap-10 mt-10 px-10">
                    <div className="flex items-center justify-between">
                        {props.session.calendar != 2 ? (
                            <Link
                                href={route("games.index")}
                                as="button"
                                className="flex items-center border-b-2 border-red-900 pr-4 hover:scale-105 active:scale-100 duration-200"
                            >
                                <Calendar strokeWidth={1.5} />
                                <h2>Calendar</h2>
                            </Link>
                        ) : (
                            <Link
                                href={route("favorites.index")}
                                as="button"
                                className="flex items-center gap-1 border-b-2 border-red-900 pr-2 hover:scale-105 active:scale-100 duration-200"
                            >
                                <Calendar strokeWidth={1.5} />
                                <h2>Calendar</h2>
                            </Link>
                        )}

                        <h1 className="border-b-2 text-4xl w-max ">
                            Favroite Team
                        </h1>

                        {data.selectedTeamIds.length != 0 ? (
                            <button
                                onClick={(e) => post(route("favorites.store"))}
                                disabled={data.selectedTeamIds.length == 0}
                                className="flex items-end border-b-2 border-gray-1000 pl-4 hover:scale-105 active:scale-100 duration-200"
                            >
                                <h2>Save</h2>
                                <Check strokeWidth={1.5} />
                            </button>
                        ) : (
                            <div className="flex items-end border-b-2 border-gray-1000 text-gray-400 border-opacity-50 pl-4">
                                <h2>Save</h2>
                                <Check strokeWidth={1.5} />
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
        </NotificationsProvider>
    );
};

export default Create;
