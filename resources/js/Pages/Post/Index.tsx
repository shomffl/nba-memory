import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, useForm } from "@inertiajs/inertia-react";
import IndexPC from "./PC/Index";
import IndexMobile from "./Mobile/Index";
import BreakPoints from "../BreakPoints";

type Props = {
    auth: User;
    session: Session;
    postsSortByPosted: Array<PostsSortByPosted>;
    postsSortByMatched: Array<PostSortByMatched>;
    seasons: Array<Season>;
    viewOption: number;
};

const Index = (props: Props) => {
    const { postsSortByPosted, postsSortByMatched, seasons, viewOption } =
        props;

    const { data, setData } = useForm<{ season: number; orderby: string }>({
        season: seasons[0].id,
        orderby: "",
    });

    return (
        <Authenticated auth={props.auth} session={props.session} header={null}>
            <Head title="PULL ORIGIN" />
            {BreakPoints() ? (
                <IndexPC
                    postsSortByPosted={postsSortByPosted}
                    postsSortByMatched={postsSortByMatched}
                    seasons={seasons}
                    viewOption={viewOption}
                    data={data}
                    setData={setData}
                />
            ) : (
                <IndexMobile
                    postsSortByPosted={postsSortByPosted}
                    postsSortByMatched={postsSortByMatched}
                    seasons={seasons}
                    viewOption={viewOption}
                    data={data}
                    setData={setData}
                />
            )}
        </Authenticated>
    );
};

export default Index;
