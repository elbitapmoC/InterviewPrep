// Card.tsx
import React from "react";
import Image from "next/image";
import { ModalDataType } from "./types";
import Button from "./Button";

type CardProps = {
  recipe: ModalDataType;
  onClick: () => void;
};

const Card = ({ recipe, onClick }: CardProps) => {
  return (
    <article className="flex flex-col justify-between border border-gray-400 w-full rounded-lg p-4 shadow-lg bg-card text-card-foreground">
      <div>
        <figure className="w-full h-48 relative">
          <Image
            src={recipe.image}
            alt={`Image of ${recipe.name}`}
            fill
            sizes="(max-width: 640px) 100vw, 25vw"
            className="object-cover rounded-lg"
          />
        </figure>
        <h3 className="mt-4 text-lg font-semibold">{recipe.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Prep Time: {recipe.prepTimeMinutes} min
        </p>
        <p className="text-sm text-muted-foreground">
          Rating: {recipe.rating}/5
        </p>
      </div>
      <footer className="mt-4 flex justify-center">
        <Button onClick={onClick} text="View Recipe" />
      </footer>
    </article>
  );
};

export default Card;
