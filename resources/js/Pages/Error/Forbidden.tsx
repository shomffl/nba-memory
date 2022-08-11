import React from "react";
import Authenticated from "../../Layouts/Authenticated";

const Forbidden = (props: any) => {
    return (
        <Authenticated auth={props.auth} header={null}>
            Forbidden
        </Authenticated>
    );
};

export default Forbidden;
