import ProjectListItem from "./ProjectListItem";
import portfolioCards from "../../constants/portfolioCards";

export default function ProjectList({ selected }) {
  const filteredProjects = portfolioCards.filter(
    (item) => selected === 'All' || item.category === selected
  );

  const listItems = filteredProjects.map((project, index) => (
    <ProjectListItem src={project.img} key={index} />
  ));

  return <ul className="project-list">{listItems}</ul>
}