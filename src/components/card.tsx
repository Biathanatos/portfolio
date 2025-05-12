import React from "react";

interface CardProps {
  title: string;
  description: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <article className="h-[10rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col justify-between overflow-hidden">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1 truncate">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug line-clamp-2">
          {description}
        </p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Voir le projet : ${title}`}
          className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Voir le projet →
        </a>
      )}
    </article>
  );
};

export default Card;