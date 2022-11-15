import {createContext, ReactNode, useContext, useState} from "react";
import {Task} from "../Task/Task";

interface TaskProviderProps {
  children: ReactNode;
}

interface TaskUpdateProps {
  taskId: number;
}

interface TaskContextData {
  task: Task[];
  addTask: (id: number, isComplete: false, title: string) => void;
  updateTask: ({taskId}: TaskUpdateProps) => void;
  removeTask: (taskId: number) => void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export function TaskProvider({children}: TaskProviderProps): JSX.Element {
  const [task, setTask] = useState<Task[]>(() => {
    const storagedTask = localStorage.getItem("@TaskStorage:task");

    if (storagedTask) {
      return JSON.parse(storagedTask);
    }

    return [];
  });

  function addTask(id: number, isComplete: false, title: string) {
    try {
      const taskUpdate = {
        id: id,
        isComplete: isComplete,
        title: title,
      };

      const taskUpdated = [...task, taskUpdate];

      setTask(taskUpdated);
      localStorage.setItem("@TaskStorage:task", JSON.stringify(taskUpdated));
    } catch {
      return prompt("error catch");
    }
  }

  function removeTask(taskId: number) {
    try {
      const task_ = [...task];
      const taskToRemove = task_.findIndex((task) => task.id === taskId);

      if (taskToRemove >= 0) {
        task_.splice(taskToRemove, 1);
        setTask(task_);
        localStorage.setItem("@TaskStorage:task", JSON.stringify(task_));
      }
    } catch {
      prompt("Error al Remover el texto");
    }
  }
  const updateTask = async ({taskId}: TaskUpdateProps) => {
    try {
      const task_ = [...task];
      const taskToUpdate = task_.find((task) => task.id === taskId);

      if (taskToUpdate) {
        taskToUpdate.isComplete = !taskToUpdate.isComplete;
        setTask(task_);
        localStorage.setItem("@TaskStorage:task", JSON.stringify(task_));
      } else {
        throw Error();
      }
    } catch {
      prompt("Error al editar la Task");
    }
  };

  return (
    <TaskContext.Provider value={{task, addTask, removeTask, updateTask}}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext(): TaskContextData {
  const context = useContext(TaskContext);
  return context;
}
export default Task;
