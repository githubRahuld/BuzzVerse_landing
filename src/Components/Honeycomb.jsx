import React, { useState } from "react";
import HoneycombImage from "./HoneycombImage"; // Adjust the path as necessary
import { companies, people } from "../data";

const Honeycomb = () => {
  const [highlightedCompany, setHighlightedCompany] = useState(null);

  const handleCentralImageHover = () => {
    setHighlightedCompany("all"); // Set a special highlight state for all images
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 py-8">
      {/* Companies Section */}
      <div className="honeycomb-companies flex flex-wrap justify-end gap-0 w-full">
        {" "}
        {/* Adjust width for all images to fit around central image */}
        {companies.map((company) => (
          <div
            key={company.id}
            className={`relative w-24 h-24 overflow-hidden border border-black ${
              highlightedCompany === company.id || highlightedCompany === "all"
                ? "opacity-100"
                : "opacity-40"
            }`}
            onMouseEnter={() => setHighlightedCompany(company.id)}
            onMouseLeave={() => setHighlightedCompany(null)}
          >
            <HoneycombImage
              src={company.image}
              alt={company.name}
              highlighted={highlightedCompany}
            />
          </div>
        ))}
      </div>

      {/* Central BuzzVerse Image */}
      <div
        style={{
          clipPath:
            "polygon(0% 25%, 50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%)",
          backgroundColor: "white",
          transition: "opacity 0.3s ease-in-out",
        }}
        className="w-24 h-24"
        onMouseEnter={handleCentralImageHover}
        onMouseLeave={() => setHighlightedCompany(null)}
      >
        <img
          src="/BuzzVerse.svg" // Replace with your buzzVerse image path
          alt="buzzVerse"
          className="w-full h-full object-cover bg"
          style={{
            clipPath:
              "polygon(0% 25%, 50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%)",
            backgroundColor: "white",
          }}
        />
      </div>

      {/* People Section */}
      <div className="honeycomb-people flex flex-wrap gap-0 w-full">
        {" "}
        {/* Adjust width for all images to fit around central image */}
        {people.map((person) => {
          const isHighlighted = Array.isArray(person.companyId)
            ? person.companyId.includes(highlightedCompany)
            : person.companyId === highlightedCompany;

          return (
            <div
              key={person.id}
              className={`relative w-24 h-24 overflow-hidden border border-black ${
                isHighlighted || highlightedCompany === "all"
                  ? "opacity-100"
                  : "opacity-40"
              }`}
              onMouseEnter={() => setHighlightedCompany(person.id)}
              onMouseLeave={() => setHighlightedCompany(null)}
            >
              <HoneycombImage
                src={person.image}
                alt={person.name}
                highlighted={isHighlighted}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Honeycomb;
