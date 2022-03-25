import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { initialList, addItem, removeItem, updateItem } from "./redux/reducer";
import { ToDoInput, ToDoList } from "./components";

// MAP STATE
const mapStateToProps = (state) => {
    return {
        toDoList: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initialList: (arr) => dispatch(initialList(arr)),
        addItem: (obj) => dispatch(addItem(obj)),
        removeItem: (id) => dispatch(removeItem(id)),
        updateItem: (obj) => dispatch(updateItem(obj)),
    };
};

// THE COMPONENT
const App = (props) => {
    // Get Data
    const getInitialList = useCallback(async () => {
        const result = await fetch(process.env.REACT_APP_URL)
        const data = await result.json()
        props.initialList(data)
    }, [props.initialList])

    // Lifecycle
    useEffect(() => {
        getInitialList()
    }, [getInitialList])

    // Render
    return (
        <div className="container">
            <ToDoInput
                data={props.toDoList}
                addItem={props.addItem}
            />
            <ToDoList
                data={props.toDoList}
                removeItem={props.removeItem}
                updateItem={props.updateItem}
            />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);