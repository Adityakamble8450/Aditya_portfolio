import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    Shery.textAnimate(".text-target" /* Element to target.*/, {
      //Parameters are optional.
      style: 1,
      y: 10,
      delay: 0.2,
      duration: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });
  }, []);

  return (
    <section className="px-4 lg:px-0 text-zinc-200 ">
      <h2 className="text-2xl lg:text-6xl text-primary font-bold text-center mb-4 text-target lg:mb-8">
        About Me
      </h2>
      <div className="max-w-[30vw]  h-[35vw]   bg-zinc-500  mx-auto m-4 overflow-hidden  rounded-lg">
        <img
          className=" h-full w-full object-cover   inline-block"
          src="/Aditya1.jpg"
          alt=""
        />
        {/* <img src="/public/Aditya2.jpg" alt="" />
        <img src="/public/Aditya3.jpg" alt="" /> */}
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-base lg:text-lg text-center leading-relaxed ">
          Welcome to the digital realm of <strong>Aditya Kamble</strong>, a
          fervent Fullstack Developer specializing in the MERN (MongoDB,
          Express, React, Node.js) stack. Embark on a captivating journey
          through the dynamic landscape of web development as Aditya shares his
          expertise and passion for crafting innovative solutions. Dive into a
          world where MongoDB, Express, React, and Node.js converge seamlessly
          to create cutting-edge applications. As a dedicated Fullstack
          Developer, Aditya brings a wealth of experience and proficiency to the
          table. From the intricacies of database management with MongoDB to the
          robustness of server-side development using Express and Node.js,
          Aditya's prowess in the MERN stack is truly commendable. His
          commitment to excellence is evident in every line of code, making this
          corner of the web a showcase of unparalleled skill and creativity.
          Explore the React Developer side of Aditya's expertise, where user
          interfaces come to life with seamless interactivity and engaging user
          experiences. Witness the fusion of technical precision and artistic
          flair as Aditya leverages React to build intuitive and visually
          stunning front-end solutions. From responsive designs to
          state-of-the-art user interfaces, this platform is a testament to the
          limitless possibilities that arise when React development is in the
          hands of a skilled practitioner like Aditya.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
