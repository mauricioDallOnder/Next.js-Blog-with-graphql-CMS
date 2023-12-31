/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  CloseIcon,
  HamburgerIcon,
  TriangleDownIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import logo_avatar from "../assets/LOGO.png";

export default function Header() {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[]
  >([]);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [buttonText, setButtonText] = useState("PESQUISAR");
  const [isSearching, setIsSearching] = useState(false);
  async function handleSearch() {
    if (inputValue.trim() !== "") {
      setIsSearching(true); // Indica que a pesquisa começou
      setButtonText("BUSCANDO...");
      await router.push(`/search/${inputValue.trim()}`);
      setIsSearching(false); // Indica que a pesquisa terminou
      setButtonText("PESQUISAR");
      setInputValue(""); // Limpar o input depois da pesquisa
    }
  }

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
      // A asserção de tipo aqui informa ao TypeScript que 'event.target' é um Node.
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <header className="container mx-auto px-4 md:px-10 mb-8">
      <nav
        className="border-b w-full border-blue-400 py-3 bg-gradient-to-rb from-6d327c via-485DA6 to-32b37b "
        aria-label="Main navigation"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image
                src={logo_avatar}
                alt="Logotipo chacomsabor"
                width={200}
                height={71}
              />
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none "
            aria-label="Open main menu"
          >
            {menuOpen ? (
              <CloseIcon style={{ fontSize: "24px", color: "#fa0000" }} />
            ) : (
              <HamburgerIcon style={{ fontSize: "24px", color: "#FFFFFF" }} />
            )}
          </button>

          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto md:pt-0 md:mt-0`}
            id="navbar-dropdown"
            aria-label="Menu de navegação principal"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
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
                  <TriangleDownIcon style={{ paddingLeft: "2px" }} />
                </button>
                <div
                  className={`${
                    dropdownOpen ? "block" : "hidden"
                  } z-10 bg-red divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full left-0 mt-2 dark:bg-gray-700 dark:divide-gray-600 font-bold`}
                  id="dropdownNavbar"
                  ref={dropdownRef}
                >
                  <ul
                    className="rounded-md bg-white shadow-lg p-2 mt-2"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        role="none"
                        className="hover:bg-gray-200 rounded transition-colors duration-200"
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
              <li>
                <Link href="/info/About">
                  <span className="block py-2 pl-3 pr-4 text-white bg-red md:hover:text-red hover:underline md:p-0 font-bold">
                    Sobre nós
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <div className="flex flex-col md:flex-row justify-start gap-2 items-center w-full md:w-auto">
                  {isInputVisible ? (
                    <div className="flex items-center align-middle gap-2 w-full">
                      <input
                        className="pl-2 bg-white border border-gray-300 w-full text-lg font-medium text-black focus:border-yellow-500 focus:outline-none rounded-md py-2"
                        placeholder="pesquisar..."
                        value={inputValue}
                        onChange={handleChange}
                        aria-label="Search"
                      />
                      <div className="flex mb-2 gap-2 w-full">
                        {isSearching || inputValue === "" ? (
                          <button
                            disabled={true}
                            className="custom-btn-blue bg-blue-600 text-white rounded-md px-4 py-2 cursor-not-allowed w-full"
                          >
                            {buttonText}
                          </button>
                        ) : (
                          <button
                            className="custom-btn-blue bg-blue-600 text-white rounded-md px-4 py-2 cursor-pointer w-full"
                            onClick={handleSearch}
                          >
                            {buttonText}
                          </button>
                        )}
                        <button
                          onClick={toggleInputVisibility}
                          className="custom-btn-red bg-red-600 text-white rounded-md px-4 my-4 cursor-pointer md:my-0"
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={toggleInputVisibility}
                      className="custom-btn-blue bg-blue-600 text-white rounded-md px-4 py-2 cursor-pointer"
                    >
                      <Search2Icon />
                      <span className="ml-2 font-semibold">Pesquisar</span>
                    </button>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

//fix issues
