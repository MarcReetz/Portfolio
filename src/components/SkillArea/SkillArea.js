import { Stage, Text } from "react-pixi-fiber";
import { useEffect, useState } from "react";
import Line from "./PixiLine";

const width = 600;
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

export default function SkillArea() {
  const [skills, setSkills] = useState([]);

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

  const Texts = skills.map((skill) => {

    const x = skill.fbFactor/100 * width
    const y = height/2

    return (
      <Text
        x={x}
        y={y}
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
      <Line x={0} y={0} x2={600} y2={100} color={0xff0000} />
    </Stage>
  );
}
