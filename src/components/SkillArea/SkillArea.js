import { Stage, Text } from "react-pixi-fiber";
import { useEffect, useState } from "react";
import Line from "./PixiLine";
import PixiLine from "./PixiLine";

export default function SkillArea() {
  const [skills, setSkills] = useState([]);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const width = dimensions.width;
  const height = 400;
  const options = {
    antialias: true,
    backgroundColor: 0x56789a,
    width: width,
    height: height,
  };

  const style = {
    width: width,
    height: height,
  };

  useEffect(() => {
    fetch("/data/techRelations/techSkillsArea.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setSkills(data.skills);
        return data;
      })
      .catch(function (err) {
        console.log(err, " error");
      });
  }, []);

  const positions = skills.map((skill) => {
    const x = (skill.fbFactor / 100) * width;
    let y = height / 2;

    if (skill.heightDiv) {
      y = height / 2 + (height / 100) * skill.heightDiv;
    }

    return {
      x:x,
      y:y,
      name:skill.name,
      otherRelations: skill.otherRelations
    };
  });

  const lines = positions.reduce((lines,skill) => {
    return lines.concat(skill.otherRelations.map((relationName) => {
      const p = positions.find(p => {
        return p.name === relationName;
      })

      return <PixiLine key={skill.name + p.name} x={skill.x} y={skill.y} x2={p.x} y2={p.y} color={0xff0000}/>
    }))
  },[])

  const Texts = positions.map((skill) => {

    return (
      <Text
        key={skill.name}
        anchor="0.5,0.5"
        x={skill.x}
        y={skill.y}
        text={skill.name}
        style={{
          align: "center",
          fontFamily: "Helvetica, sans-serif",
          fontSize: 30,
          fontWeight: 400,
          fill: ["#00ff99"],
        }}
      />
    );
  });

  return (
    <Stage options={options} style={style}>
      {Texts}
      {lines}
      <Line x={0} y={0} x2={600} y2={100} color={0xff0000} />
    </Stage>
  );
}
