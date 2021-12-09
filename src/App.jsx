import Header from "./main-page/Header";
import { useState } from "react";
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
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  function toggleReminder(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    setTasks(newTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <Header />
      <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
