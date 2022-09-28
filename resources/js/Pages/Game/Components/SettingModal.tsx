import React, { memo } from "react";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const SettingModal = memo((props: any) => {
    const { openSettingModal, handleClose, viewTeamId, setViewTeamId, teams } =
        props;

    const handleTeamIdList = (id: any) => {
        console.log(id);
        if (viewTeamId.includes(id)) {
            removeId(id);
        } else {
            setViewTeamId([...viewTeamId, id]);
        }
    };

    const removeId = (id: any) => {
        const data = viewTeamId.filter((e: any) => !(e == id));
        setViewTeamId(data);
    };

    const resetTeamIdList = () => {
        setViewTeamId([]);
        handleClose();
    };

    return (
        <Modal open={openSettingModal} onClose={handleClose}>
            <div className="bg-white rounded-lg m-48 p-10">
                <div className="flex items-center gap-4">
                    <h1 className="mb-4 text-3xl">Filter</h1>
                    <p className="text-sm">
                        試合を表示したいチームを選択して下さい
                    </p>
                </div>
                <div className="flex items-start justify-between">
                    <div>
                        <select
                            className="py-3 px-4 rounded"
                            multiple
                            size={10}
                            value={viewTeamId}
                            onChange={(e) => handleTeamIdList(e.target.value)}
                        >
                            {teams.map((team: any) => (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 col-auto h-max">
                        {viewTeamId.map((id: any) => (
                            <div
                                className="flex items-center justify-between text-white bg-gray-1000 pl-3 py-1 mx-2 mb-2 rounded shadow"
                                key={id}
                            >
                                <span>{teams[id - 1].name}</span>
                                <span>
                                    <IconButton
                                        sx={{ color: "white" }}
                                        onClick={() => removeId(id)}
                                    >
                                        <ClearIcon />
                                    </IconButton>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-blue-1000 text-lg text-white hover:text-white shadow hover:shadow-2xl hover:scale-105 active:scale-100 px-5 py-2 mb-3 rounded duration-200">
                            save
                        </button>
                        <button
                            onClick={resetTeamIdList}
                            className="bg-red-800 text-lg text-white hover:text-white shadow hover:shadow-2xl hover:scale-105 active:scale-100 px-5 py-2 rounded duration-200"
                        >
                            cancel
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
});

export default SettingModal;
