import { useState } from 'react';
import Clipboard from '../../assets/clipboard.svg';
import styles from './list.module.css';
import { Task } from './task';

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface ListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id:  string) => void;
}

export const List = ({ 
  tasks, 
  onCompleteTask, 
  onDeleteTask 
}: ListProps) => {
  const hasTasks = tasks.length > 0; 
  const completedTasks = tasks.reduce((acc, task) => {
    if(task.isCompleted) return acc + 1;

    return acc;
  }, 0)

  return (
    <div className={styles.container}> 
      <div className={styles.infos}>
        <p>Tarefas criadas <span>{tasks.length}</span></p>
        <p>Concluídas <span>{completedTasks}</span></p>
      </div>

      {
        hasTasks ? (
          <div className={styles.list}>
            {tasks.map(task => (
              <Task 
                id={task.id}
                key={task.id} 
                content={task.content} 
                isCompleted={task.isCompleted} 
                onDeleteTask={onDeleteTask}
                onCompleteTask={onCompleteTask}
              />
            ))}
          </div>
        ) : (
          <div className={styles['list-empty']}>
            <div>
              <img src={Clipboard} alt="Logo de lista" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        )
      }
    </div>
  )
}