import { Stage, Text } from "react-pixi-fiber";
import { useEffect, useState } from "react";
import PixiRect from "./PixiRect";
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
    backgroundColor: 0x041526,
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

  //get all Positions

  const getPositions = (skills,level, parentName = null) => {
    return skills.reduce((positions, skill) => {
      const x = (skill.fbFactor / 100) * (width - 100) + 50;
      let y = height / 2;
      let otherRelations = [...skill.otherRelations]

      if (skill.heightDiv) {
        y = height / 2 + (height / 100) * skill.heightDiv;
      }

      if (skill.child) {
        positions = positions.concat(getPositions(skill.child,level+1,skill.name))
        console.log("hit")
      }

      return positions.concat({
        x: x,
        y: y,
        name: skill.name,
        otherRelations: otherRelations,
        parent: parentName,
        level: level,
      });
    },[]);
  };

  const positions = getPositions(skills,1)

  console.log(positions)

  //line position
  let lines = positions.reduce((lines, skill) => {
    return lines.concat(
      skill.otherRelations.map((relationName) => {
        const p = positions.find((p) => {
          return p.name === relationName;
        });

        return (
          <PixiLine
            key={skill.name + p.name}
            x={skill.x}
            y={skill.y}
            x2={p.x}
            y2={p.y}
            color={0xff0000}
          />
        );
      })
    );
  }, []);


  lines = lines.concat(positions.reduce((lines,skill) => {
    if(!skill.parent){
      return lines
    }
    const p = positions.find((p) => {
      return p.name === skill.parent;
    });

    return lines.concat(<PixiLine
      key={skill.name + p.name}
      x={skill.x}
      y={skill.y}
      x2={p.x}
      y2={p.y}
      color={0x00ff00}
    />)
  },[]))

  const Texts = positions.map((skill) => {
    const fontSize = 20 - 5 * (skill.level - 1)

    return (
      <Text
        key={skill.name}
        anchor="0.5,0.5"
        x={skill.x}
        y={skill.y}
        text={skill.name}
        style={{
          align: "center",
          fontFamily: "'Roboto Mono', monospace",
          fontSize: fontSize,
          fontWeight: 400,
          fill: ["#00ff99"],
        }}
      />
    );
  });


  const rects = positions.map((skill) => {
    const fontSize = 13 - 5 * (skill.level - 1)
    return (
      <PixiRect
        key={skill.name}
        x={skill.x}
        y={skill.y}
        width={fontSize * skill.name.length}
        height={30}
        fill={0x041526}
      />
    )
  }
  )

  return (
    <Stage options={options} style={style}>
      {lines}
      {rects}
      {Texts}
    </Stage>
  );
}
