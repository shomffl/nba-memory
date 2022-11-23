import React, { useState } from "react";
import { Head, useForm, Link } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import BreakPoints from "../BreakPoints";
import EditPC from "./PC/Edit";
import EditMobile from "./Mobile/Edit";

type Props = {
    auth: User;
    errors: any;
    session: Session;
    post: Post;
};

const Edit = (props: Props) => {
    const { post, errors } = props;

    const { data, setData, put } = useForm<SendPost>("EditCreate", {
        game_id: post.game_id,
        title: post.title,
        detail: post.detail,
        links: post.links,
    });

    const [link, setLink] = useState<Link>({
        id: 0,
        title: "",
        url: "",
    });

    const handleEditPost = (e: any) => {
        e.preventDefault();
        put(route("posts.update", post.id), { preserveScroll: true });
    };

    return (
        <Authenticated auth={props.auth} session={props.session} header={null}>
            <Head title="PULL ORIGIN" />
            {BreakPoints() ? (
                <EditPC
                    post={post}
                    data={data}
                    setData={setData}
                    link={link}
                    setLink={setLink}
                    handleEditPost={handleEditPost}
                    errors={errors}
                />
            ) : (
                <EditMobile
                    post={post}
                    data={data}
                    setData={setData}
                    link={link}
                    setLink={setLink}
                    handleEditPost={handleEditPost}
                    errors={errors}
                />
            )}
        </Authenticated>
    );
};

export default Edit;
