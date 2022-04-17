import React, { useState } from "react";
import styles from "../css/ToDoInput.module.css";

// STATIC FUNCTION
const generateDateTime = () => {
    let d = new Date();
    let datestring = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes();
    return datestring;
}

// THE COMPONENT
const ToDoInput = (props) => {
    // State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Functions
    const handleChange = (value) => {
        setTitle(value);
    };

    const addItem = () => {
        if (title) {
            props.addItem({
                id: props.data.length ? props.data[props.data.length - 1].id + 1 : 1,
                title,
                description,
                status: 0,
                createdAt: generateDateTime(),
            });
            setTitle("");
            setDescription("");
        }
    }

    // Render
    return (
        <div className={styles.root}>

            <h2 className={styles.inputTitle}>
                Do it Later
            </h2>

            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    value={title}
                    placeholder="Title *"
                    className={styles.inputBox}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <textarea
                    rows={4}
                    placeholder="Description"
                    className={styles.inputBox}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <div className={styles.buttonWrapper}>
                    <button
                        onClick={() => addItem()}
                        className={styles.inputButton}
                    >
                        Add
                    </button>
                </div>
            </div>


        </div>
    );
};
export default ToDoInput;