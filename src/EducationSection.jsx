import React from 'react';

const EducationSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="mb-12 lg:mb-0">
            <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-800 p-6 flex items-center justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/RUET_logo.svg/1200px-RUET_logo.svg.png" alt="RUET Logo" className="h-16 w-auto mb-4" />
              <div className="ml-4">
                <h3 className="text-2xl font-bold mb-2">Rajshahi University of Engineering & Technology (RUET)</h3>
                <p className="text-lg mb-2">Bachelor of Science in Mechatronics Engineering</p>
                <p className="text-lg mb-2">Current Year: 2nd Year</p>
                <p className="text-lg mb-2">Location: Rajshahi, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-800 p-6 flex items-center justify-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvRLTYJyvCoMNe8PGfe49LvbGapjLXLuPAw&s" alt="Adamjee Cantonment College Logo" className="h-16 w-auto mb-4" />
              <div className="ml-4">
                <h3 className="text-2xl font-bold mb-2">Adamjee Cantonment College</h3>
                <p className="text-lg mb-2">Higher Secondary Certificate (HSC)</p>
                <p className="text-lg mb-2">Year: 2021</p>
                <p className="text-lg mb-2">Result: 5.00 (GPA)</p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-800 p-6 flex items-center justify-center">
              <img src="https://ppimsc.edu.bd/media/pages/LogoCollege.jpg" alt=" (PPIMSC) Logo" className="h-16 w-auto mb-4" />
              <div className="ml-4">
                <h3 className="text-2xl font-bold mb-2">President Prof. Dr. Iajuddin Ahmed Residential Model School & College (PPIMSC)</h3>
                <p className="text-lg mb-2">Secondary School Certificate (SSC)</p>
                <p className="text-lg mb-2">Year: 2019</p>
                <p className="text-lg mb-2">Result: 5.00 (GPA)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
