

const Todo = (props) => {

    return (
        <>
            {props.todo.title}
            {props.todo.content}
            <br></br>
        </>
    )
}


export default Todo;
