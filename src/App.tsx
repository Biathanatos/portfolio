import React from "react";
import Card from "./components/card";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <>
      <Header title="BAGHNOUSSI SALMANE" />
      <main className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Projet 1"
            description="Voici une super carte stylée avec Tailwind CSS."
            link="https://example.com"
          />
          <Card
            title="Projet 2"
            description="Un autre projet bien présenté, avec description et lien."
            link="https://example.com"
          />
          <Card
            title="Projet 3"
            description="Encore un projet cool, présenté dans une carte responsive."
            link="https://example.com"
          />
        </div>
      </main>
    </>
  );
};

export default App;