import React, { useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import { NotificationsProvider } from "@mantine/notifications";
import { CustomNotification } from "../../Components/CustomNotification";
import BreakPoints from "../BreakPoints";
import CreatePC from "./PC/Create";
import CreateMobile from "./Mobile//Create";

const Create = (props: any) => {
    const { teams, favoriteTeamIds } = props;
    const { data, setData, post } = useForm<any>({
        selectedTeamIds: favoriteTeamIds,
    });

    const isIncludedIdInFavorites = (id: any) => {
        return data.selectedTeamIds.includes(id);
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
        <NotificationsProvider
            position={BreakPoints() ? "bottom-right" : "top-right"}
            autoClose={5000}
        >
            <Authenticated
                auth={props.auth}
                session={props.session}
                header={null}
            >
                <Head title="PULL ORIGIN"></Head>
                {BreakPoints() ? (
                    <CreatePC
                        teams={teams}
                        session={props.session}
                        data={data}
                        deleteTeamId={deleteTeamId}
                        isIncludedIdInFavorites={isIncludedIdInFavorites}
                        addTeamId={addTeamId}
                        post={post}
                    />
                ) : (
                    <CreateMobile
                        teams={teams}
                        session={props.session}
                        data={data}
                        deleteTeamId={deleteTeamId}
                        isIncludedIdInFavorites={isIncludedIdInFavorites}
                        addTeamId={addTeamId}
                        post={post}
                    />
                )}
            </Authenticated>
        </NotificationsProvider>
    );
};

export default Create;
