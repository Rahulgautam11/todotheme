import React, { useState } from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { CompletedSelectedITem, deleteSelectedITem, selectUpdateItem } from '../../../Store/Actions/TodoActions'
const TodoItem = ({ data }) => {
    const { addTodos } = useSelector((state) => {
        return (
            {
                addTodos: state.AddToReducer
            }
        )
    })
    const dispatch = useDispatch();
    const [activePop, setActivePop] = useState(false)
    const [complete, setComplete] = useState(data?.is_completed ? data?.is_completed : false)
    const openPop = (e) => {
        setActivePop(!activePop)
    }

    const updateHandle = (id) => {
        dispatch(selectUpdateItem(id))
    }
    const deleteTodo = (id) => {
        const getIDs = addTodos.todosList.map((e) => e._id)
        const getIndex = getIDs.indexOf(id)
        addTodos.todosList.splice(getIndex, 1);
        dispatch(deleteSelectedITem())
    }

    const completeHandle = (id) => {
        const all_IDs = addTodos?.todosList.map((e) => e._id)
        const getIndex = all_IDs.indexOf(id)
        const getItem = addTodos.todosList[getIndex];
        getItem.is_completed = complete;
        console.log(getItem, 'getItemgetItem')
        dispatch(CompletedSelectedITem())
        setComplete((e) => !e)
    }
    console.log(addTodos, 'addTodos')

    return (
        <div className='todo-item-wrapper'>
            <div className="todo-wrap">
                <div className="item-wrap">
                    <div className="icon"></div>
                    <div className="item">
                        <p className="title">
                            {
                                complete ?
                                    <del > {data.title}</del>
                                    :
                                    data.title
                            }
                        </p>
                        <p className="desc">{data.desc}</p>
                    </div>
                </div>
                <div className="actions-wrap">
                    <div className="dots-wrap" onClick={openPop}>
                        <span></span><span></span><span></span>
                    </div>
                    {activePop && <div className="popup-wrap">
                        <ul className="list" >
                            <li><span className='icons complete' onClick={() => completeHandle(data._id)}></span></li>
                            <li><span className='icons update' onClick={() => updateHandle(data._id)}></span></li>
                            <li><span className='icons delete' onClick={() => deleteTodo(data._id)}></span></li>
                        </ul>
                    </div>}
                </div>

            </div>
        </div >
    )
}

export default TodoItem
