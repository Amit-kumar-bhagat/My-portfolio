import react from "../assets/react.svg";
import Banner from "../assets/Banner.svg";
import figma from "../assets/figma.svg";
import whatsapp from "../assets/whatsapp.svg";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";


const Hero = () => {
  return (
    <div
      id="main-container"
      class="flex w-auto h-104  rounded-2xl "
    >
      <div
        id="Hero-container "
        class="p-12 pr-0 w-180  h-94 border  border-none  flex "
      >
        <div
          id="Intro-container"
          class="w-full h-auto border-none text-left p-0 text-white"
        >
          <h1 class="text-3xl font-bold">Hi, I am </h1>
          <h1 class="text-4xl font-bold ">Amit Kumar Bhagat </h1>
          <p class="mt-4 font-light text-shadow-white">
            Blending creativity with technical expertise, I craft custom UX
            designs that deliver real results. Let's turn your vision into a
            seamless, user-friendly experience.
          </p>
          <div class="border-none inline-block w-auto  mt-4 gap-4">
            <button class=" bg-white w-[114.35px] h-[37.6px] border-none text-black   px-4 py-1.5">
              {" "}
              Hire me
            </button>
            <button class=" ml-2 border border-green-500 px-4 py-1.5 justify-center hover:bg-green-500 cursor-pointer">
              {" "}
              Know more
            </button>
          </div>

          <div class="react-and-para border-none ml-0  mt-4 flex p-0 space-x-3">
            <div>
              <img
                id="react-logo"
                src={react}
                alt="react logo"
                class="h-10 w-10"
              />{" "}
            </div>
            <div class="flex items-center justify-center ">
              <p class="text-sm">
                {" "}
                Visual Designer and developer Specialized in UI/UX
              </p>{" "}
            </div>
          </div>

          <div id="social-icons" class=" w-64 h-auto mt-5 flex space-x-4 items-center">

            <div id="figma" class=""> <a href="https://www.figma.com/@amitkumarbhagat"><img src={figma} alt="figma-icon" class="w-7 h-7" /></a></div>
            <div id="whatsapp" class=""><a href="https://wa.me/919876543210"><img src={whatsapp} alt="figma-icon" class="w-7 h-7" /></a></div>
            <div id="linkedin" class=""><a href="https://linkedin.com/in/amitkumarbhagat881"><img src={linkedin} alt="figma-icon" class="w-7 h-7" /></a></div>
            <div id="email" class=""><a href="mailto:amitkumarrawstar801@gmail.com"><img src={gmail} alt="figma-icon" class="w-8 h-8" /></a></div>

          </div>


        </div>
      </div>

      <div id="banner-image" class=" w-[920px]  ml-34 h-auto border-amber-300 flex text-right">
        <img
          src={Banner}
          alt="Banner-image"
          class="w-full h-full object-cover transform -translate-y-9 translate-x-16"
        />
      </div>
    </div>
  );
};

export default Hero;
