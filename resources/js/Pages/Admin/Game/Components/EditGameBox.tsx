import React from "react";

const EditGameBox = (props: {
    editGameData: any;
    setEditGameData: React.Dispatch<any>;
    changeMode: boolean;
    setChangeMode: React.Dispatch<React.SetStateAction<boolean>>;
    handleUpdatePoint: (e: any) => void;
}) => {
    const {
        editGameData,
        setEditGameData,
        changeMode,
        setChangeMode,
        handleUpdatePoint,
    } = props;

    return (
        <div>
            <div>
                <h2 className="flex justify-between items-center rounded font-bold shadow  my-3 px-4 py-3 bg-white">
                    <img
                        className="w-1/12"
                        src={editGameData?.home_team.logo}
                    />
                    <div>
                        {editGameData?.home_team.name}
                        &nbsp;
                    </div>
                    &nbsp;vs&nbsp;
                    <div>
                        {editGameData?.away_team.name}
                        &nbsp;
                    </div>
                    <img
                        className="w-1/12"
                        src={editGameData?.away_team.logo}
                    />
                </h2>
                <div className="flex items-center">
                    <input
                        className="text-2xl w-2/4 text-center"
                        type="number"
                        value={editGameData?.home_team_point}
                        onChange={(e) =>
                            setEditGameData({
                                ...editGameData,
                                home_team_point: e.target.value,
                            })
                        }
                    />
                    &nbsp;vs&nbsp;
                    <input
                        className="text-2xl w-2/4 text-center"
                        type="number"
                        value={editGameData?.away_team_point}
                        onChange={(e) =>
                            setEditGameData({
                                ...editGameData,
                                away_team_point: e.target.value,
                            })
                        }
                    />
                </div>
            </div>

            <div className="flex justify-between px-4 py-8">
                <button
                    onClick={(e) => {
                        setChangeMode(!changeMode);
                    }}
                    className="px-6 py-2 bg-gray-1000 text-white shadow hover:text-white hover:bg-red-900 hover:shadow-2xl hover:scale-105 rounded duration-200"
                >
                    Cancel
                </button>
                <button
                    onClick={handleUpdatePoint}
                    className="px-6 py-2 bg-gray-1000 text-white shadow hover:text-white hover:bg-blue-1000 hover:shadow-2xl hover:scale-105 rounded duration-200"
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditGameBox;
