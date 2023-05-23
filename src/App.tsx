import { SetStateAction, useState } from "react";
import Task from "./component/Task";
import logo from './images/journal-richtext.svg'

interface Todo {
  id: number,
  task: string,
  isCompleted: boolean
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  // console.log('object', todos);

  const handlechange = (e: { target: { value: SetStateAction<string> } }) => {
    setTodo(e.target.value);
  };
  

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    todo === ''? alert('Please Fill the Feilds') :
    setTodos([
      ...todos,
      {
        id: Date.now(),
        task: todo,
        isCompleted: false
      }
    ]);
    setTodo('');
  };



  return (
    <>
    <div style={{backgroundColor: 'GrayText', borderBottom: '5px solid lime'}}>
      <div className=" container d-flex align-content-center ">
        <img src={logo} alt="" style={{width: '40px'}}/>
        <h1 style={{ fontSize: '60px', color: 'lime'} } className="pb-3">Todo-List Manager <span>FrameWork-Table</span> </h1>
      </div>
      </div>
      <div style={{backgroundColor: "wheat"}}>

        <div className="container pt-5 ">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            onChange={handlechange}
            value={todo}
            className=""
            placeholder="Enter Todo"
            aria-describedby="button-addon2"
            />
          <button className="btn btn-primary" type="submit" id="button-addon2">
            Save
          </button>
        </div>
      </form>
      <div className="card d-flex" style={{backgroundColor: "grey", height: '100vh'}}>
        <h2 style={{textAlign:"center"}}>List of Tasks</h2>
      {todos.map((task) => (
        <Task task={task} key={task.id} />
        ))}
        </div>
        </div>
    </div>
        </>
  );
}

export default App;
