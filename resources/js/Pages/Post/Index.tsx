import React from "react";
import Authenticated from "@/Layouts/Authenticated";

const Index = (props: { auth: any; posts: Array<Post> }) => {
    const { posts } = props;
    console.log(posts);
    return (
        <Authenticated auth={props.auth} header={null}>
            <div>
                {posts.map((post) => (
                    <div>{post.title}</div>
                ))}
            </div>
        </Authenticated>
    );
};

export default Index;
