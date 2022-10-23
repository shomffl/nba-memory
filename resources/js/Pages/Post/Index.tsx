import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { useForm, Link } from "@inertiajs/inertia-react";
import PostsSortByPosted from "./Components/PostsSortByPosted";
import PostsSortByMatched from "./Components/PostsSortByMatched";
import SearchBox from "./Components/SearchBox";

const Index = (props: {
    auth: any;
    postsSortByPosted: Array<Post>;
    postsSortByMatched: Array<PostSortByMatched>;
    seasons: Array<Season>;
    viewOption: number;
}) => {
    const { postsSortByPosted, postsSortByMatched, seasons, viewOption } =
        props;
    const { data, setData } = useForm<any>({
        season: seasons[0].id,
        orderby: "",
    });

    return (
        <Authenticated auth={props.auth} header={null}>
            <div className="px-28 py-20">
                <div>
                    <SearchBox
                        data={data}
                        setData={setData}
                        seasons={seasons}
                    />
                    {viewOption == 0 ? (
                        <PostsSortByPosted
                            postsSortByPosted={postsSortByPosted}
                        />
                    ) : (
                        <PostsSortByMatched
                            postsSortByMatched={postsSortByMatched}
                        />
                    )}
                </div>
            </div>
        </Authenticated>
    );
};

export default Index;
