import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";

    function AddTask({ onSubmit }) {
        const [text, setText] = useState("do nothing");
        const [day, setDay] = useState("today");
        const [reminder, setReminder] = useState(false);

        function handleSubmit(e){
            e.preventDefault();
            if (!text || !day) {
                return alert("Please enter a task and day");               
            }
            onSubmit({ text, day, reminder });
            resetForm();
        }

        function resetForm() {
            setText("");
            setDay("");
            setReminder(false);
            
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
                <Button block activ type="submit" color="#000">
                    Save Task
                </Button>              
            </form>
            
        );
    }
AddTask.propTypes = {
    onSubmit: PropTypes.func.isRequired,        
};

export default AddTask;