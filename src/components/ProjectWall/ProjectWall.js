import ProjectElement from './ProjectElement'
import styles from './ProjectWall.module.css'

export default function ProjectWall (props) {

  let projects = props.projects.map(element => {
    return <ProjectElement title={element.name} text={element.text} link={element.link} gitLink={element.gitLink}/>
  })

  return (
    <div>
      <div className={styles.innerContainer}>
      {projects}
      </div>
    </div>
  )
}