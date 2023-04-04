import styles from '../styles/Task.module.css'

export default function Task(props) {
  return (
    <div className={styles.taskCard}>
      <img src="https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Lawn Mowing" width="175" height="130"></img>
      <h1>{props.name}Lawn Mowing</h1>
      <h3>Rockland, ON</h3>
      <p>{props.description}I am looking to have someone cut my grass while I am away for the week. Front and back yard, medium size.</p>
      <p>More Info</p>
      <>fav</>
      <>{props.status}</>
    </div>
  )
} 