import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <div id="header" class="border rounded-full border-green-500/80">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="My logo" class="w-12 h-12" />
            <span class="ml-3 text-xl text-white">Amit Kumar Bhagat</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-green-600 cursor-pointer">
              Home
            </Link>
            <a href="#" class="mr-5 hover:text-green-600 cursor-pointer">
              Portfolio
            </a>
            <Link
              to="/services"
              class="mr-5 hover:text-green-600 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="mr-5 hover:text-green-600 cursor-pointer"
            >
              About
            </Link>
          </nav>
          <button class=" cursor-pointer text-black font-semibold inline-flex items-center bg-green-600 border-0 py-2 px-5 focus:outline-none hover:bg-green-800 transition-all delay-100 rounded-full text-base mt-4 md:mt-0">
            Contact us
            {/* <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
