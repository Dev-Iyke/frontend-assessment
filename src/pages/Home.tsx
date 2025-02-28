import React from "react";
import EducationForm from "../components/EducationForm";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-8 p-4">
      <EducationForm />
    </div>
  );
};

export default Home;
