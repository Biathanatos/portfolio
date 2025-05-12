import React from "react";

interface CardProps {
  title: string;
  description: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <article className="h-[10rem] bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between overflow-hidden">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 truncate">
          {title}
        </h2>
        <p className="text-sm text-gray-600 leading-snug line-clamp-2">
          {description}
        </p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Voir le projet : ${title}`}
          className="mt-2 text-sm font-medium text-blue-600 hover:underline"
        >
          Voir le projet →
        </a>
      )}
    </article>
  );
};

export default Card;