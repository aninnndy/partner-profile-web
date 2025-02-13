"use client";

interface ProjectCategoriesProps {
  content: string;
  value: string;
  checked: boolean;
  changed: () => void;
  id: string;
}

const ProjectCategories: React.FC<ProjectCategoriesProps> = ({
  content,
  value,
  changed,
  checked,
  id,
}) => {
  return (
    <div
      role="button"
      className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
    >
      <label
        htmlFor={id}
        className="flex w-full cursor-pointer items-center px-3 py-2"
      >
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center cursor-pointer"
            htmlFor={id}
          >
            <input
              name="project-radio"
              type="radio"
              checked={checked}
              onChange={changed}
              value={value}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all checked:ring-2 checked:ring-colorSecondary checked:text-colorSecondary"
              id={id}
            />
            <span className="absolute bg-colorSecondary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          </label>
          <label
            className="ml-2 text-colorBlack font-medium cursor-pointer text-sm"
            htmlFor={id}
          >
            {content}
          </label>
        </div>
      </label>
    </div>
  );
};

export default ProjectCategories;
