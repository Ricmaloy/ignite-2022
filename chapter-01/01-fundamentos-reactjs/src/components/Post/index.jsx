import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.css'

export function Post({author, publishedAt, content}){
  const [comments, setComments] = useState(['Post muito bacana hein ?!']);
  const [newComment, setNewComment] = useState('');

  const publishDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDareRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateCommentary(event) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event) {
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