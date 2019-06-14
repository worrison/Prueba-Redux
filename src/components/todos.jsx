import React from 'react'
import { connect } from 'react-redux'

class Todos extends React.Component{
    constructor (props)
    {
        super(props);
        console.log("hola");
    }

    render(){
       console.log(this.props.todos.todos);
        return (<div>
                <p>Hola</p>
                <button>Añadir</button>
      {      ({onClick, completed, text }) => (
    <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </li>
  )}
          
                {this.props.todos.todos.map((t)=><div key={t.id}{...t}/>)}
        </div>)
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


