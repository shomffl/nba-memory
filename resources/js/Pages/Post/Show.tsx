import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import BreakPoints from "../BreakPoints";
import ShowPC from "./PC/Show";
import ShowMobile from "./Mobile/Show";

type Props = { auth: User; session: Session; post: Post };

const Show = (props: Props) => {
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
