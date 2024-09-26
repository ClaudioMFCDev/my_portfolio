import Image from "next/image";

export default function Presentacion() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <section className=" flex flex-col-reverse lg:flex-row h-auto lg:h-96 mx-auto justify-center items-center space-y-4 lg:space-y-0">
        {/** Div 1 */}
        <div className=" w-full lg:w-1/3 p-4 text-center lg:text-left">
          <h3 className="text-3xl lg:text-6xl font-bold bounceInRight">
            Claudio Castillo</h3>
          <h2 className="text-xl lg:text-4xl bounceInRight bounceInRight-delay-05">
            Fullstack Developer
          </h2>
          <p className="text-lg lg:text-2xl">
            Hola! Soy un programador con conocimientos frontend y backend.
            Actualmente enfocado al desarrollo web.
          </p>
        </div>
        {/** Div 2 */}
        <div className=" w-full lg:w-1/3 p-4 flex justify-center max-lg:justify-center">
          <div className="h-44 w-44 sm:h-54 sm:w-54 lg:h-80 lg:w-80 border-2 bg-deepblue-500 pt-4 flex items-end justify-between rounded-full border-solid border-white">
            <Image
              className="rounded-full animate__animated animate__bounce"
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
