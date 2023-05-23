import {useRef,useState} from "react";
import List from "./components/List/List";
import "./App.css";
import Form from "./components/Form/Form";
import {v4 as id}from "uuid"


const App = () => {


    const [initialState,setInitialState] = useState([]);

    const handleClick = (text) => {
        console.log(text)
        const data = {}

        data.text = text
        data.isDone=false
        data.id = id()

        setInitialState([...initialState,data])
    }

    const handleCheck = (id) => {
            // setInitialState(initialState.map(i => {
            //     if (i.id === id){
            //         return{text:i.text,isDone:!i.isDone,id:i.id}
            //     }else {
            //         return i
            //     }
            // }))

        setInitialState(initialState.map(i => i.id === id ? {text:i.text,isDone:!i.isDone,id:i.id} : i))
    }

    const handleDelete = (id) => {
        setInitialState(initialState.filter(i => i.id !== id))
    }
    const handleEdit = (id) => {
        const oldData =initialState.find(i => i.id === id)
        const value = prompt("Enter new value",oldData.text);
        if(value){
            setInitialState(initialState.map(i => i.id === id ?
            {text:value,isDone:false,id:i.id} : i))
        }
    }

  return (
      <div>

          <Form onSubmit={handleClick}/>
          {initialState.map((i) => <List key={i.id} data={i.text} id={i.id} isDone={i.isDone}
           onChecked={handleCheck} onDelete={handleDelete} onEdit={handleEdit}/>)}
      </div>
  )
}

export default App
