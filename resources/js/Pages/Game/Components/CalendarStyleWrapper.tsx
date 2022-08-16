import styled from "@emotion/styled";

export const CalendarStyleWrapper = styled.div`
    .fc-button.fc-prev-button,
    .fc-button.fc-next-button,
    .fc-button.fc-button-primary {
        background: #889c9b;
        border-color: #ebebeb;
        &:active {
            background-color: #889c9b;
            border-color: #ebebeb;
            scale: 105%;
        }
    }
`;
