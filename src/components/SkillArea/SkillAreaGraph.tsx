import React, { useEffect, useState } from "react";
import { SpringEmbedderGraph, Vertex } from "../../services/SpringEmbedder";
import { Stage, Text } from "react-pixi-fiber";
import PixiRect from "./PixiRect";
import PixiLine from "./PixiLine";

export default function SkillArea() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [skills, setSkills] = useState<any>([]);

  const width = dimensions.width;
  const height = 400;

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

  const repelentForce = 10;
  const springForce = 5;
  const springLength = 250;

  const getPositons = (skills: [], level: number, parent?: Vertex) => {
    return skills.reduce((vertices: Vertex[], skill: any): Vertex[] => {
      const x = (skill.fbFactor / 100) * (width - 100) + 50;
      let y = height / 2;

      if (skill.heightDiv) {
        y = height / 2 + (height / 100) * skill.heightDiv;
      }

      const vertex = new Vertex(x, y, repelentForce, springForce, {
        id: skill.name,
        level: level,
      });

      if (skill.child) {
        vertices = vertices.concat(getPositons(skill.child, level + 1, vertex));
      }

      if (parent) {
        parent.addEdge(vertex, springLength);
      }

      return vertices.concat(vertex);
    }, []);
  };

  const vertices: Vertex[] = getPositons(skills, 1);

  const graph = new SpringEmbedderGraph(vertices, springForce, repelentForce);
  graph.orderByAlgorithm(30);

  const Texts = graph.vertices.map((vertex) => {
    const fontSize = 20 - 5 * (vertex.data.level - 1);

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
          fill: ["#00ff99"],
        }}
      />
    );
  });

  const Rects = graph.vertices.map((vertex) => {
    const fontSize = 13 - 5 * (vertex.data.level - 1);
    return (
      <PixiRect
        key={vertex.data.id}
        x={vertex.data.x}
        y={vertex.data.y}
        width={fontSize * vertex.data.id.length}
        height={30}
        fill={0x041526}
      />
    );
  });

  const Lines = graph.vertices.reduce((lines:any, vertex) => {
    if (vertex.edges.length === 0) {
      return lines;
    }
    const x = vertex.x;
    const y = vertex.y;

    const result = vertex.edges.map((edge) => {
        const key = vertex.data.id + edge.vertex.data.id;
        return (
          <PixiLine
            key={key}
            x={x}
            y={y}
            x2={edge.vertex.x}
            y2={edge.vertex.y}
            color={0x00ff00}
          />
        );
      })

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

  return (
    <Stage options={options} style={style}>
      {Texts}
      {Rects}
      {Lines}
    </Stage>
  );
}