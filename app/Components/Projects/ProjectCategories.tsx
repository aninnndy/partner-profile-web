import React, { ReactEventHandler } from "react";

interface ListProps {
  content: string;
  event: ReactEventHandler;
}

const ListComponent: React.FC<ListProps> = ({ content, event }) => {
  return <button onClick={() => event}>{content}</button>;
};

interface ProjectCategoriesProps {
  contentAll: string;
  eventAll: ReactEventHandler;
}

const ProjectCategories: React.FC<ProjectCategoriesProps> = ({
  contentAll,
  eventAll,
}) => {
  return (
    <ul className="bg-white w-[50%] ml-12 rounded-xl px-12 flex flex-col gap-2 py-8">
      <h2 className="text-2xl font-semibold cursor-pointer select-none">
        Project Categories <i className="ri-arrow-down-s-line"></i>
      </h2>
      <ListComponent content={contentAll} event={eventAll} />
    </ul>
  );
};

export default ProjectCategories;
