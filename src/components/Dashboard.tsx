import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import Clipboard from "../assets/Clipboard.png";
import { TaskCard } from "./TaskCard";

import styles from "./Dashboard.module.scss";

export function Dashboard() {
  const [tasks, setTasks] = useState<string[]>(["Task 1", "Task 2", "Task 3"]);
  const [newTask, setNewTask] = useState("");

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task: string) => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.newTask}>
        <form onSubmit={handleSubmitTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button>
            Criar <PlusCircle size={16} />
          </button>
        </form>
      </div>

      <div className={styles.tasks}>
        <header>
          <span>
            Tarefas criadas <p>{tasks.length}</p>
          </span>
          {/* <span>
            Concluídas <p>0</p>
          </span> */}
        </header>

        {tasks.length !== 0 ? (
          tasks.map((task) => {
            return <TaskCard content={task} onDeleteTask={deleteTask} />;
          })
        ) : (
          <main>
            <img src={Clipboard} alt="clipboard" />
            <h1>Você ainda não tem tarefas cadastradas</h1>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </main>
        )}
      </div>
    </div>
  );
}
