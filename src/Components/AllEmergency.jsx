import React from "react";

const emergencyNumbers = [
  { number: "999", use: "জরুরি সেবা (পুলিশ, ফায়ার, অ্যাম্বুলেন্স)" },
  { number: "112", use: "জরুরি সেবা (সাধারণ)" },
  { number: "101", use: "ফায়ার ডিপার্টমেন্ট" },
  { number: "100", use: "পুলিশ ডিপার্টমেন্ট" },
  { number: "102", use: "অ্যাম্বুলেন্স সেবা" },
  { number: "103", use: "গ্যাস লিক জরুরি" },
  { number: "104", use: "বিদ্যুৎ জরুরি" },
  { number: "1098", use: "শিশু হেল্পলাইন" },
];

const AllEmergency = () => {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-6">জরুরি নম্বর</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://i.ytimg.com/vi/3BgQqLzl1f0/maxresdefault.jpg"
          alt="জরুরি সেবা"
          className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-5 md:mb-0"
        />
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            {emergencyNumbers.map((emergency, index) => (
              <div
                key={index}
                className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold">{emergency.number}</h3>
                <p className="text-gray-700">{emergency.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmergency;
