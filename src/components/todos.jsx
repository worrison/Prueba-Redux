import React from 'react'
import { connect } from 'react-redux'
import AddTodo from './addTodo';

class Todos extends React.Component
{
    render(){
        console.log(this.props)
        return <div>
            <AddTodo/>
            <h1>Todos</h1>
            {  this.props.todos.todos.map((t) => <div key={t.id} {...t}>{t.text}</div>)}
        </div>
    }
}

function mapStateToProps(state)
{
    return{
        todos:state.todos
    }
}

const connection = connect(
    mapStateToProps,
)

export default connection(Todos)


