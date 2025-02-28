// EducationForm.tsx
import React, { useState } from "react";
import { EducationFormData } from "../types";
import Loader from "./Loader";
import CongratulationsCard from "./CongratulationsCard";

/**
 * EducationForm Component
 * 
 * Collects and submits user education data. 
 * Displays a congratulatory card upon submission.
 */
const EducationForm: React.FC = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState<EducationFormData>({
    institution: "wesOnline",
    level: "100",
    fieldOfStudy: "Chemistry",
    gpa: "",
    interest: "bisMan",
  });

  // State to track loading status
  const [loading, setLoading] = useState<boolean>(false);

  // State to control showing the congratulations card
  const [showCongrats, setShowCongrats] = useState<boolean>(false);

  /**
   * Handles form field changes by updating the state.
   * 
   * @param e - The change event from input/select elements.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  /**
   * Handles form submission, simulating an API call.
   * 
   * @param e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setShowCongrats(true);
    }, 2000);
  };

  if (showCongrats) return <CongratulationsCard/>;

  return (
    <div className="bg-white w-[90%] sm:w-[80%] max-w-[600px] py-10 px-6 rounded-2xl flex flex-col gap-4">
      {/* Progress Bar */}
      <div className="flex gap-6 justify-between">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              className={`h-2 w-full rounded-sm ${
                index === 0 ? "bg-[#0256B2]" : "bg-[#E6EEF7]"
              }`}
            ></span>
          ))}
      </div>

      {/* Form Header */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-semibold">Your Education 🎓</h2>
        <p className="text-sm text-gray-500">
          Tell us about your academic background
        </p>
        <p className="text-sm font-semibold text-[#0256B2]">
          800 WESPoint remaining to unlock ESA
        </p>
      </div>

      {/* Reward Notice */}
      <p className="bg-[#E6EEF7] border-1 border-white text-center font-semibold text-[#0256B2] p-4 sm:p-6 rounded-xl text-sm sm:text-base">
        🎁 Your Reward for this step is 200 WESPoints
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
        {/** Institution Selection */}
        <FormSelect
          label="Name of Institution"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          options={[
            { value: "wesOnline", label: "WESOnline" },
            { value: "hyInitiative", label: "Hy-Initiative" },
          ]}
        />

        {/** Level Selection */}
        <FormSelect
          label="Where are you on your journey?"
          name="level"
          value={formData.level}
          onChange={handleChange}
          options={[
            { value: "100", label: "100 Level" },
            { value: "200", label: "200 Level" },
            { value: "300", label: "300 Level" },
            { value: "400", label: "400 Level" },
          ]}
        />

        {/** Field of Study and GPA */}
        <div className="flex items-center gap-6">
          <FormInput
            label="Field Of Study"
            name="fieldOfStudy"
            value={formData.fieldOfStudy}
            onChange={handleChange}
            placeholder="Chemistry"
          />
          <FormInput
            label="GPA"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            placeholder="------"
          />
        </div>

        {/** Interest Selection */}
        <FormSelect
          label="What areas interest you most?"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          options={[
            { value: "bisMan", label: "Business & Management" },
            { value: "tech", label: "Information & Technology" },
            { value: "engr", label: "Mathematics and Engineering" },
          ]}
        />

        {/** Actions */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="text-md text-black font-semibold hover:ring-2 px-4 py-2 cursor-pointer rounded-md ring-[#0256B2]"
          >
            Skip For Now
          </button>
          <button
            type="submit"
            className="bg-[#0256B2] w-56 cursor-pointer text-white px-4 py-2 rounded-md hover:opacity-90"
          >
            {!loading ? "Continue" : <Loader className="mx-auto" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;

/**
 * Reusable Form Input Component
 */
const FormInput: React.FC<{
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, value, placeholder, onChange }) => (
  <div className="w-full">
    <label className="block text-sm font-medium">
      {label} <span className="text-red-700">*</span>
    </label>
    <input
      type={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="text-[#7F8184] py-3 px-4 bg-white w-full border-1 border-[#EAEAEB] rounded-md"
    />
  </div>
);

/**
 * Reusable Form Select Component
 */
const FormSelect: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}> = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium">
      {label} <span className="text-red-700">*</span>
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border-1 border-[#EAEAEB] rounded-md text-[#7F8184] py-3 px-4 bg-white"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="text-[#0256B2] font-semibold">
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
