"use client";

import { useState } from "react";

type CityData = {
  state: string;
  cities: string[];
};

const cityList: CityData[] = [
  {
    state: "Andhra Pradesh",
    cities: ["Visakhapatnam", "Vijayawada", "Guntur"],
  },
  {
    state: "Assam",
    cities: ["Guwahati", "Dibrugarh"],
  },
  {
    state: "Bihar",
    cities: ["Patna"],
  },
  {
    state: "Chhattisgarh",
    cities: ["Raipur"],
  },
  {
    state: "Goa",
    cities: ["Panaji"],
  },
  {
    state: "Gujarat",
    cities: ["Ahmedabad", "Surat", "Vadodara"],
  },
  {
    state: "Haryana",
    cities: ["Faridabad", "Gurugram"],
  },
  {
    state: "Himachal Pradesh",
    cities: ["Shimla"],
  },
  {
    state: "Jharkhand",
    cities: ["Ranchi"],
  },
  {
    state: "Karnataka",
    cities: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi–Dharwad"],
  },
  {
    state: "Kerala",
    cities: ["Thiruvananthapuram", "Kochi"],
  },
  {
    state: "Madhya Pradesh",
    cities: ["Indore", "Bhopal"],
  },
  {
    state: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur"],
  },
  {
    state: "Odisha",
    cities: ["Bhubaneswar"],
  },
  {
    state: "Punjab",
    cities: ["Ludhiana", "Mohali"],
  },
  {
    state: "Rajasthan",
    cities: ["Jaipur"],
  },
  {
    state: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Erode", "Vellore"],
  },
  {
    state: "Telangana",
    cities: ["Hyderabad", "Warangal"],
  },
  {
    state: "Uttar Pradesh",
    cities: ["Lucknow", "Kanpur", "Ghaziabad", "Noida"],
  },
  {
    state: "Uttarakhand",
    cities: ["Dehradun"],
  },
  {
    state: "West Bengal",
    cities: ["Kolkata"],
  },
];

const CitySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = cityList
    .map((item) => ({
      state: item.state,
      cities: item.cities.filter((city) =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((item) => item.cities.length > 0);

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col items-center justify-center">
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl text-center">
          Participating Cities
        </h2>
        <p className="mb-6 text-base font-medium text-body-color text-center max-w-2xl">
          Check if your city is participating in the nGreen India Challenge. 
          We are constantly expanding to new locations!
        </p>
        <div className="relative w-full max-w-[500px]">
          <input
            type="text"
            placeholder="Search for your city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:bg-[#2C303B]"
          />
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-body-color">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0002 17.5831L14.7777 13.3606C15.9392 11.967 16.581 10.2223 16.5802 8.41641C16.5802 6.23074 15.7292 4.17541 14.1837 2.62991C12.6382 1.08441 10.5829 0.233398 8.3972 0.233398C6.21153 0.233398 4.1562 1.08441 2.6107 2.62991C1.0652 4.17541 0.214188 6.23074 0.214188 8.41641C0.214188 10.6021 1.0652 12.6574 2.6107 14.2029C4.1562 15.7484 6.21153 16.5994 8.3972 16.5994C10.2031 16.6002 11.9479 15.9584 13.3415 14.7969L17.564 19.0194C17.7552 19.2106 18.0061 19.3061 18.2568 19.3061C18.5076 19.3061 18.7584 19.2106 18.9496 19.0194C19.3321 18.6369 19.3321 18.0163 19.0002 17.5831ZM2.04252 8.41641C2.04252 4.91258 4.89335 2.06173 8.3972 2.06173C11.9011 2.06173 14.7519 4.91258 14.7519 8.41641C14.7519 11.9202 11.9011 14.7711 8.3972 14.7711C4.89335 14.7711 2.04252 11.9202 2.04252 8.41641Z"
                fill="currentcolor"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-one dark:bg-dark"
            >
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                {item.state}
              </h3>
              <ul className="space-y-2">
                {item.cities.map((city, cIndex) => (
                  <li
                    key={cIndex}
                    className="flex items-center text-base font-medium text-body-color"
                  >
                    <span className="mr-2 flex h-2 w-2 rounded-full bg-primary"></span>
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="col-span-full py-10 text-center">
            <h3 className="text-xl font-bold text-black dark:text-white">
              No cities found
            </h3>
            <p className="text-body-color">
              Try searching for a different city or state (indirectly by city).
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CitySearch;
