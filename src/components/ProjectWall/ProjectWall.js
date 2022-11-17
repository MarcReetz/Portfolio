import ProjectElement from './ProjectElement'
import styles from './ProjectWall.module.css'
import { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

export default function ProjectWall () {

  const [projectsList,setProjectsList] = useState([]);
  const { i18n } = useTranslation()

  useEffect( () => {
    let url
    if(i18n.language === 'de'){
      url = ("/data/projects/de/projects.json")
    }else {
      url = ("/data/projects/projects.json")
    }
    fetch(url)
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
  },[i18n.language])

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