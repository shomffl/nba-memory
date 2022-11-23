import React from "react";
import { useMedia } from "react-use";

const BreakPoints = () => {
    const isWide = useMedia("(min-width: 800px)");
    return isWide;
};

export default BreakPoints;
