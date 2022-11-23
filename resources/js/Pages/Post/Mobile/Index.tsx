import React from "react";
import PostsSortByPosted from "./Components/PostsSortByPosted";
import PostsSortByMatched from "./Components/PostsSortByMatched";
import SearchBox from "./Components/SearchBox";

type Props = {
    postsSortByPosted: Array<PostsSortByPosted>;
    postsSortByMatched: Array<PostSortByMatched>;
    seasons: Array<Season>;
    viewOption: number;
    data: { season: number; orderby: string };
    setData: any;
};

const Index = (props: Props) => {
    const {
        postsSortByPosted,
        postsSortByMatched,
        seasons,
        viewOption,
        data,
        setData,
    } = props;

    return (
        <div className="px-5 pb-10">
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
