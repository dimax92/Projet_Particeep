import { filtrePagination } from "../components/functions";
import { movies$ } from "../movies";

let initialState;

movies$.then(result => initialState = result).catch(error => console.log(error))

export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
export const FILTER_CATEGORY_TODO_ACTION = "FILTER_CATEGORY_TODO_ACTION";
export const PAGINATION_TODO_ACTION = "PAGINATION_TODO_ACTION";

export function todosReducer (state = initialState, action) {
    setTimeout(() => {
        switch (action.type) {
            case PAGINATION_TODO_ACTION:
                return filtrePagination(initialState, action.payload.premierNumero, action.payload.deuxiemeNumero)
            case FILTER_CATEGORY_TODO_ACTION:
                return state.filter(todoFiltre => todoFiltre.category !== action.payload)
            case DELETE_TODO_ACTION:
                return state.filter(todo => todo.id !== action.payload)
            default:
                return state
        }
    }, 300);
}