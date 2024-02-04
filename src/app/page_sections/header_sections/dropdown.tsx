export default function Dropdown({
  parentDivClassName,
  trigger,
  triggerFunction,
  dropdownDivClassName,
  contents,
  contentsFunctions,
  contentsClassName,
}: {
  parentDivClassName: string;
  trigger: { name: string; className: string };
  triggerFunction: () => void;
  dropdownDivClassName: string;
  contents: { name: string; className?: string }[];
  contentsFunctions: ((e?: React.MouseEvent<HTMLButtonElement>) => void)[];
  contentsClassName: string;
}) {
  return (
    <div className={`relative ${parentDivClassName}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          triggerFunction();
        }}
        className={`${trigger.className}`}
      >
        {trigger.name}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className={`${dropdownDivClassName}`}>
        <ul className="py-2">
          {contents.map((content, index) => (
            <li key={index}>
              <button
                onClick={(e) => contentsFunctions[index](e)}
                className={`${contentsClassName} ${content.className ?? ""}`}
              >
                {content.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
