import React from "react";
import { useState } from "react";
import {connect} from "react-redux"
import { FILTER_CATEGORY_TODO_ACTION } from "../store/todosReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { recuperationCategories } from "./functions";

export function TodoFilter ({todos, onCategory}) {
    let tableauCategories = [];
    const dataCategories = todos.map((resultat) => {
        tableauCategories.push(resultat.category)
    })

    let nouveauTableau = recuperationCategories(tableauCategories);

    const data = nouveauTableau.map((resultat)=>{
        return(
            <div className="divCheckbox">
                <input type="checkbox" className="checkCategorie" name={resultat} onClick={event => {onCategory(resultat)}} />
                <label for={resultat}>{resultat}</label>
            </div>
        )
      })
      
    return (
        <div className="divFiltres">
            {data}
        </div>
    )
}

export const TodoFilterStore = connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        onCategory: category => dispatch({
            type: FILTER_CATEGORY_TODO_ACTION,
            payload: category
        })
    })
)(TodoFilter)