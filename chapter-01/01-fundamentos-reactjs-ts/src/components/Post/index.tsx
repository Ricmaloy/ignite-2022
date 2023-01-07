import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  value: string;
};

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({author, publishedAt, content}: PostProps){
  const [comments, setComments] = useState(['Post muito bacana hein ?!']);
  const [newComment, setNewComment] = useState('');

  const publishDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDareRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateCommentary(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    console.log(event);

    event.target.setCustomValidity('Esse campo é obrigatório')
  }
  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDareRelativeToNow}</time>
      </header>

      <div className={styles.content}>
       {
        content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.value} >{line.value}</p>
          }

          return <p key={line.value} >👉 <a href={line.value}>{line.value}</a></p> 
            
        })
       }
      </div>

      <form onSubmit={handleCreateCommentary} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newComment}
          onInvalid={handleNewCommentInvalid}
          required
        >

        </textarea>
        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => (
            <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          ))
        }
        
      </div>
    </article>
  )
}