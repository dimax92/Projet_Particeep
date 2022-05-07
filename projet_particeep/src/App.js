import React, { useState } from "react";
import {movies$} from "./movies";
import { Provider, useDispatch } from 'react-redux';
import { TodoListStore } from "./components/TodoList";
import { TodoFilterStore } from "./components/TodoFilter";
import { TodoPaginationStore } from "./components/TodoPagination";
import {combineReducers, createStore} from "redux"
import { filtrePagination } from "./components/functions";


const App=()=>{
  const initialState = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ]
    const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";
    const FILTER_CATEGORY_TODO_ACTION = "FILTER_CATEGORY_TODO_ACTION";
    const PAGINATION_TODO_ACTION = "PAGINATION_TODO_ACTION";
   
    function todosReducer (state = initialState, action) {
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
    }
   
    const store = createStore(
       combineReducers({
           todos: todosReducer,
           filter: (state = 0, action) => state
       }),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return(
      <Provider store={store}>
        <TodoFilterStore/>
        <TodoListStore/>
        <TodoPaginationStore/>
      </Provider>
    )
}

export default App;