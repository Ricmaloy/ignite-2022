import { useState } from 'react';
import { v4 } from 'uuid';
import { Bar } from './components/Bar';
import { Header } from './components/Header';
import { List } from './components/List';
import styles from './styles/App.module.css';

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  function handleCreateTask() {
    const newTask = {
      id: v4(),
      content: taskText,
      isCompleted: false,
    }

    setTasks(prevState => [...prevState, newTask]);
    
    setTaskText('');
  }

  function handleDeleteTask(id: string) {
    const newTasksArr = tasks.filter(task => task.id !== id);

    setTasks(newTasksArr);
  }

  function handleCompleteTask(id: string) {
    const newTasksArr = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          isCompleted: true,
        }
      }

      return task;
    });

    setTasks(newTasksArr);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Bar 
            inputValue={taskText} 
            onChangeValue={setTaskText} 
            onCreateTask={handleCreateTask} />
          <List 
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onCompleteTask={handleCompleteTask}
          />
        </div>
      </div>
    </>
  )
}

export default App
