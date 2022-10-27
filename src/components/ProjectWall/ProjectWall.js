import ProjectElement from './ProjectElement'
import styles from './ProjectWall.module.css'
import { useEffect, useState } from 'react'

export default function ProjectWall () {

  const [projectsList,setProjectsList] = useState([]);

  useEffect( () => {
    fetch( "/data/projects/projects.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // store Data in State Data Variable
      setProjectsList(data.projects);
      return data;
    })
    .catch(function (err) {
      console.log(err, " error");
    })
  },[])

  let projects = projectsList.length > 0 && projectsList.map(element => {
    return <ProjectElement title={element.name} text={element.text} link={element.link} gitLink={element.gitLink} techs={element.techs} key={element.name}/>
  })

  return (
    <div>
      <div className={styles.innerContainer}>
      {projects}
      </div>
    </div>
  )
}