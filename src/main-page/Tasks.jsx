import PropTypes from "prop-types";
import Task from "./Task";
function Tasks({ tasks , onToggle, onDelete}) {
    if (!tasks || tasks.length === 0) {
        return <p>No tasks to display</p>;
    }
    return tasks.map((task) => 
      <Task onToggle ={onToggle} onDelete={onDelete} key={task.id} task={task}/>);
}

Tasks.defaultProps = {
    tasks: [],
};

Tasks.propType = {
    tasks: PropTypes.array,
    onTaggle: PropTypes.func.isRequired,
    onDelete:PropTypes.func.isRequired,
};


export default Tasks;