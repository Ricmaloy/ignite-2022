import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './styles/App.module.css';

import './styles/global.css';

const author = {
  avatarUrl: 'http://github.com/diego3g.png',
  name: 'Diego Fernandes',
  role: 'Web Developer'
}

const posts = [
  {
    id: 1,
    author: author,
    content: [
      {type: 'paragraph', value: 'Fala galeraa 👋'}, 
      {type: 'paragraph', value: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', value: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-08-06 20:00:00'),
  }
]

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
  
      <main>
        {posts.map(post => (
          <Post key={post.id} author={post.author} publishedAt={post.publishedAt} content={post.content} />
        ))}
      </main>
    </div>
    </>
  )
}

export default App