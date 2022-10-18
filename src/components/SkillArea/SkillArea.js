import { Stage, Text } from "react-pixi-fiber";
import { useEffect, useState } from "react";
import Line from "./PixiLine";

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

  const Texts = skills.map((skill) => {
    const x = (skill.fbFactor / 100) * width;
    let y = height / 2;

    if (skill.heightDiv) {
      y = height / 2 + (height / 100) * skill.heightDiv;
    }

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
