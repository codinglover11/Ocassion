import React, { useState } from "react";
import VendorCard from "../Vendores/VendorCard";
import "./VendorPage.css";

import { vendors, topVendors } from "../Vendores/Vendors"; // named imports
function VendorsPage() {
  const [search, setSearch] = useState("");

  const filteredVendors = {};
  Object.keys(vendors).forEach((category) => {
    filteredVendors[category] = vendors[category].filter((vendor) =>
      vendor.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="vendors-container">
      
      <div className="vendors-left">
        <div className="header-search">
          <h2>Search Vendors</h2>
          <input
            type="text"
            placeholder="Search vendors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="vendor-list">
          {Object.keys(filteredVendors).map((category) =>
            filteredVendors[category].length > 0 ? (
              <div key={category}>
                <h3 className="category-title">{category}</h3>
                <div className="card-grid">
                  {filteredVendors[category].map((vendor, i) => (
                    <VendorCard key={i} {...vendor} category={category} />
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="vendors-right">
        <h2 className="top-title">Top Vendors</h2>

        {Object.keys(topVendors).map((category) => (
          <div key={category}>
            <h3 className="category-title">{category}</h3>
            <div className="card-grid">
              {topVendors[category].map((vendor, i) => (
                <VendorCard key={i} {...vendor} category={category} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorsPage;
