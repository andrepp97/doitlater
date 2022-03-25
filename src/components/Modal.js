import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import Backdrop from "./ModalBackdrop";
import styles from "../css/ToDoInput.module.css";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

const Modal = ({ handleClose, data, removeItem, updateItem }) => {
    // State
    const [title, setTitle] = useState("")
    const [status, setStatus] = useState(1)
    const [description, setDescription] = useState("")

    // Lifecycle
    useEffect(() => {
        if (data) {
            setTitle(data.title)
            setStatus(data.status)
            setDescription(data.description)
        }
    }, [data])

    // Function
    const handleSave = () => {
        if (title) {
            const obj = {
                id: data.id,
                title,
                description,
                status,
                createdAt: data.createdAt,
            }
            updateItem(obj)
            handleClose()
        }
    }

    // Render
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={e => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                animate="visible"
                initial="hidden"
                exit="exit"
            >
                <div className="modalContent">
                    <div className={styles.inputWrapper}>
                        <span>
                            Title *
                        </span>
                        <input
                            type="text"
                            value={title}
                            className={styles.inputBox}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <span>
                            Description
                        </span>
                        <textarea
                            rows={4}
                            className={styles.inputBox}
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        <label className={styles.checkBox}>
                            <input
                                type="checkbox"
                                checked={status === 0 ? false : true}
                                onChange={(e) => setStatus(e.target.checked ? 1 : 0)}
                            />
                            <span>Done</span>
                        </label>
                    </div>
                    <div className="modalButtons">
                        {
                            !data.status
                                ? (
                                    <button
                                        className="danger"
                                        onClick={() => {
                                            removeItem(data.id)
                                            handleClose()
                                        }}
                                    >
                                        <MdDelete size={18} />
                                    </button>
                                )
                                : <div />
                        }
                        <div className="mainButtons">
                            <button
                                className="secondary"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="main"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Backdrop>
    );
};


export default Modal;