import Header from "./main-page/Header";
const initialTasks = [
  {
    id: 1,
    text: "Task 1",
    day: "Dec 10th at 2:00pm",
    remainder: true,
  },
  
  {
    id: 2,
    text: "Task 2",
    day: "Dec 10th at 5:00pm",
    remainder: false,
  },
   
   {
    id: 3,
    text: "Task 3",
    day: "Dec 13th at 6:00pm",
    remainder: false,
  }
];

function App() {
  return (
    <div className ="container">
      <Header/> 
    </div>
  );
};

export default App;
