import React from "react";
import { useState } from "react";
import {connect} from "react-redux"
import { DELETE_TODO_ACTION } from "../store/todosReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import LikeDislike from "./LikeDislike";

export function TodoList ({todos, onToggle}) {

    const data = todos.map((resultat)=>{
        let likesDislikes = parseInt(resultat.likes)+parseInt(resultat.dislikes);
        let couleurLikes = (parseInt(resultat.likes)/likesDislikes)*100;
        let couleurDislikes = (parseInt(resultat.dislikes)/likesDislikes)*100;
  
        return(
          <div className="card">
            <p className="title">{resultat.title}</p>
            <p>{resultat.category}</p>
            <div className="jaugeLikesDislikes" style={{"background": "linear-gradient(to left, green, green "+couleurLikes+"%, red "+couleurDislikes+"%)"}}></div>
            <div className="divLikesDislikes">
                <LikeDislike/>
            </div>
            <button className="supprimer" onClick={event => {onToggle(resultat.id)}}>Supprimer</button>
          </div>
        )
      })
      
    return (
        <div className="mapFilms">
            {data}
        </div>
    )
}

export const TodoListStore = connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        onToggle: id => dispatch({
            type: DELETE_TODO_ACTION,
            payload: id
        })
    })
)(TodoList)