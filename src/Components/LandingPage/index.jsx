import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import Todo from '../TodoItem/Todo/Todo'

const P = styled.p`
color: ${({ theme }) => theme.colors.textColor};
`
const LandingPage = () => {
    return (
        <>
            <Header />
            <AddTaskForm />
            <Todo />
        </>
    )
}

export default LandingPage
