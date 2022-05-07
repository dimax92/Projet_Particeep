import React from "react";
import { useState } from "react";
import {connect} from "react-redux"
import { PAGINATION_TODO_ACTION } from "../store/todosReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { recuperationCategories } from "./functions";

export function TodoPagination ({todos, onPage}) {
    const[premierNumero, setPremierNumero] = useState(0);
    const[deuxiemeNumero, setDeuxiemeNumero] = useState(12);
    const[nombrePages, setNombrePages] = useState(12);

    function pagination(premierNumero, deuxiemeNumero) {
        onPage(premierNumero, deuxiemeNumero);
        setPremierNumero(premierNumero);
        setDeuxiemeNumero(deuxiemeNumero);
    }
    //0,7
    //8,7
    //8,11
      
    return (
        <div className="divChoixPagination">
            <input type="checkbox" className="paginationCheckbox" name="4" onClick={event => {
                pagination(0, 3);
                setNombrePages(4);
                }}></input>
            <label for="4">4</label>
            <input type="checkbox" className="paginationCheckbox" name="8" onClick={event => {
                pagination(0, 7);
                setNombrePages(8);
                }}></input>
            <label for="8">8</label>
            <input type="checkbox" className="paginationCheckbox" name="12" onClick={event => {
                pagination(0, 11);
                setNombrePages(12);
                }}></input>
            <label for="12">12</label>
            <div className="Pagination">
                <FontAwesomeIcon className="previous" icon={faArrowLeft} onClick={event => {
                    pagination(premierNumero-nombrePages, deuxiemeNumero-nombrePages)
                }}/>
                <FontAwesomeIcon className="previous" icon={faArrowRight} onClick={event => {
                    pagination(premierNumero+nombrePages, deuxiemeNumero+nombrePages)
                }}/>
            </div>
        </div>
    )
}

export const TodoPaginationStore = connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        onPage: (premierNumero, deuxiemeNumero) => dispatch({
            type: PAGINATION_TODO_ACTION,
            payload: {premierNumero: premierNumero, deuxiemeNumero: deuxiemeNumero}
        })
    })
)(TodoPagination)