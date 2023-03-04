import { FC } from "react";
import CategoryButton from "./CategoryButton";

const Category: FC = () => {
  return (
    <div className="mt-8 mx-8">
      <h1 className="font-bold md:text-2xl">Category</h1>
      <div>
        <CategoryButton name="T-shirt" isDisabled={false} />
        <CategoryButton name="Hoodies" isDisabled={true} />
        <CategoryButton name="Polo shirt" isDisabled={true} />
        <CategoryButton name="Shorts" isDisabled={true} />
        <CategoryButton name="Skirts" isDisabled={true} />
        <CategoryButton name="Jeans" isDisabled={true} />
        <CategoryButton name="Coat" isDisabled={true} />
        <CategoryButton name="Jacket" isDisabled={true} />
        <CategoryButton name="Shoes" isDisabled={true} />
      </div>
    </div>
  );
};

export default Category;
