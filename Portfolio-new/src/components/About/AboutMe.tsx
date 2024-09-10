const AboutMe = () => {
  return (
    <section className="relative bg-inherit overflow-hidden mt-10 animate-slideIn">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start lg:gap-6">
        <article className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mb-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 mb-10 text-2xl tracking-tight font-extrabold text-dark-grey dark:text-light-grey sm:text-3xl md:text-4xl">
                About Me
              </h2>

              <p className="text-dark-grey dark:text-light-grey font-lora">
                I am a newly graduated Frontend Developer with a passion for creating intuitive and functional
                web applications. My education at Medieinstitutet in Stockholm has provided me with a solid
                foundation and practical experience in modern web development, which I am now ready to
                utilize in my working life. <br /><br /> During my studies and internship periods, I have developed strong skills in the following, among other things:<br /><br />
                
                <span className="inline-block font-lora text-xl md:text-2xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-slate-200">
                  <span className="text-dark-grey dark:text-light-grey inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-textSlide leading-tight [&_li]:block">
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                      <li>ReactJS</li>
                      <li>VueJS</li>
                    </ul>
                  </span>
                </span><br /><br />

                This has equipped me to take on various types of projects and technical challenges.I am a problem solver
                who loves to see my ideas come to life in the form of well-functioning and aesthetically pleasing websites. 
                I am always eager to learn new techniques and improve my skills, and I strongly believe in continually 
                developing and growing in my role as a developer.<br /><br /> I am ready to take my first steps in my career as a Front
                end Developer and look forward to the opportunity to contribute my knowledge and enthusiasm to a dedicated
                and creative team!
              </p>
            </div>
          </main>
        </article>

        <div className="flex justify-center lg:mt-24 lg:mb-10">
          <img
            className="w-2/3 h-auto max-w-lg object-cover object-center shadow-lg grayscale hover:grayscale-0
              lg:max-w-lg lg:w-1/2 xl:w-2/5 lg:ml-4 xl:ml-6"
            style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 20% 100%, 0% 38%)' }}
            src="/jag-1.jpg"
            alt="A creative polygon-shaped image of me"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;