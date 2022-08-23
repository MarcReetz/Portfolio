import ProjectWall from "./ProjectWall";

export default {
  title: "Project Wall",
  component: ProjectWall
}

const Template = (args)  => <ProjectWall {...args}/>

export const First = Template.bind();

First.args = {
  projects:[{name:"nice project",text:"was fun todo"},
  {name:"even nicer project",text:"was even more fun todo"},
  {name:"super project",text:"i dont know what to type anmore should use lore ipsum"},
  {name:"Lore ipsum",text:""}]
}