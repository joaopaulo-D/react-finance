import React from "react";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter"; 
import { categories } from "../../data/categories";

import {
    TableLine,
    TableColnm,
    Category,
    Value
} from "./style";

type Props = {
    item: Item
}

const TableItem: React.FC<Props> = (props) => {
    return(
        <TableLine>
            <TableColnm>{formatDate(props.item.date)}</TableColnm>
            <Category color={categories[props.item.category].color}>
                <TableColnm>{categories[props.item.category].title}</TableColnm>
            </Category>
            <TableColnm>{props.item.title}</TableColnm>
            <Value color={categories[props.item.category].expense ? 'red' : 'green'}>
                <TableColnm>R$ {props.item.value}</TableColnm>
            </Value>
        </TableLine>
    )
}

export default TableItem;