import React from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    setDataByObject,
    setDataByMethod,
    setDataByKeyValuePair,
} from "@inertiajs/inertia-react";
import { IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

const Links = (props: {
    data: SendPost;
    setData: setDataByObject<SendPost> &
        setDataByMethod<SendPost> &
        setDataByKeyValuePair<SendPost>;
    link: Link;
    setLink: React.Dispatch<React.SetStateAction<Link>>;
}) => {
    const { data, setData, link, setLink } = props;
    const addLink = () => {
        const links = [...data.links, link];
        console.log(links);
        setData("links", links);
        setLink({
            id: 0,
            title: "",
            url: "",
        });
    };

    /**
     * リンクの削除ボタンが押下されたときに該当のリンクを削除し、削除データを除いたリンク群をdataに再挿入
     * @param id linkのid
     */
    const removeLink = (id: number) => {
        const linkData = data.links.filter((e: any) => !(e.id == id));
        console.log("testlinkData", linkData);
        setData("links", linkData);
    };

    return (
        <div>
            <h2 className="mb-2">Link</h2>
            <div className="flex">
                <p className="w-4/12">title</p>
                <p className="w-8/12">url</p>
            </div>

            {data.links.map((link: any) => (
                <div key={link.id} className="flex gap-2 pt-2 pb-4">
                    <div className="w-4/12 bg-white rounded py-2 px-3 shadow">
                        {link.title}
                    </div>
                    <div className="w-8/12 bg-white rounded py-2 px-3 shadow">
                        {link.url}
                    </div>
                    <IconButton onClick={(e) => removeLink(link.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
            <div className="flex gap-2">
                <div className="w-4/12">
                    <input
                        type="text"
                        value={link.title}
                        className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-lg placeholder-black placeholder-opacity-30"
                        placeholder="mavs highlight"
                        onChange={(e) =>
                            setLink({
                                id: data.links.length + 1,
                                title: e.target.value,
                                url: link.url,
                            })
                        }
                    />
                </div>
                <div className="w-8/12">
                    <input
                        className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-lg placeholder-black placeholder-opacity-30"
                        type="text"
                        value={link.url}
                        placeholder="https://youtube.com"
                        onChange={(e) =>
                            setLink({
                                id: data.links.length + 1,
                                title: link.title,
                                url: e.target.value,
                            })
                        }
                    />
                </div>

                <IconButton
                    onClick={(e) => {
                        addLink();
                    }}
                    disabled={(link.title && link.url) == ""}
                >
                    <CheckCircleOutlineIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Links;
