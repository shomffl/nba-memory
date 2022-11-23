import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import BackButton from "@/Components/Buttons/BackButton";
import { Inertia } from "@inertiajs/inertia";
import BreakPoints from "../BreakPoints";
import ShowPC from "./PC/Show";
import ShowMobile from "./Mobile/Show";

const Show = (props: {
    auth: any;
    session: any;
    post: Post;
    previousPage: number;
}) => {
    const { post, session } = props;

    // sessionの値によって戻るボタンの遷移先を変更
    const BackButtonLink = () => {
        switch (session.show) {
            case 1:
                return route("posts.index");
            case 2:
                return route("games.index");
            case 3:
                return route("favorites.index");
        }
    };

    return (
        <Authenticated auth={props.auth} session={props.session} header={null}>
            <Head title="PULL ORIGIN" />
            {BreakPoints() ? (
                <ShowPC post={post} BackButtonLink={BackButtonLink} />
            ) : (
                <ShowMobile post={post} BackButtonLink={BackButtonLink} />
            )}
        </Authenticated>
    );
};

export default Show;
