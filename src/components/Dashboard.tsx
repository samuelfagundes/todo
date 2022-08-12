import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import Clipboard from "../assets/Clipboard.png";
import { TaskCard } from "./TaskCard";

import styles from "./Dashboard.module.scss";

type Interface = {
  id: string;
  content: string;
  hasCompleted: boolean;
};

export function Dashboard() {
  const [tasks, setTasks] = useState<Interface[]>([
    { id: uuidv4(), content: "task1", hasCompleted: false },
    { id: uuidv4(), content: "task2", hasCompleted: false },
    { id: uuidv4(), content: "task3", hasCompleted: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault();
    const newTaskObject = {
      id: uuidv4(),
      content: newTask,
      hasCompleted: false,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function deleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function completeTask(taskId: string) {
    const newTaskList = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, hasCompleted: !task.hasCompleted };
      }
      return task;
    });
    setTasks(newTaskList);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  const tasksFinished = tasks.filter((task) => {
    return task.hasCompleted === true;
  });

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
            Tarefas criadas <p>{tasks?.length}</p>
          </span>
          <span>
            Concluídas{" "}
            <p>
              {tasksFinished.length} de {tasks.length}
            </p>
          </span>
        </header>

        {tasks?.length !== 0 ? (
          tasks?.map((task: any) => {
            return (
              <TaskCard
                key={task.id}
                id={task.id}
                isCompleted={task.hasCompleted}
                content={task?.content}
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            );
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
