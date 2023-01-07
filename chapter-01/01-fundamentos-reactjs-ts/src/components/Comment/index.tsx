import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from '../Avatar'
import styles from './styles.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleComment() {

    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/maykbrito.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time title='11 de Maio às 08:13' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </div>
            <button onClick={handleDeleComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => setLikeCount(prevState => prevState + 1)}>
            <ThumbsUp />
            Aplaudir  <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  ) 
}