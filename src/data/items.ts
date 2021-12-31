import { Item } from "../types/Item";

export const items: Item[] = [
    {
        date: new Date(2020, 4, 6),
        category: 'food',
        title: 'McDonalds',
        value: 32.12
    },

    {
        date: new Date(2021, 9, 1),
        category: 'food',
        title: 'Burger King',
        value: 25.00
    },

    {
        date: new Date(2021, 11, 10),
        category: 'rent',
        title: 'Alguel',
        value: 300.00
    },
    
    {
        date: new Date(2021, 10, 29),
        category: 'salary',
        title: 'Salario',
        value: 1800.00
    }
]