import React, { ReactEventHandler } from "react";

interface ListProps {
  content: string;
  event: ReactEventHandler;
  color: string;
}

const ListComponent: React.FC<ListProps> = ({ content, event, color }) => {
  return (
    <button
      onClick={event}
      className={`px-4 hover:bg-colorPrimary py-2 w-full font-medium text-colorBlack flex justify-start items-start rounded-full hover:text-white ${color}`}
    >
      {content}
    </button>
  );
};

interface ProjectCategoriesProps {
  contentAll: string;
  eventAll: ReactEventHandler;
  colorAll: string;
  contentFirst: string;
  eventFirst: ReactEventHandler;
  colorFirst: string;
  contentSecond: string;
  eventSecond: ReactEventHandler;
  colorSecond: string;
  contentThird: string;
  eventThird: ReactEventHandler;
  colorThird: string;
  contentFour: string;
  eventFour: ReactEventHandler;
  colorFour: string;
  contentFive: string;
  eventFive: ReactEventHandler;
  colorFive: string;
}

const ProjectCategories: React.FC<ProjectCategoriesProps> = ({
  contentAll,
  eventAll,
  colorAll,
  contentFirst,
  eventFirst,
  colorFirst,
  contentSecond,
  eventSecond,
  colorSecond,
  contentThird,
  eventThird,
  colorThird,
  contentFour,
  eventFour,
  colorFour,
  contentFive,
  eventFive,
  colorFive,
}) => {
  return (
    <>
      <ListComponent content={contentAll} event={eventAll} color={colorAll} />
      <ListComponent
        content={contentFirst}
        event={eventFirst}
        color={colorFirst}
      />
      <ListComponent
        content={contentSecond}
        event={eventSecond}
        color={colorSecond}
      />
      <ListComponent
        content={contentThird}
        event={eventThird}
        color={colorThird}
      />
      <ListComponent
        content={contentFour}
        event={eventFour}
        color={colorFour}
      />
      <ListComponent
        content={contentFive}
        event={eventFive}
        color={colorFive}
      />
    </>
  );
};

export default ProjectCategories;
