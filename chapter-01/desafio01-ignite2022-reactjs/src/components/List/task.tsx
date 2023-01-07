import Trash from '../../assets/trash.svg';
import styles from './list.module.css';

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export const Task = ({ id, content, isCompleted, onCompleteTask, onDeleteTask }: Task) => {
  return (
    <div className={styles.task}>
      <input type="radio" checked={isCompleted} onChange={() => onCompleteTask(id)} />
      <p className={isCompleted ? styles.done : ''}>
        {content}
      </p>
      <button onClick={() => onDeleteTask(id)}>
        <img src={Trash} alt="Delete task" />
      </button>
    </div>
  )
}