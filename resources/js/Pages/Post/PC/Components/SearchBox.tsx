import React from "react";
import { Inertia } from "@inertiajs/inertia";

type Props = {
    data: { season: number; orderby: string };
    setData: any;
    seasons: Array<Season>;
};

const SearchBox = (props: Props) => {
    const { data, setData, seasons } = props;
    return (
        <div className="flex gap-6 mb-10">
            <div>
                <label className="pr-3">SEASON</label>
                <select onChange={(e) => setData("season", e.target.value)}>
                    {seasons.map((season) => (
                        <option key={season.id} value={season.id}>
                            {season.season}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="pr-3">ORDER BY</label>
                <select onChange={(e) => setData("orderby", e.target.value)}>
                    <option value={0}>POSTED DATE↑</option>
                    <option value={1}>POSTED DATE↓</option>
                    <option value={2}>MATCHED DATE↑</option>
                    <option value={3}>MATCHED DATE↓</option>
                </select>
            </div>

            <button
                className="border border-gray-500 ml-10 px-5 py-1 shadow hover:shadow-md bg-gradient-to-r hover:from-white hover:to-gray-100 duration-200 active:scale-95"
                onClick={() =>
                    Inertia.get(route("posts.index"), data, {
                        preserveState: true,
                    })
                }
            >
                send
            </button>
        </div>
    );
};

export default SearchBox;
