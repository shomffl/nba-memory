import React, { useState, useEffect, memo } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { ActionIcon } from "@mantine/core";
import { Trash, ArrowNarrowRight } from "tabler-icons-react";

const ImpressionBoxs = memo(
    (props: {
        postsByDate: any;
        todayPosts: Array<Post>;
        setTodayPosts: any;
        setOpened: any;
    }) => {
        const { postsByDate, todayPosts, setTodayPosts, setOpened } = props;

        const handleDeletePost = (id: number, mathced_at: string) => {
            Inertia.delete(`/posts/${id}`, {
                onBefore: () => confirm("本当に削除しますか？"),
                onSuccess: () => removeData(id, mathced_at),
            });
        };

        /**
         * 感想を削除後にstateの値を更新
         * propsが変更されるタイミングが間に合わないため
         * @param id 感想ID
         * @param matched_at 試合日時
         */
        const removeData = (id: number, matched_at: string) => {
            const data = postsByDate[matched_at].filter(
                (e: any) => !(e.id == id)
            );
            setTodayPosts(data);
        };

        return (
            <div>
                <h1>感想</h1>
                {todayPosts?.length ? (
                    <div>
                        {todayPosts?.map((todayPost) => (
                            <div
                                key={todayPost.id}
                                className="flex items-center justify-center"
                            >
                                <Link
                                    href={route("posts.show", todayPost.id)}
                                    className="w-10/12 pr-2 py-2"
                                >
                                    <div className="flex bg-gray-100 p-2 rounded border-gray-300 border-b-2 active:scale-105 active:bg-blue-50 duration-200">
                                        {todayPost.title} <br />
                                        {todayPost.game.home_team.name} vs{" "}
                                        {todayPost.game.away_team.name}
                                    </div>
                                </Link>
                                <div className="flex flex-col gap-2">
                                    <ActionIcon
                                        onClick={() =>
                                            Inertia.get(
                                                `/posts/${todayPost.id}`
                                            )
                                        }
                                    >
                                        <ArrowNarrowRight
                                            strokeWidth={1.5}
                                            color={"black"}
                                        />
                                    </ActionIcon>
                                    <ActionIcon
                                        onClick={(e: any) =>
                                            handleDeletePost(
                                                todayPost.id,
                                                todayPost.game.matched_at
                                            )
                                        }
                                    >
                                        <Trash
                                            strokeWidth={1.5}
                                            color={"black"}
                                        />
                                    </ActionIcon>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="mx-4 my-3">
                        <h2>No Data</h2>
                    </div>
                )}
            </div>
        );
    }
);

export default ImpressionBoxs;
