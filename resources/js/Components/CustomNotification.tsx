import React from "react";
import { Check, X } from "tabler-icons-react";
import { showNotification, cleanNotifications } from "@mantine/notifications";

type Notification = {
    title: string;
    body: string;
    type: number;
};

export const CustomNotification = (props: Notification) => {
    const { title, body, type } = props;

    cleanNotifications();
    {
        type == 0
            ? showNotification({
                  title: title,
                  message: body,
                  icon: <X />,
                  color: "red",
              })
            : showNotification({
                  title: title,
                  message: body,
                  icon: <Check />,
                  color: "green",
              });
    }
};
