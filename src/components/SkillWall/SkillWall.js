import { useEffect, useState } from "react";
import SkillIcon from "./SkillIcon";
import styles from "./SkillWall.module.css"
import { useTranslation } from "react-i18next";

export default function SkillWall() {

  const { t } = useTranslation(["translation","skills"]);
  const [skills, setSkills] = useState([]);
  const [selected, setSelected] = useState(false);
  let title = "title";

  useEffect( () => {
    fetch( "/data/techRelations/techSkills.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // store Data in State Data Variable
      setSkills(data.icons);
      return data;
    })
    .catch(function (err) {
      console.log(err, " error");
    })
  },[])


  const onClick = (skill) => {
    let skillsC = skills.map((element) => {
      if (skill.name === element.name) {
        return { ...element, relations: 1 };
      } else {
        return { ...element, relations: 0 };
      }
    });

    relationsCheck(skill.name, 2, skillsC);
    setSkills(skillsC);
    setSelected(true);
  };

  const relationsCheck = (name, level, skillsC) => {
    let skill = skills.find((element) => element.name === name);
    if (skill) {
      const otherRelations = skill.otherRelations;

      skillsC.forEach((element) => {
        if (otherRelations.includes(element.name) && level === 2) {
          element.relations = 3;
        }
      });
    }

    if (level >= 4) return;
    for (let i = 0; i < skills.length; i++) {
      if (skills[i].childOff.includes(name)) {
        skillsC[i].relations = level;
        relationsCheck(skills[i].name, level + 1, skillsC);
      }
    }
  };

  let SkillIcons = skills.length > 0 && skills.map((element) => {
    return <SkillIcon icon={element} onClick={onClick} key={element.name} />;
  });

  if(selected){
    skills.forEach(element => {if(element.relations === 1){title = element.name}});
  }

  const description = (<><h3>{title}</h3> <p className={styles.descriptionText}>{t(title.toLowerCase(),{ns: "skills"})}</p></>);
  const clickPrompt = (<div className={styles.clickPromptLayout}><i className="fa-solid fa-arrow-up"></i><h3>{t("click_prompt_skills")}</h3></div>);
  

  return (<div>
    <div className={styles.container}>
      {SkillIcons}
    </div>
    <div className={styles.container}>
      {selected ? description : clickPrompt}
    </div>
  </div>);
}
