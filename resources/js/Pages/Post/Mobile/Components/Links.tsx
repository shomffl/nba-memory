import React from "react";
import { ActionIcon } from "@mantine/core";
import { Trash } from "tabler-icons-react";
import { Plus } from "tabler-icons-react";
import { NotificationsProvider } from "@mantine/notifications";
import { CustomNotification } from "../../../../Components/CustomNotification";
import BreakPoints from "@/Pages/BreakPoints";

type Props = {
    data: SendPost;
    setData: any;
    link: Link;
    setLink: React.Dispatch<React.SetStateAction<Link>>;
};

const Links = (props: Props) => {
    const { data, setData, link, setLink } = props;

    const addLink = () => {
        if ((link.title && link.url) == "") {
            CustomNotification({
                title: "titleとurlを入力してください",
                body: "Linkを追加するにはtitleとurlを入力する必要があります",
                type: 0,
            });
        } else {
            const links = [...data.links, link];
            setData("links", links);
            setLink({
                id: 0,
                title: "",
                url: "",
            });
            CustomNotification({
                title: "Linkが追加されました",
                body: "削除したい場合はゴミ箱ボタンを押してください",
                type: 1,
            });
        }
    };

    /**
     * リンクの削除ボタンが押下されたときに該当のリンクを削除し、削除データを除いたリンク群をdataに再挿入
     * @param id linkのid
     */
    const removeLink = (id: number) => {
        const linkData = data.links.filter((e: any) => !(e.id == id));
        setData("links", linkData);
    };

    return (
        <NotificationsProvider
            autoClose={5000}
            position={BreakPoints() ? "bottom-right" : "top-right"}
        >
            <div>
                <h2 className="mb-2">Link</h2>

                {data.links.map((link: any) => (
                    <div
                        key={link.id}
                        className="flex flex-col items-start gap-2 mb-4 border-l border-gray-1000"
                    >
                        <div className="flex items-center gap-4 w-10/12 font-bold">
                            <div className="overflow-auto px-3">
                                {link.title}
                            </div>
                        </div>
                        <div className="flex items-start gap-4 w-full">
                            <div className="overflow-auto px-3 pb-4 w-10/12 text-xs">
                                {link.url}
                            </div>
                            <ActionIcon
                                className="hover:bg-gray-100 hover:scale-125 duration-200 active:scale-110"
                                onClick={(e: any) => removeLink(link.id)}
                            >
                                <Trash strokeWidth={1.5} color={"black"} />
                            </ActionIcon>
                        </div>
                    </div>
                ))}
                <div className="flex items-center gap-2 mt-4">
                    <div className="w-4/12">
                        <input
                            type="text"
                            value={link.title}
                            className="w-full rounded border-gray-1000 bg-gray-50 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-sm placeholder-black placeholder-opacity-30"
                            placeholder="highlight"
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
                            className="w-full rounded border-gray-1000 bg-gray-50 focus:border-gray-1000 focus:ring-1 focus:ring-gray-1000 text-sm placeholder-black placeholder-opacity-30"
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

                    <ActionIcon
                        className="hover:bg-gray-100 hover:scale-125 duration-200 active:scale-100"
                        onClick={(e: any) => {
                            addLink();
                        }}
                    >
                        <Plus strokeWidth={1.5} color={"black"} />
                    </ActionIcon>
                </div>
            </div>
        </NotificationsProvider>
    );
};

export default Links;
