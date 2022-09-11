import React from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    setDataByObject,
    setDataByMethod,
    setDataByKeyValuePair,
} from "@inertiajs/inertia-react";

const SearchBox = (props: {
    data: any;
    setData: setDataByObject<any> &
        setDataByMethod<any> &
        setDataByKeyValuePair<any>;
    seasons: Array<Season>;
}) => {
    const { data, setData, seasons } = props;
    return (
        <div>
            <div>
                <label>SEASON</label>
                <select onChange={(e) => setData("season", e.target.value)}>
                    {seasons.map((season) => (
                        <option key={season.id} value={season.id}>
                            {season.season}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>ORDER BY</label>
                <select onChange={(e) => setData("orderby", e.target.value)}>
                    <option value={0}>POSTED DATE↑</option>
                    <option value={1}>POSTED DATE↓</option>
                    <option value={2}>MATCHED DATE↑</option>
                    <option value={3}>MATCHED DATE↓</option>
                </select>
            </div>

            <button
                className="bg-blue-1000 text-white px-3 py-1 rounded-lg"
                onClick={(e) =>
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
