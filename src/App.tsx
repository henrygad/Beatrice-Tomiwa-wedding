import hero_background_image from "./assets/hero-backgound-image.jpg";
import couple_image_1 from "./assets/couple-image-1.jpg";
import couple_image_2 from "./assets/couple-image-2.jpg";
import display_image from "./assets/display-image.jpg";
import Eventbox from "./components/Eventbox";
import bride_price_icon from "./assets/bride-price-icon.svg"
import reception_icon from "./assets/reception-icon.svg"
import after_party_icon from "./assets/after-party-icon.svg"
import Regularsection from "./ui/Regularsection";
import Buttonwithdropdown from "./components/Buttonwithdropdown";
import Smallscreennav from "./components/Smallscreennav";

const App = () => {
  return <>
    {/* Header area*/}
    <header className="relative flex w-full h-full overflow-x-hidden">
      {/* Navigation bar area */}
      <nav className="container flex items-center gap-x-10 fixed top-10 right-0 left-0 w-full md:pl-20 z-20">
        {/* Big screen nav list */}
        <ul className="flex-1 hidden sm:flex justify-evenly items-center font-main font-normal text-[18px] md:text-[24px] text-[#FFFFFF] text-center leading-[100%] tracking-normal whitespace-pre text-nowrap min-h-[53px] h-auto rounded bg-white/5 backdrop-blur-[12px] shadow">
          <li>
            <button className="cursor-pointer">Home</button>
          </li>
          <li>
            <button className="cursor-pointer">Our Story</button>
          </li>
        </ul>
        {/* Gift btn */}
        <Buttonwithdropdown
          buttonField=" Give gift"
          message={<>
            Thank you for the love, if you would like to <br />
            give a monetary gift then use this account
          </>}
        />   
        {/* Small screen nav list */}
        <Smallscreennav />
      </nav>
    </header>
    {/* Main content area */}
    <main>
      {/* The hero section */}
      <section
        className="relative flex w-full min-h-screen h-auto bg-cover bg-center bg-no-repeat overflow-x-hidden"
        style={{ backgroundImage: `url(${hero_background_image})` }}
      >
        {/* Overlay background image with 50% opacity drop*/}
        <div className="absolute inset-0 bg-black/45">
        </div>
        {/* The hero section content goes in here */}
        <div className="relative flex-1 flex flex-col z-10">
          <span className="flex-1 flex flex-col justify-center items-center gap-y-12">
            <span className="block">
              <h3 className="text-[#FFFFFF] text-[48px] italic leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
                31 . 08. 25
              </h3>
            </span>
            <span className="block">
              <h1 className="text-[#C0BFBD] text-[90px] italic leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
                Beatrice & Tomiwa
              </h1>
            </span>
            <span className="block">
              <p className="text-[#FFFFFF] text-[36px] italic leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
                Wedding ceremony
              </p>
            </span>
          </span>
          <span className="flex justify-center items-center basis-20">
            <p className="text-[#FFFFFF] text-[27px] italic leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
              #TOBEEFOREVER2025
            </p>
          </span>          
        </div>
      </section>
      {/*The groom section */}
      <section className="relative flex w-full min-h-screen h-auto bg-[#F9F6ED] overflow-x-visible">
        <Regularsection
          displayImageUrl={couple_image_1}
          title={<>
            Join us as we embark on a journey <br />
            of love, joy <br />
            and eternal partnership.
          </>}
          content={<>
            From late-night laughs to deep conversations <br />
            From shared playlists to shared dreams... <br />
            With Jahs help we have grown a love rooted in <br />
            joy, trust and undeniable rhythm... We are saying YES to forever. <br />
            Join us as we celebrate our special day.
          </>}
          buttonField="The Groom"
        />
        <img
          src={couple_image_2}
          alt=""
          className="absolute bottom-0 translate-y-1/2 right-0 w-[250px] h-[298px] object-center object-cover shadow shadow-slate-700 rounded"
        />
      </section>
      {/*Empthy space */}
      <section className="min-h-[250px] h-auto w-full bg-[#F9F6ED]">
      </section>
      {/* The bride section */}
      <section className="relative flex w-full min-h-screen h-auto bg-[#F9F6ED] overflow-x-hidden">
        <Regularsection
          displayImageUrl={display_image}
          title={<>
            Come and celebrate our <br />
            special day with us
          </>}
          content={<>
            We would be so honoured to share this beautiful <br />
            moment with the people we love. Your presence <br />
            would mean the world to us. Lets make <br />
            unforgettable memories together!!
          </>}
          buttonField="The Bride"
          className="flex-row-reverse"
        />
      </section>
      {/* Our schedule section */}
      <section className="flex flex-col gap-20 w-full min-h-[600px] h-auto bg-[#3D4E3C] overflow-x-hidden">
        {/* Title Text area  */}
        <span className="basis-30 flex justify-center items-center">
          <h2 className="text-[#FFFFFF] text-[36px] underline decoration-3 decoration-solid leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
            Our Schedule
          </h2>
        </span>
        {/* Our schedule boxs area*/}
        <div className="flex-1 flex justify-evenly items-start gap-20 flex-wrap">
          <Eventbox iconUrl={bride_price_icon} time="12:00 PM" event="Paying of bride price" />
          <Eventbox iconUrl={reception_icon} time="2:00 PM" event="Reception follows" />
          <Eventbox iconUrl={after_party_icon} time="6:00 PM" event="The after party begings!!!!" />
        </div>
      </section>
      {/* Our story section */}
      <section className="flex w-full min-h-[600px] h-auto bg-[#F9F6ED] overflow-x-hidden">
        <div className="flex-1 flex flex-col gap-y-10 bg-[#FFFFFF]">
          {/* Title Text area  */}
          <span className="basis-30 flex justify-center items-center">
            <h2 className="text-[#000000] text-[36px] underline decoration-3 decoration-solid leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
              Our Schedule
            </h2>
          </span>
          {/* main text area*/}
          <span className="flex-1 flex justify-center items-start">
            <p className="max-w-[1100px] text-[24px] text-[#808080] text-center whitespace-normal text-wrap">
              We connected through a shared perspective- A conversation that stood out and lingered !
              What followed was a quiet, steady friendship from afar. For two years we checked on each other,
              built trust amd shared the little things that mattered the most. When she visited the country,
              we finally met ain person - and from that very day it just felt right. Natural and effortless.
              Forever was suddenly something real with her. Since then we have shared laughter, deep conversations,
              fights, tears, and a bond thats only grown stronger with time and distance.
              Even in a long distance relationship we have been constant and always present in each others lives.
              The most incredible love that we have found and accepted humbly as a gift from Jah.
            </p>
          </span>
        </div>
      </section>
    </main>
    {/* footer area*/}
    <footer className="flex w-full min-h-[340px] h-auto text-white bg-[#3D4E3C] overflow-x-hidden">
      {/* main footer text area*/}
      <span className="flex-1 flex justify-center items-center">
        <p className="text-[40px] text-[#FFFFFF] text-center whitespace-normal text-wrap">
          Beatrice and Tomiwa says a very big thank you to everyone for the love and support...
        </p>        
      </span>
    </footer>
  </>
};

export default App;
