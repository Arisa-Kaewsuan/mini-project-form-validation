import { useState } from 'react';
import React from "react";
// import Button from "../components/Button";
import movies from "../data/movieLists";
// import { TbMovie } from "react-icons/tb";
// import MovieSurveyFeedbackPage from "./MovieSurveyFeedbackPage";

export default function MovieSurvey() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedMovie: '',
    comment: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'โปรดใส่ชื่อของคุณ';
    }
    
    // Validate email
    if (!formData.email) {
      newErrors.email = 'โปรดใส่อีเมลของคุณ';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง';
    }
    
    // Validate movie selection
    if (!formData.selectedMovie) {
      newErrors.selectedMovie = 'กรุณาเลือกหนังที่คุณชอบ';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      selectedMovie: '',
      comment: ''
    });
    setErrors({});
  };

  const startNewSurvey = () => {
    setIsSubmitted(false);
    handleReset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-gray-100 min-h-screen flex justify-center items-start py-10">
        <div className="w-full max-w-md">
          <div className="bg-purple-600 p-4">
            <h1 className="text-white text-xl flex items-center">
              <span className="mr-2">🎬</span> Movie Survey
            </h1>
          </div>
          
          <div className="bg-green-50 border border-green-200 p-6 rounded-sm">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-green-800 ml-2 text-lg">ส่งแบบสำรวจสำเร็จ!</span>
            </div>
            
            <div className="space-y-2 mb-6">
              <div>
                <span className="font-medium">ชื่อ:</span> {formData.name}
              </div>
              <div>
                <span className="font-medium">อีเมล:</span> {formData.email}
              </div>
              <div>
                <span className="font-medium">หนังที่เลือก:</span> <span className="text-purple-600">{formData.selectedMovie}</span>
              </div>
              {formData.comment && (
                <div>
                  <span className="font-medium">ความคิดเห็น:</span> {formData.comment}
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4">
            <button 
              onClick={startNewSurvey}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded flex justify-center items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              ทำแบบสำรวจใหม่
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start py-10">
      <div className="w-full max-w-md">
        <div className="bg-purple-600 p-4">
          <h1 className="text-white text-xl flex items-center">
            <span className="mr-2">🎬</span> Movie Survey
          </h1>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-sm">
          <div className="mb-4">
            <label className="block mb-1">
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="กรุณากรอกชื่อของคุณ"
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">
              อีเมล <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">
              เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
            </label>
            <div className={`border ${errors.selectedMovie ? 'border-red-500' : 'border-gray-300'} rounded p-4`}>
              {movies.map((movie) => (
                <div key={movie.title} className="mb-2">
                  <label className="flex items-start">
                    <input
                      type="radio"
                      name="selectedMovie"
                      value={movie.title}
                      checked={formData.selectedMovie === movie.title}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                    />
                    <div>
                      <div>{movie.title} ({movie.year})</div>
                      <div className="text-gray-500 text-sm">Director: {movie.director}</div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            {errors.selectedMovie && (
              <p className="text-red-500 text-sm mt-1">{errors.selectedMovie}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label className="block mb-1">
              ความคิดเห็นเกี่ยวกับหนัง
            </label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
              className="w-full p-2 border border-gray-300 rounded h-24"
            />
          </div>
          
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 py-2 px-4 border border-gray-300 rounded flex justify-center items-center hover:bg-gray-50"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              รีเซ็ต
            </button>
            <button
              type="submit"
              className="flex-1 bg-purple-600 text-white py-2 px-4 rounded flex justify-center items-center hover:bg-purple-700"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              ส่งแบบสำรวจ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
