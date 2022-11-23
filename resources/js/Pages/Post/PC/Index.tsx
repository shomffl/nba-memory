import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { useForm } from "@inertiajs/inertia-react";
import PostsSortByPosted from "./Components/PostsSortByPosted";
import PostsSortByMatched from "./Components/PostsSortByMatched";
import SearchBox from "./Components/SearchBox";

const Index = (props: {
    postsSortByPosted: Array<Post>;
    postsSortByMatched: Array<PostSortByMatched>;
    seasons: Array<Season>;
    viewOption: number;
    data: any;
    setData: any;
}) => {
    const {
        postsSortByPosted,
        postsSortByMatched,
        seasons,
        viewOption,
        data,
        setData,
    } = props;

    return (
        <div className="px-28 py-20">
            <div>
                <SearchBox data={data} setData={setData} seasons={seasons} />
                {viewOption == 0 ? (
                    <PostsSortByPosted postsSortByPosted={postsSortByPosted} />
                ) : (
                    <PostsSortByMatched
                        postsSortByMatched={postsSortByMatched}
                    />
                )}
            </div>
        </div>
    );
};

export default Index;
