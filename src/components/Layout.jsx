import React from "react";
import NewItem from "./NewItem";
import TodoList from "./TodoList";

import "../styles/Layout.css"

export default function Layout() {
    return <>
        <div className="layout-container">
            <div className="new-item-container">
                <NewItem />
            </div>
            <div className="todo-list-container">
                <TodoList />
            </div>
        </div>
    </>
}