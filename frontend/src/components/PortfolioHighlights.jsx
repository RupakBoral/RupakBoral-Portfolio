import ProjectCard from "./ProjectCard";
import projects from "../utils/projects";

const PortfolioHighlights = () => {
  return (
    <div className="flex flex-col space-y-10">
      <p className="reveal-up text-4xl font-semibold text-zinc-200 md:text-left text-center">
        My Portfolio Highlights
      </p>
      <div className="grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 gap-x-3 gap-y-5">
        {projects.map((item, index) => (
          <ProjectCard
            image={item.imgSrc}
            name={item.name}
            stacks={item.stacks}
            link={item.projectLink}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioHighlights;
