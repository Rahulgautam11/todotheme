import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './style.scss'
import { useSelector } from 'react-redux'
const Todo = () => {
    const { data } = useSelector((state) => {
        return { data: state.AddToReducer }
    })
    return (
        <div className='container todo-wrapper'>
            <h2 className="heading-wrap">Your Tasks</h2>
            <div className="todos-wrap">
                {
                    data?.todosList?.map((val, key) => {
                        return (
                            <TodoItem data={val} key={key} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo
