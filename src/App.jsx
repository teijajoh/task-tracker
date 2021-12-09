import Header from "./main-page/Header";
import Tasks from "./main-page/Tasks";

const initialTasks = [
  {
    id: 1,
    text: "Task 1",
    day: "Dec 10th at 2:00pm",
    reminder: true,
  },
  
  {
    id: 2,
    text: "Task 2",
    day: "Dec 10th at 5:00pm",
    reminder: false,
  },
   
   {
    id: 3,
    text: "Task 3",
    day: "Dec 13th at 6:00pm",
    reminder: true,
  }
];

function App() {
  return (
    <div className ="container">
      <Header />
      <Tasks tasks={initialTasks}/>
    </div>
  );
}

export default App;
