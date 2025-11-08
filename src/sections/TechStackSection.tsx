import { useState, useRef } from "react";
import TechStackCard from "../components/TechStackCard";

// Logos for non-lucide techs
import htmlLogo from "../assets/logo/html.svg";
import cssLogo from "../assets/logo/css.svg";
import jsLogo from "../assets/logo/javascript.svg";
import mongoLogo from "../assets/logo/mongodb.svg";
import mysqlLogo from "../assets/logo/mysql.svg";
import pythonLogo from "../assets/logo/python.svg";
import cppLogo from "../assets/logo/cpp.svg";
import chatgptLogo from "../assets/logo/chatgpt.svg";
import claudeLogo from "../assets/logo/claude.svg";
import reactbitLogo from "../assets/logo/reactbit.svg";
import nodejsLogo from "../assets/logo/nodejs.svg";

// Pagination components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

interface TechStack {
  image: string;
  title: string;
  startDate: string;
}

const TechStackSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const techStacks: TechStack[] = [
    { image: htmlLogo, title: "HTML", startDate: "2023-01-01" },
    { image: cssLogo, title: "CSS", startDate: "2023-01-07" },
    { image: jsLogo, title: "JavaScript", startDate: "2023-08-14" },
    { image: reactbitLogo, title: "React.js", startDate: "2024-02-01" },
    { image: nodejsLogo, title: "Node.js", startDate: "2024-06-10" },
    { image: mongoLogo, title: "MongoDB", startDate: "2025-01-01" },
    { image: mysqlLogo, title: "MySQL", startDate: "2024-03-15" },
    { image: pythonLogo, title: "Python", startDate: "2024-04-01" },
    { image: cppLogo, title: "C / C++", startDate: "2023-04-10" },
    { image: chatgptLogo, title: "ChatGPT", startDate: "2024-05-01" },
    { image: claudeLogo, title: "Claude", startDate: "2025-08-15" },
    { image: reactbitLogo, title: "ReactBit", startDate: "2025-09-01" },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(techStacks.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = techStacks.slice(startIndex, startIndex + itemsPerPage);

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center text-(--color-text) px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-(--color-primary-light) mb-8 text-center">
        My Tech Stack
      </h1>

      {/* Tech Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full max-w-6xl">
        {currentItems.map((tech, index) => (
          <TechStackCard
            key={index}
            image={tech.image}
            title={tech.title}
            startDate={tech.startDate}
          />
        ))}
      </div>

      {/* Only Previous & Next buttons */}
      <Pagination className="mt-8">
        <PaginationContent className="flex gap-6">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrevious();
              }}
              className={`transition ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105 hover:text-[var(--color-primary)]"
              }`}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
              className={`transition ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-105 hover:text-[var(--color-primary)]"
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default TechStackSection;
