import Authenticated from "@/Layouts/Authenticated";
import React from "react";

const Subscribe = (props: any) => {
    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Subscribe
                </h2>
            }
        >
            test
        </Authenticated>
    );
};

export default Subscribe;
