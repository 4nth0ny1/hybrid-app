import React, { Component } from "react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";



class TodoForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            title: '', 
            content: '', 
            id: '',
        }
    }
    
    render() {

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.addTodo(this.state)
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            )
            this.setState({
                [event.target.name]: [{}]
            })
        }

        return(
            <>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={onChange} name="title" id="title" placeholder="title" />
                    <input className="post-form-input post-content" type="text" onChange={onChange} name="content" id="content" placeholder="content" />
                    <button type="submit">Create Todo</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);