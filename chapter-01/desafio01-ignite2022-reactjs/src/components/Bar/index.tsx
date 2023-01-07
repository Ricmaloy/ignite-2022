import Plus from '../../assets/plus.svg';
import styles from './bar.module.css';

interface BarProps {
  inputValue: string;
  onChangeValue: (value: string) => void;
  onCreateTask: () => void;
}

export const Bar = ({ inputValue, onChangeValue, onCreateTask}: BarProps) => {

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        onChange={(ev) => onChangeValue(ev.target.value)}
        value={inputValue}
      />
      <button onClick={onCreateTask}>
        Criar
        <img src={Plus} alt="Adicionar tarefa" />
      </button>
    </div>
  )
}