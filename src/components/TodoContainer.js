import Todo from './Todo';

const TodoContainer = (props) => {
    const todoArray = props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
    })

    return (
        <>
            {todoArray}
        </>
    )
}


export default TodoContainer;