import { useState,useRef } from "react";
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
import nodejsLogo from "../assets/logo/nodejs.svg"
// Pagination components (from your code)
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const TechStackSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
  const techStacks = [
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
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-[var(--color-text)] px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-primary-light)] mb-8">
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

      {/* Pagination */}
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrevious();
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageClick(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {currentPage < totalPages && <PaginationEllipsis />}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNext();
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default TechStackSection;
