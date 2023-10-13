import React, { useEffect, useState } from 'react'
import './style.scss'
import { addTodo, resetUpdateItem, updateSelectedITem } from '../../Store/Actions/TodoActions'
import { useDispatch, useSelector } from 'react-redux'
const AddTaskForm = () => {
    const dispatch = useDispatch()
    const { addTodos } = useSelector((state) => {
        return {
            addTodos: state.AddToReducer,
        }
    });


    const [todo, setTodo] = useState({
        title: '',
        desc: ''
    })

    const [update, setUpdate] = useState(false)

    const handleTitleChange = (e) => {
        setTodo({ ...todo, title: e.target.value });
    };

    const handleDescChange = (e) => {
        setTodo({ ...todo, desc: e.target.value });
    };

    const _id = Date.now()

    const handleSubmit = (e) => {
        dispatch(addTodo({ _id: _id, title: todo.title, desc: todo.desc, is_completed: false }))
        setTodo({ title: '', desc: '' });
    };


    const seleted_Todo = addTodos?.todosList?.filter((e) => {
        return (
            e._id === addTodos?.selected_ID
        )
    })

    const selectHandle = () => {
        setTodo({ title: seleted_Todo[0]?.title, desc: seleted_Todo[0]?.desc })
        dispatch(resetUpdateItem())
        setUpdate(true)
    }

    useEffect(() => {
        if (seleted_Todo.length) {
            selectHandle()
        }
    }, [seleted_Todo.length])


    const updateTodoHandle = () => {
        const getIDs = addTodos.todosList.map((e) => e._id)
        const element_to_find = addTodos.update_ID
        const index = getIDs.indexOf(element_to_find)
        addTodos.todosList.splice(index, 1, {
            desc: todo.desc,
            title: todo.title,
            _id: element_to_find
        })
        setTodo({ title: '', desc: '' });
        setUpdate(false)
        dispatch(updateSelectedITem())
    }

    // const deleteTodo = () => {
    //     const getIDs = addTodo.todosList.map((e)=>e._id)
    //     const element_to
    // }

    return (
        <div className='form-wrapper container'>
            <form className='form' onSubmit={(e) => e.preventDefault()}>
                <div className="input-wrap">
                    <label htmlFor="" className="input-label">Title</label>
                    <input type="text" className='title-input' value={todo.title} onChange={handleTitleChange} />
                </div>
                <div className="input-wrap">
                    <label htmlFor="" className="input-label">Description</label>
                    <input type="text" className='desc-input' value={todo.desc} onChange={handleDescChange} />
                </div>
                <button type='submit' className='submit-btn'
                    onClick={() => { update ? updateTodoHandle() : handleSubmit() }}
                >
                    + {update ? `Update ` : 'Add '}Task
                </button>
            </form>
        </div>
    )
}

export default AddTaskForm
