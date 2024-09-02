import Image from "next/image";

export default function Presentacion() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <section className="flex h- justify-center items-center">
        {/** Div 1 */}
        <div className=" w-1/2  p-4 mr-2">
          <h3 className="text-6xl font-bold bounceInRight">
            Claudio Castillo</h3>
          <h2 className="text-4xl bounceInRight bounceInRight-delay-05">
            Full Stack Developer
          </h2>
          <p className="text-2xl">
            Hola! Soy un programador con conocimientos frontend y backend.
            Actualmente enfocado en el desarrollo web.
          </p>
        </div>
        {/** Div 2 */}
        <div className="w-1/3 p-6 md:p-6">
          <div className="h-52 w-52 lg:mx-14 border-2 my-grad flex items-center justify-center rounded-full border-solid border-white">
            <Image
              className="rounded-b-3xl animate__animated animate__bounce"
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              alt="profile-picture"
              src={
                "https://drive.google.com/uc?export=view&id=1Z4LZZtQESUSrnRIa_cC0S85Sjxj6z6pv"
              }
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
}
