import React, { useState } from "react";
import SkillIcon from "./SkillIcon";
import SkillsJson from "./../../../public/techRelations/techSkills.json";

export default function SkillWall() {
  const [skills, setSkills] = useState(SkillsJson.icons);

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

  let SkillIcons = skills.map((element) => {
    return <SkillIcon icon={element} onClick={onClick} key={element.name} />;
  });

  return <>{SkillIcons}</>;
}
