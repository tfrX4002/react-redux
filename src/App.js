import './App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import addTask from './redux/AddTask';


function App() {


    let tasks = useSelector(state => state.users )

    let dispatch = useDispatch();
 
    const addTasks = () =>
      {
        let task = {
        name : "farmer",
        description: "cleans the field"
       }
      dispatch(addTask(task))
      }


  return (
    <div className="App">
       <h2>list of tasks</h2>
         {tasks.map((task) => 
          <div>
           <h4>task.name</h4>
           <hr/>
          </div> 
          )} 


        <button onClick={addTasks}></button>  
    </div>
  );
}

export default App;
