import React, { useState } from "react";
import { EducationFormData } from "../types";
import Loader from "./Loader";
import CongratulationsCard from "./CongratulationsCard";

const EducationForm: React.FC = () => {
  const [formData, setFormData] = useState<EducationFormData>({
    institution: "wesOnline",
    level: '100',
    fieldOfStudy: "Chemistry",
    gpa: "",
    interest: "bisMan",
  });
  const [loading, setLoading] = useState<boolean>(false)
  const [showCongrats, setShowCongrats] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      setLoading(false)
      setShowCongrats(true)
    },2000)
    console.log("Form Submitted", formData);
  };

  return (
    <>
    {!showCongrats ? <div className="bg-white w-[90%] sm:w-[80%] max-w-[600px] py-10 px-6 rounded-2xl flex flex-col gap-4">
      {/* Dummy progress bar */}
      <div className="flex gap-6 justify-between">
        <span className="h-2 w-full rounded-sm bg-[#0256B2]"></span>
        <span className="h-2 w-full rounded-sm bg-[#E6EEF7]"></span>
        <span className="h-2 w-full rounded-sm bg-[#E6EEF7]"></span>
        <span className="h-2 w-full rounded-sm bg-[#E6EEF7]"></span>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-semibold ">Your Education 🎓</h2>
        <p className="text-sm text-gray-500">
          Tell us about your academic background
        </p>
        <p className="text-sm font-semibold text-[#0256B2]">
          800 WESPoint remaining to unlock ESA
        </p>
      </div>

      <p className="bg-[#E6EEF7] border-1 border-white text-center font-semibold text-[#0256B2] p-4 sm:p-6 rounded-xl text-sm sm:text-base">
        🎁 Your Reward for this step is 200 WESPoints
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 mt-4"
      >
      {/* Institution */}
      <div>
        <label className="block text-sm font-medium">
          Name of Institution <span className="text-red-700">*</span>
        </label>
        <select 
          defaultValue={formData.institution}
          onChange={handleChange} 
          name="institution" 
          id="institution"
          required
          className="w-full border-1 border-[#EAEAEB] rounded-md text-[#7F8184] py-3 px-4 bg-white"
        >
          <option className="text-[#0256B2] font-semibold" value="wesOnline">WESOnline</option>
          <option className="text-[#0256B2] font-semibold" value="wesOnline">Hy-Initiative</option>
        </select>
      </div>

      {/* Level */}
      <div>
        <label className="block text-sm font-medium">
          Where are you on your journey? <span className="text-red-700">*</span>
        </label>
        <select 
          value={formData.level}
          onChange={handleChange} 
          name="level" 
          id="level"
          required
          className="text-[#7F8184] py-3 px-4 bg-white w-full border-1 border-[#EAEAEB] rounded-md"
        >
          <option className="text-[#0256B2] font-semibold" value="100">100 Level</option>
          <option className="text-[#0256B2] font-semibold" value="200">200 Level</option>
          <option className="text-[#0256B2] font-semibold" value="300">300 Level</option>
          <option className="text-[#0256B2] font-semibold" value="400">400 Level</option>
        </select>
      </div>

      {/* Field of Study */}
      <div className="flex items-center gap-6">
        <div className="w-full">
          <label className="block text-sm font-medium">
            Field Of Study <span className="text-red-700">*</span>
          </label>
          <input
            type="fieldOfStudy"
            name="fieldOfStudy"
            defaultValue={formData.fieldOfStudy}
            onChange={handleChange}
            placeholder="Chemistry"
            required
            className="text-[#7F8184] py-3 px-4 bg-white w-full border-1 border-[#EAEAEB] rounded-md"
          />
        </div>

        {/* GPA */}
        <div className="w-full">
          <label className="block text-sm font-medium">
            GPA <span className="text-red-700">*</span>
          </label>
          <input
            type="gpa"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            placeholder="------"
            required
            className="text-[#7F8184] font-semibold py-3 px-4 bg-white w-full border-1 border-[#EAEAEB] rounded-md"
          />
        </div>
      </div>

      {/* Interest */}
      <div>
        <label className="block text-sm font-medium">
          What areas interest you most? <span className="text-red-700">*</span>
        </label>
        <select 
          defaultValue={formData.interest}
          onChange={handleChange} 
          name="interest" 
          id="interest"
          required
          className="text-[#7F8184] w-full py-3 px-4 bg-white border-1 border-[#EAEAEB] rounded-md"
        >
          <option className="text-[#0256B2] font-semibold" value='bisMan'>Business & Management</option>
          <option className="text-[#0256B2] font-semibold" value='tech'>Information & Technology</option>
          <option className="text-[#0256B2] font-semibold" value='engr'>Mathematics and Engineering</option>
        </select>
      </div>

      <div className="flex justify-between mt-4">
        <button type="button" className="text-md text-black font-semibold hover:ring-2 px-4 py-2 cursor-pointer rounded-md ring-[#0256B2]">
          Skip For Now
        </button>
        <button
          type="submit"
          className="bg-[#0256B2] w-56 cursor-pointer text-white px-4 py-2 rounded-md hover:opacity-90"
        >
          {!loading ? 'Continue' : <Loader className="mx-auto" />}
        </button>
      </div>
    </form>
    </div> :
    <CongratulationsCard />}
    </>
  );
};

export default EducationForm;
