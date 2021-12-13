import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "./Button";

    function EditTask({ onSubmit, task, onCancel }) {
        const [text, setText] = useState("do nothing");
        const [day, setDay] = useState("today");
        const [reminder, setReminder] = useState(false);

        useEffect(() => {
            setText(task.text);
            setDay(task, day);
            setReminder(task.reminder);
        }, [task]);

        function handleSubmit(e){
            e.preventDefault();
            if (!text || !day) {
                return alert("Please enter a task and day");               
            }
            onSubmit({ ...task, text, day, reminder });              
       
        }
        return (
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <lable htmlFor="text">Task</lable>
                    <input
                        type="text"
                        id="text"
                        namn="text"
                        placeholder="Add Task"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <lable htmlFor="day">Day & Time</lable>
                    <input
                        type="text"
                        id="day"
                        namn="day"
                        placeholder="Add Day & Time"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    />
                </div>
                <div className=" form-control from-control-check">
                    <lable htmlFor="reminder">Set Reminder</lable>
                    <input
                        type="checkbox"
                        id="reminder"
                        namn="reminder"
                        checked={reminder}
                        onChange={(e) => setReminder(e.target.checked)}
                    />
                </div>
                <Button block type="submit" color="#000">
                    Save Task
                </Button>        
                
                <Button block onClick={onCancel} color="red">
                    Cancel
                </Button>      
            </form>
            
        );
    }
EditTask.propTypes = {
    onSubmit: PropTypes.func.isRequired, 
    onCancel:PropTypes.func.isRequired,
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        day: PropTypes.string,
        reminder: PropTypes.bool.isRequired,       
    }),
};

export default EditTask;