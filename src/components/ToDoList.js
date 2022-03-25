import React from "react";
import ToDoCard from "./ToDoCard";
import styles from "../css/ToDoList.module.css";

const ToDoList = ({ data, removeItem, updateItem }) => {
    return (
        <div className={styles.root}>

            <div className={styles.column}>
                <h4>
                    Ongoing
                </h4>
                <div className={styles.list}>
                    {
                        data
                            ? data.filter(item => item.status === 0).length
                                ? data.map(item => item.status === 0 && (
                                    <ToDoCard
                                        key={item.id}
                                        item={item}
                                        removeItem={removeItem}
                                        updateItem={updateItem}
                                    />
                                ))
                                : <p className={styles.loading}>No Data</p>
                            : <p className={styles.loading}>Fetching Data...</p>
                    }
                </div>
            </div>

            <div className={styles.column}>
                <h4>
                    Done
                </h4>
                <div className={styles.list}>
                {
                        data
                            ? data.filter(item => item.status === 1).length
                                ? data.map(item => item.status === 1 && (
                                    <ToDoCard
                                        key={item.id}
                                        item={item}
                                        removeItem={removeItem}
                                        updateItem={updateItem}
                                    />
                                ))
                                : <p className={styles.loading}>No Data</p>
                            : <p className={styles.loading}>Fetching Data...</p>
                    }
                </div>
            </div>

        </div>
    );
};

export default ToDoList;