import React from "react";
import { Item } from "../../types/Item";

import TableItem from "../TableItem";

import { 
    Table,
    TableHeadColumn 
} from "./style";

type Props = {
    list: Item[]
}

const TableArea: React.FC<Props> = (props) => {
    return(
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={100} >Data</TableHeadColumn>
                    <TableHeadColumn width={130} >Categoria</TableHeadColumn>
                    <TableHeadColumn>Titulo</TableHeadColumn>
                    <TableHeadColumn width={150} >Valor</TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {props.list.map((item, index) => (
                    <TableItem key={index} item={item}/> 
                ))}
            </tbody>
        </Table>
    )
}

export default TableArea;