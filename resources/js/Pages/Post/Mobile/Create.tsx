import React from "react";
import GameSelect from "./Components/GameSelect";
import Links from "./Components/Links";
import BackButton from "@/Components/Buttons/BackButton";

type Props = {
    errors: any;
    session: Session;
    data: SendPost;
    setData: any;
    games: Array<Game>;
    gamesDate: Array<GameDate>;
    handleSubmit: any;
    link: Link;
    setLink: React.Dispatch<React.SetStateAction<Link>>;
};

const Create = (props: Props) => {
    const {
        session,
        games,
        gamesDate,
        data,
        setData,
        link,
        setLink,
        handleSubmit,
        errors,
    }: any = props;

    return (
        <div className="py-5 px-5 mx-5 my-5">
            <div className="pb-5">
                <div className="flex items-end gap-2">
                    <h2>Match</h2>
                    {errors.game_id && (
                        <p className="text-red-1000 text-sm">
                            The match-up field is required.
                        </p>
                    )}
                </div>

                <GameSelect
                    games={games}
                    gamesDate={gamesDate}
                    setData={setData}
                />
            </div>

            <div className="pb-5">
                <div className="flex items-end gap-2">
                    <h2>Title</h2>
                    <p className="text-red-1000 text-sm">{errors.title}</p>
                </div>

                <input
                    className="w-full rounded border-gray-1000 bg-gray-50 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-xl"
                    type="text"
                    value={data.title}
                    onChange={(e) => {
                        setData("title", e.target.value);
                    }}
                />
            </div>

            <div className="pb-5">
                <div className="flex items-end gap-2">
                    <h2>Detail</h2>
                    <p className="text-red-1000 text-sm">{errors.detail}</p>
                </div>
                <textarea
                    className="w-full rounded border-gray-1000 bg-gray-50 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000"
                    rows={5}
                    value={data.detail}
                    onChange={(e) => setData("detail", e.target.value)}
                ></textarea>
            </div>

            <div className="pb-10">
                <Links
                    data={data}
                    setData={setData}
                    link={link}
                    setLink={setLink}
                />
            </div>

            <div className="flex justify-between">
                {session.calendar == 1 ? (
                    <BackButton link={route("games.index")} />
                ) : (
                    <BackButton link={route("favorites.index")} />
                )}

                <button
                    onClick={handleSubmit}
                    className="bg-gray-1000 text-white shadow active:bg-blue-1000 active:scale-95 px-5 py-1 rounded duration-200"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Create;
