import React from "react";
import Card from "./components/card";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <>
      <Header title="BAGHNOUSSI SALMANE" />
      <main className="pt-32 min-h-screen bg-[url('/src/assets/logo.svg')] bg-no-repeat bg-contain bg-top px-6">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Projet 1"
              description="Voici une super carte stylée avec Tailwind CSS."
              link="https://example.com"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;