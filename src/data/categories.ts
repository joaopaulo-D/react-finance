import { Category } from "../types/Category"

export const categories: Category = {
    food: {
        title: 'Alimentação',
        color: 'blue',
        expense: true
    },
    
    rent: {
        title: 'Alguel',
        color: 'brown',
        expense: true
    },

    salary: {
        title: 'Salario',
        color: 'green',
        expense: false 
    }
}