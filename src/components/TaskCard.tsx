import { CgTrash } from "react-icons/cg";
import { BsFillCheckCircleFill } from "react-icons/bs";

import styles from "./TaskCard.module.scss";

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function TaskCard({
  id,
  content,
  isCompleted,
  onDeleteTask,
  onCompleteTask,
}: Task) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id);
  }

  return (
    <div className={styles.task}>
      {isCompleted ? (
        <div className={styles.finished}>
          <button className={styles.checkbox} onClick={handleCompleteTask}>
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
            onClick={handleCompleteTask}
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
