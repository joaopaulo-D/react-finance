import React, { useState, useEffect } from "react";
import { 
    Container,
    Header,
    HeaderText,
    Body 
} from "./App.styles";
import { GlobalStyle } from "./styles/GlobalStyle";

import TableArea from "./components/TableArea";
import InfoArea from "./components/infoArea";

import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

const App: React.FC = () => {

    const [list, setList] = useState(items);
    const [filterList, setFilterList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        setFilterList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    }

    return(
        <Container>
            <Header>
                <HeaderText>Sistema Financeiro</HeaderText>
            </Header>
            <Body>
                <InfoArea 
                    cMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                />
                <TableArea list={filterList}/>
            </Body>
            <GlobalStyle/>
        </Container>
    )
}

export default App;