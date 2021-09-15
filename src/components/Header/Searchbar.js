import React from "react";

const Searchbar = () => {
  return (
    <div className="search-container">
      <input type="search" placeholder="Search here..." />
      <svg viewBox="5 5 14 14" className="search-svg">
        <path
          fill="currentColor"
          d="M15.683 14.6l3.265 3.265a.2.2 0 010 .282l-.8.801a.2.2 0 01-.283 0l-3.266-3.265a5.961 5.961 0 111.084-1.084zm-4.727 1.233a4.877 4.877 0 100-9.754 4.877 4.877 0 000 9.754z"
        ></path>
      </svg>
    </div>
  );
};

export default Searchbar;
