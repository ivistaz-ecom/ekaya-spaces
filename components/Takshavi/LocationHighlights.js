"use client";
import { Fragment } from "react";
import { GraduationCap, Building2, ShoppingBag, Train } from "lucide-react";
import Image from "next/image";

export default function NearbyFacilities() {
  const sections = [
    {
      icon: "/takshavi/education.svg",
      marginTopClass: "mt-12",
      title: "EDUCATION",
      data: [
        ["St. Joseph’s Girls PU College", "0.4 km"],
        ["Mt. Carmel PU College", "3.8 km"],
        ["St. Francis Xavier Girls High School", "0.3 km"],
        ["St. Xavier’s Boys School", "2.7 km"],
        ["Clarence High School", "1.5 km"],
        ["St. Aloysius High School", "1.0 km"],
        ["Army Public School", "3.1 km"],
      ],
    },
    {
      icon: "/takshavi/hospital.svg",
      marginTopClass: "mt-10",
      title: "HOSPITALS",
      data: [
        ["Santosh Hospital", "0.8 km"],
        ["Lakeside Medical Centre and Hospital", "1.8 km"],
        ["Sparsh Hospital", "3.8 km"],
        ["Fortis Hospital", "3.3 km"],
        ["Bowring Hospital", "2.0 km"],
        ["Manipal Hospital", "3.2 km"],
        ["Bhagwan Mahaveer Jain Hospital", "2.6 km"],
      ],
    },
    {
      icon: "/takshavi/rail.svg",
      marginTopClass: "mt-14",
      title: "RETAIL/MALLS",
      data: [
        ["Garuda Mall", "3.9 km"],
        ["Westside", "3.9 km"],
        ["UB City Mall", "4.5 km"],
        ["Mantri Square Mall", "6.0 km"],
        ["Orion Mall, Rajajinagar", "8.8 km"],
        ["Orion Avenue", "3.4 km"],
        ["Nexus Mall of Koramangala", "9.0 km"],
      ],
    },
    {
      icon: "/takshavi/metro.svg",
      marginTopClass: "mt-14",
      title: "CONNECTIVITY",
      data: [
        ["Halasuru Metro Station", "3.7 km"],
        ["Trinity Metro Station", "3.4 km"],
        ["Cubbon Park Metro Station", "3.2 km"],
        ["Majestic Metro Station", "6.2 km"],
        ["Vidhana Soudha", "3.6 km"],
        ["MG Road Metro Station", "4.8 km"],
        ["Coles Park Bus Stop", "0.7 km"],
      ],
    },
    {
      icon: "/takshavi/office.svg",
      marginTopClass: "mt-[70px]",
      title: "OFFICE BUILDINGS",
      data: [
        ["Prestige Central", "3.7 km"],
        ["Manipal Centre", "3.0 km"],
        ["HM Geneva House", "3.4 km"],
        ["Prestige Khoday Tower", "3.6 km"],
        ["Prestige Atrium", "3.9 km"],
        ["Safina Plaza", "3.9 km"],
        ["Prestige Trade Tower", "3.9 km"],
      ],
    },
  ];
  
  
  return (
    <>
      <div className="max-w-[80%] mx-auto">
        <h4 className="text-4xl text-black poppins-light pb-6">
          Location Highlights
        </h4>
      </div>

      <div className="bg-[#D5F0F0] min-h-[100vh] lg:py-20 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-[80%] mx-auto h-full">
          {sections.map((section, index) => (
            <Fragment key={section.title}>
              <div className="flex lg:flex-row flex-col items-start md:h-full ">
                {/* Left Column: Icon + Rotated Title */}
                <div className="flex lg:flex-col flex-row lg:items-center lg:justify-center items-end lg:w-20 py-3 lg:gap-10 gap-5 px-5 lg:px-3">
                  <Image
                    src={section.icon}
                    alt={section.title}
                    width={70}
                    height={70}
                  />
                  <span
                    className={`${section.marginTopClass} text-[#fff] bg-[#5CA2B0] text-2xl p-2 tracking-wider lg:rotate-[-90deg] whitespace-nowrap`}
                  >
                    {section.title}
                  </span>
                </div>

                {/* Right Column: Name & Distance + List */}
                <div
                  className={`lg:flex-1 py-5 lg:px-10 px-5 mx-2.5 ${
                    index % 2 === 0 ? "md:border-r md:border-r-[#5CA2B0]" : ""
                  }`}
                >
                  <div className="flex justify-between text-[#5CA2B0] text-xl pb-1 mb-3">
                    <span>Name</span>
                    <span>Distance</span>
                  </div>
                  <ul className="space-y-1">
                    {section.data.map(([name, distance], i) => (
                      <li
                        key={i}
                        className={`flex lg:gap-0 gap-10 justify-between text-[#1D1D1D] last:border-none pb-1`}
                      >
                        <span>{name}</span>
                        <span className="text-[#1D1D1D]">{distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {(index + 1) % 2 === 0 && index !== sections.length - 1 && (
                <div className="col-span-full border-b border-[#5CA2B0]" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
