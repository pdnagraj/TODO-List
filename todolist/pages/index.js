import {useState} from 'react'

const Index = () => {

    const [userInput, setUserInput] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) =>{
        e.preventDefault()
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        setTodoList([
            userInput,
            ...todoList
        ])

        setUserInput('')
    }

    const handleDelete = (todo) =>{
        
        // Go through todoList and check if todoItem is not equal to todo and add it to updated arr 
        // index we clicked on matches item found in todoList, do not include it
        const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))

        setTodoList(updatedArr)
    }


    return (
        <div>
            <h3>Next Js Todo List</h3>
            <form>
                <input type="text" value={userInput} placeholder="Enter Todo Item" onChange={handleChange}/><button onClick={handleSubmit}>submit</button>
            </form>
            <ul>
                {
                    todoList.length>=1 ? todoList.map((todo, idx)=>{
                        return <li key={idx}>{todo} <button onClick={(e) =>{
                            e.preventDefault() 
                            handleDelete(todo)}}>delete</button></li> 
                    })
                    : 'enter a todo item'
                }
            </ul>
        </div>
    )
}

export default Index