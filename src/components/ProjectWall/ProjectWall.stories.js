import ProjectWall from "./ProjectWall";

export default {
  title: "Project Wall",
  component: ProjectWall
}

const Template = (args)  => <ProjectWall {...args}/>

export const First = Template.bind();

First.args = {
  projects:[{name:"nice project",text:"was fun todo",link:"https://www.google.com"},
  {name:"even nicer project",text:"was even more fun todo",link:"https://www.google.com"},
  {name:"super project",text:"i dont know what to type anmore should use lore ipsum",link:"https://www.google.com"},
  {name:"Lore ipsum",text:"",link:"https://www.google.com"}]
}