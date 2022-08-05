import { CgTrash } from "react-icons/cg";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./TaskCard.module.scss";
import { useState } from "react";

interface Task {
  content: string;
  onDeleteTask: (content: string) => void;
}

export function TaskCard({ content, onDeleteTask }: Task) {
  const [hasFinished, setHasFinished] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleChangeCheckboxStatus() {
    setHasFinished(!hasFinished);
  }

  return (
    <div className={styles.task}>
      {hasFinished ? (
        <div className={styles.finished}>
          <button
            className={styles.checkbox}
            onClick={handleChangeCheckboxStatus}
          >
            <BsFillCheckCircleFill size={24} />
          </button>
          <span>{content}</span>
          <button className={styles.icon} onClick={handleDeleteTask}>
            <CgTrash size={24} />
          </button>
        </div>
      ) : (
        <div className={styles.inProgress}>
          <button
            className={styles.checkbox}
            onClick={handleChangeCheckboxStatus}
          ></button>
          <span>{content}</span>
          <button className={styles.icon} onClick={handleDeleteTask}>
            <CgTrash size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
