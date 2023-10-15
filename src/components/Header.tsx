/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Importe o ícone de fechar

const Header: React.FC = () => {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[]
  >([]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const handleCategoryClick = (category: { name: string; slug: string }) => {
    if (category.slug === "todos-os-artigos") {
      router.push("/");
      return;
    }
    router.push(`/categoria/${category.slug}`);
    setMenuOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };
  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      router.push(`/search/${inputValue.trim()}`);
      setInputValue("");
    }
  };

  return (
    <header className="container mx-auto px-4 md:px-10 mb-8">
      <nav
        className="border-b w-full  border-blue-400 py-3 bg-gradient-to-rb from-6d327c via-485DA6 to-32b37b"
        aria-label="Main navigation"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" passHref>
            <div className="flex items-center">
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/geradorimagens-27342.appspot.com/o/blog-cha%2FScreenshot_2023-10-15_at_16.18.14-removebg-preview.png?alt=media&token=e8f69fdf-c6f1-4788-bd37-68603b35673e&_gl=1*1cwpgw7*_ga*MTA2NDY5MTI4MS4xNjk3MzkyMDc0*_ga_CW55HF8NVT*MTY5NzM5NzMzMS4yLjEuMTY5NzM5Nzg2Ni40NS4wLjA."
                }
                alt="Logotipo BlogNutriTri"
                width={200}
                height={241}
              />
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none "
            aria-label="Open main menu"
          >
            <FontAwesomeIcon
              size="3x"
              icon={menuOpen ? faTimes : faBars}
              style={{ color: "red" }}
            />
          </button>

          <div
            ref={dropdownRef}
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto md:pt-0 md:mt-0`}
            id="navbar-dropdown"
            aria-label="Menu de navegação principal"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" passHref>
                  <span className="block py-2 pl-3 pr-4 text-white font-bold bg-transparent md:hover:text-red  hover:underline md:p-0">
                    Página inicial
                  </span>
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  id="dropdownNavbarLink"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:text-white md:hover:bg-transparent md:border-0 md:p-0 md:w-auto md:hover:text-red focus:outline-blue focus:text-red font-bold hover:underline"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Artigos
                  <FontAwesomeIcon
                    icon={faCircleChevronDown}
                    style={{ paddingLeft: "2px" }}
                  />
                </button>
                <div
                  className={`${
                    dropdownOpen ? "block" : "hidden"
                  } z-10 bg-red divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full left-0 mt-2 dark:bg-gray-700 dark:divide-gray-600 font-bold  `}
                  id="dropdownNavbar"
                >
                  <ul
                    className="py-2 text-blue bg-white"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        role="none"
                        className="hover:text-red-700"
                      >
                        <button
                          onClick={() => handleCategoryClick(category)}
                          className="font-semibold cursor-pointer mt-2 md:mt-0 px-4 py-2 w-full text-left md:hover:text-red-700 focus:outline-blue focus:text-red"
                          role="menuitem"
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <Link href="/info/About">
                <span className="block py-2 pl-3 pr-4 text-white bg-red md:hover:text-red hover:underline md:p-0 font-bold">
                  Sobre nós
                </span>
              </Link>
              <div className="flex justify-start gap-2 ">
                {isInputVisible ? (
                  <>
                    <input
                      className=" pl-2 bg-input-backgroud rounded-lg w-88 text-base font-medium text-text-dark focus:border-yellow focus:outline-none md:w-full"
                      placeholder="Digite algo para pesquisar..."
                      value={inputValue}
                      onChange={handleChange}
                      aria-label="Search"
                    />
                    <button
                      onClick={handleSearch}
                      className="flex items-center py-2 pl-3 pr-4 text-white font-bold bg-transparent md:hover:text-red  hover:underline md:p-0"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                      <span className="ml-2 text-white">Buscar</span>
                    </button>
                    <button
                      onClick={toggleInputVisibility}
                      className="flex items-center py-2 pl-3 pr-4 text-white font-bold bg-transparent md:hover:text-red  hover:underline md:p-0"
                    >
                      <FontAwesomeIcon
                        icon={faTimes}
                        style={{ color: "red" }}
                      />
                      <span className="ml-2 text-white font-semibold">Fechar</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={toggleInputVisibility}
                    className="flex items-center py-2 pl-3 pr-4 text-white font-bold bg-transparent md:hover:text-red  hover:underline md:p-0"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                    <span className="ml-2 text-white font-semibold">Pesquisar</span>
                  </button>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
