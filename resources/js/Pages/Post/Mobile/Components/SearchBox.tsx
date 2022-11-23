import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { ActionIcon } from "@mantine/core";
import { Send } from "tabler-icons-react";

type Props = {
    data: { season: number; orderby: string };
    setData: any;
    seasons: Array<Season>;
};

const SearchBox = (props: Props) => {
    const { data, setData, seasons } = props;
    return (
        <div className="flex gap-6 mb-10 mt-5 items-center">
            <div>
                <select onChange={(e) => setData("season", e.target.value)}>
                    {seasons.map((season) => (
                        <option key={season.id} value={season.id}>
                            {season.season}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <select onChange={(e) => setData("orderby", e.target.value)}>
                    <option value={0}>POSTED DATE↑</option>
                    <option value={1}>POSTED DATE↓</option>
                    <option value={2}>MATCHED DATE↑</option>
                    <option value={3}>MATCHED DATE↓</option>
                </select>
            </div>

            <ActionIcon
                variant="outline"
                onClick={(e: any) =>
                    Inertia.get(route("posts.index"), data, {
                        preserveState: true,
                    })
                }
            >
                <Send size={60} strokeWidth={1.5} color={"black"} />
            </ActionIcon>
        </div>
    );
};

export default SearchBox;
