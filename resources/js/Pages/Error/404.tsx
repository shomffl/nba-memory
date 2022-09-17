import React from "react";
import Authenticated from "../../Layouts/Authenticated";

const Forbidden = (props: any) => {
    return (
        <Authenticated auth={props.auth} header={null}>
            Not Found
        </Authenticated>
    );
};

export default Forbidden;
