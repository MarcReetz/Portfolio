/* eslint-disable @typescript-eslint/no-explicit-any */
// not cool FIX! ↑
import React, { useEffect, useState } from "react";
import { SpringEmbedderGraph, Vertex } from "../../services/SpringEmbedder";
import { Stage, Text } from "react-pixi-fiber/index";
import PixiRect from "./PixiRect";
import PixiLine from "./PixiLine";
import styles from "./SkillArea.module.css";

export default function SkillArea() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight || 10,
    width: window.innerWidth || 10,
  });

  const [skills, setSkills] = useState<any>([]);

  const width = (dimensions.width / 100) * 80;
  let height = 500;

  if(width < 500){
    height = 500 + 500 - width * 0.7
  }

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight || 10,
        width: window.innerWidth || 10,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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

  const repelentForce = 600;
  const springForce = 1;
  let springLength = 150;

  if(width > 800){
    springLength = springLength + ((width-800) * 0.05)
  }

  const getPositons = (skills: [], level: number, parent?: Vertex) => {
    return skills.reduce((vertices: Vertex[], skill: any): Vertex[] => {
      const x = (skill.fbFactor / 100) * (width - 100) + 50;
      let y = height / 2;

      if (skill.heightDiv) {
        y = height / 2 + (height / 100) * skill.heightDiv;
      }

      let invisible = false;
      let isFixed = false;

      if (skill.invisible) {
        invisible = true;
      }

      if (skill.isFixed) {
        isFixed = true;
      }

      const vertex = new Vertex(
        x,
        y,
        repelentForce,
        springForce,
        {
          id: skill.name,
          level: level,
          invisible: invisible,
        },
        isFixed
      );

      if (skill.child) {
        vertices = vertices.concat(getPositons(skill.child, level + 1, vertex));
      }

      if (parent) {
        parent.addEdge(vertex, springLength / 2);
      }

      return vertices.concat(vertex);
    }, []);
  };

  const vertices: Vertex[] = getPositons(skills, 1);

  if (skills) {
    skills.forEach((skill: any) => {
      if (skill.otherRelations) {
        const otherRelations = [...skill.otherRelations];
        const vertex = vertices.find((vertex) => {
          return vertex.data.id === skill.name;
        });
        console.log(otherRelations);
        otherRelations.forEach((relation) => {
          const vertex2 = vertices.find((vertex) => {
            return vertex.data.id === relation;
          });
          if (vertex && vertex2) {
            vertex.addEdge(vertex2, springLength);
          }
        });
      }
    });
  }

  console.log(vertices);

  const graph = new SpringEmbedderGraph(
    vertices,
    springForce,
    repelentForce,
    height,
    width
  );
  graph.orderByAlgorithm(1000);

  const Texts = graph.vertices.map((vertex) => {
    const fontSize = 20 - 5 * (vertex.data.level - 1);

    if (vertex.data.invisible) {
      return;
    }

    return (
      <Text
        key={vertex.data.id}
        anchor="0.5,0.5"
        x={vertex.x}
        y={vertex.y}
        text={vertex.data.id}
        style={{
          align: "center",
          fontFamily: "'Roboto Mono', monospace",
          fontSize: fontSize,
          fontWeight: "400",
          fill: ["#75B1F0"],
        }}
      />
    );
  });

  const Rects = graph.vertices.map((vertex) => {
    const fontSize = 13 - 5 * (vertex.data.level - 1);
    if (vertex.data.invisible) {
      return;
    }
    console.log("draws rect");
    return (
      <PixiRect
        key={vertex.data.id}
        x={vertex.x}
        y={vertex.y}
        width={fontSize * vertex.data.id.length}
        height={30}
        fill={0x041526}
      />
    );
  });

  const Lines = graph.vertices.reduce((lines: any, vertex) => {
    if (vertex.edges.length === 0 || vertex.data.invisible) {
      return lines;
    }
    const x = vertex.x;
    const y = vertex.y;

    const result = vertex.edges.map((edge) => {
      if (edge.vertex.data.invisible) {
        return;
      }
      const key = vertex.data.id + edge.vertex.data.id;
      return (
        <PixiLine
          key={key}
          x={x}
          y={y}
          x2={edge.vertex.x}
          y2={edge.vertex.y}
          color={0xe0e1e2}
        />
      );
    });

    return lines.concat(result);
  }, []);

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

  console.log(style);




  return (
    <div>
      <div className={styles.canvasScrollLayer} style={{height:height}}></div>
      <div className={styles.containerStage}>
        <Stage options={options} style={style}>
          {Lines}
          {Rects}
          {Texts}
        </Stage>
      </div>
    </div>
  );
}
