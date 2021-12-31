import React from "react";
import { 
    Contianer,
    MonthArea,
    MonthArrow,
    MonthTitle,
    ResumeArea 
} from "./style";
import { formatCurrentMonth } from "../../helpers/dateFilter";

type Props = {
    cMonth: string
    onMonthChange: (newMonth: string) => void;
}

const InfoArea: React.FC<Props> = (props) => {

    const handlePrevMonth = () => {
        let [year, month] = props.cMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

        currentDate.setMonth(currentDate.getMonth() - 1);
        props.onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)

    }

    const handleNextMonth = () => {
        let [year, month] = props.cMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);

        currentDate.setMonth(currentDate.getMonth() + 1);
        props.onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return(
        <Contianer>
            <MonthArea>
                <MonthArrow onClick={handlePrevMonth}>➡️</MonthArrow>
                <MonthTitle>{formatCurrentMonth(props.cMonth)}</MonthTitle>
                <MonthArrow onClick={handleNextMonth}>⬅️</MonthArrow>
            </MonthArea>
            <ResumeArea>

            </ResumeArea>
        </Contianer>
    )
}

export default InfoArea;