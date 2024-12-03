"use client";

// ProductGrid.tsx
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ModalDataType } from "./types";
import { useModalContext } from "../context/ModalContext";
import Loading from "./Loading";

const ProductGrid = () => {
  const [recipes, setRecipes] = useState<ModalDataType[]>([]);
  const { openModal } = useModalContext();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) throw new Error("Failed to fetch recipes.");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  if (!recipes.length) return <Loading />;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          recipe={recipe}
          onClick={() => openModal(recipe)}
        />
      ))}
    </section>
  );
};

export default ProductGrid;
