import React from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    setDataByObject,
    setDataByMethod,
    setDataByKeyValuePair,
} from "@inertiajs/inertia-react";
import { IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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
            name: "",
        });
    };

    return (
        <div>
            <h2>Link</h2>
            {data.links.map((link: any) => (
                <div key={link.id}>{link.name}</div>
            ))}
            <div className="flex gap-2">
                <input
                    className="w-full rounded border-gray-1000 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-lg placeholder-black placeholder-opacity-30"
                    type="text"
                    value={link.name}
                    placeholder="https://youtube.com"
                    onChange={(e) =>
                        setLink({
                            id: data.links.length + 1,
                            name: e.target.value,
                        })
                    }
                />
                <IconButton
                    onClick={(e) => {
                        addLink();
                    }}
                    disabled={link.name == ""}
                >
                    <CheckCircleOutlineIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Links;
