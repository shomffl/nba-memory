import React from "react";

const CalcDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    if (month < 10) {
        return date.getFullYear() + "-0" + month + "-" + date.getDate();
    }
    return date.getFullYear() + "-" + month + "-" + date.getDate();
};

export default CalcDate;
