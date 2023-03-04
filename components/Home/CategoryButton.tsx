import { FC, useState } from "react";

interface CategoryButtonProps {
  name: string;
  isDisabled: boolean;
}

const CategoryButton: FC<CategoryButtonProps> = ({ name, isDisabled }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickToggleCategory = () => {
    if (isDisabled) return;

    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`mt-2 md:mt-4 text-xs md:text-base font-bold  px-2 py-1 rounded-md mr-2 md:mr-4 border-2 ${
        isDisabled
          ? "bg-gray-200 text-gray-50 border-gary-200"
          : "bg-indigo-200 border-indigo-200"
      } ${isClicked ? "border-indigo-400" : ""}`}
      onClick={onClickToggleCategory}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
