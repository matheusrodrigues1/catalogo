import { Product } from "./types";

interface CategoryFilterProps {
  products: Product[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({
  products,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  // Extrai todas as categorias únicas dos produtos
  const categories = Array.from(
    new Set(products.map((product) => product.category).filter(Boolean))
  ) as string[];

  return (
    <div className="flex flex-wrap gap-2 mb-6 justify-center">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full ${
          !selectedCategory
            ? "bg-blue-500 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}