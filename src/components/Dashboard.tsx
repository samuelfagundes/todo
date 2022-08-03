import Clipboard from "../assets/Clipboard.png";
import { CreateTask } from "./CreateTask";
import styles from "./Dashboard.module.scss";

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <CreateTask />

      <div className={styles.tasks}>
        <header>
          <span>
            Tarefas criadas <p>0</p>
          </span>
          <span>
            Concluídas <p>0</p>
          </span>
        </header>

        <main>
          <img src={Clipboard} alt="clipboard" />
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </main>
      </div>
    </div>
  );
}
