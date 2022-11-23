import React, { useState } from "react";
import Authenticated from "../../Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import BreakPoints from "../BreakPoints";
import CreatePC from "./PC/Create";
import CreateMobile from "./Mobile/Create";

const Create = (props: any) => {
    const { session, games, gamesDate, errors }: any = props;
    const [link, setLink] = useState<Link>({
        id: 0,
        title: "",
        url: "",
    });

    const { data, setData, post } = useForm<SendPost>("PostCreate", {
        game_id: localStorage.getItem("id"),
        title: "",
        detail: "",
        links: [],
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // 追加されていないリンクがある場合は、confirmで確認をする
        if (link.title && link.url != "") {
            const selected = confirm(
                "追加されていないリンクがあります\nこのまま送信する場合はOKを押してください。"
            );
            if (selected) {
                post(route("posts.store"));
            }
        } else {
            post(route("posts.store"));
        }
    };

    return (
        <Authenticated auth={props.auth} session={props.session} header={null}>
            <Head title="PULL ORIGIN" />
            {BreakPoints() ? (
                <CreatePC
                    session={session}
                    games={games}
                    gamesDate={gamesDate}
                    data={data}
                    setData={setData}
                    link={link}
                    setLink={setLink}
                    handleSubmit={handleSubmit}
                    errors={errors}
                />
            ) : (
                <CreateMobile
                    session={session}
                    games={games}
                    gamesDate={gamesDate}
                    data={data}
                    setData={setData}
                    link={link}
                    setLink={setLink}
                    handleSubmit={handleSubmit}
                    errors={errors}
                />
            )}
        </Authenticated>
    );
};

export default Create;
