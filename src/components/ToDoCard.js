import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "../components";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import styles from "../css/ToDoCard.module.css";

const ToDoCard = ({ item, removeItem, updateItem }) => {
    // State
    const [modalOpen, setModalOpen] = useState(false)

    // Render
    return (
        <>
            <AnimatePresence>
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileTap={{ scale: 1 }}
                    whileHover={{
                        zIndex: 10,
                        scale: 1.02,
                        transition: { duration: .2 },
                    }}
                    onClick={() => setModalOpen(true)}
                    className={styles.card}
                >
                    <p className={styles.title}>
                        {item.title}
                    </p>
                    <p className={styles.description}>
                        {item.description}
                    </p>
                    <hr style={{ opacity: .5 }} />
                    <div className={styles.dateWrapper}>
                        <span>Created Date</span>
                        <div className={styles.date}>
                            <MdDateRange size={15} />&nbsp;
                            <p>{item.createdAt.split(" ")[0]}</p>
                        </div>
                        <div className={styles.date}>
                            <MdAccessTime size={15} />&nbsp;
                            <p>{item.createdAt.split(" ")[1].toString()}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                {modalOpen && (
                    <Modal
                        data={item}
                        removeItem={removeItem}
                        updateItem={updateItem}
                        handleClose={() => setModalOpen(false)}
                        modalOpen={modalOpen}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ToDoCard;