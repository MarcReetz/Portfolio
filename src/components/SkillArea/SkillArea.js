import { Stage, Text} from "react-pixi-fiber";
import Line from "./PixiLine"

const width = 600;
const height = 400;
const options = {
  antialias:true,
  backgroundColor: 0x56789a,
  width: width,
  height: height,
};

const style = {
  width: width,
  height: height,
};

export default function SkillArea() {


  return (
    <Stage options={options} style={style}>
      <Text x={0} y={0} text="Hello world!" />
      <Line />
    </Stage>
  );
}
