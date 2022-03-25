import React from "react";
import ToDoCard from "./ToDoCard";
import styles from "../css/ToDoList.module.css";

// Function
const filterAndSort = (data, type) => {
    let temp = type === "desc" ? data.filter(item => item.status === 1) : data.filter(item => item.status === 0)

    let sorted = temp.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })

    if (type === "desc") sorted.reverse()

    return sorted
}

// Component
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
                            ? filterAndSort(data, "asc").length
                                ? filterAndSort(data, "asc").map(item => item.status === 0 && (
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
                            ? filterAndSort(data, "desc").length
                                ? filterAndSort(data, "desc").map(item => item.status === 1 && (
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