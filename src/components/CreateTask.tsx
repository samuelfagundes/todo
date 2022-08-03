import { PlusCircle } from "phosphor-react";
import styles from "./CreateTask.module.scss";

export function CreateTask() {
  return (
    <div className={styles.newTask}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}
