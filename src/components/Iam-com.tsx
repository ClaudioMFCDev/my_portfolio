import Image from "next/image";

export default function Presentacion() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <section className=" flex flex-col-reverse lg:flex-row h-auto lg:h-96 mx-auto justify-center items-center space-y-4 lg:space-y-0">

        <div className=" w-full lg:w-1/3 p-4 text-center flex flex-col justify-center max-lg:items-center lg:text-left">
          <h3 className=" text-deepblue-600 text-3xl text-shadow-mr lg:text-6xl font-bold bounceInRight">
            Claudio Castillo
          </h3>
          <h2 className="text-deepblue-500 text-xl text-shadow lg:text-4xl bounceInRight bounceInRight-delay-05">
            Fullstack Developer
          </h2>
          <p className="text-deepblue-500 text-lg lg:text-2xl">
            Hi, I am a frontend and backend developer. Currently I am focusing on web development.
          </p>



          <div className="mt-4 space-x-4 flex justify-center sm:justify-evenly w-72 ">
            <a
              href="https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/files-docs/cv_english.pdf"
              download="ClaudioCastillo_CV_English.pdf"
              className="bg-deepblue-500 text-white hover:font-semibold py-2 px-4 rounded hover:bg-deepblue-700 transition duration-500"
            >
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/claudio-castillo-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white hover:font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-500"
            >
              LinkedIn
            </a>
          </div>
        </div>


        <div className=" w-full lg:w-1/3 p-4 flex justify-center max-lg:justify-center">
          <div className="h-44 w-44 sm:h-54 sm:w-54 lg:h-80 lg:w-80 border-2 shadow-lg shadow-deepblue-300  bg-deepblue-500 dark:bg-white pt-4 flex items-end justify-between rounded-full border-solid border-white">
            <Image
              className="rounded-full animate__animated animate__bounce drop-shadow-2xl"
              width={400}
              height={200}
              style={{ objectFit: "cover" }}
              alt="profile-picture"
              src={
                "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/Profile/4.png"
              }
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
}
