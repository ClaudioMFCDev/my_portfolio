import Image from "next/image";

export default function Presentacion() {
  return (
    <div className="container mx-auto p-4 mb-6">
      <section className="flex h-auto">
        {/** Div 1 */}
        <div className="w-2/3 bg-blue-200 p-16 mr-2">
          <h3 className="text-6xl font-bold bounceInRight">Claudio Castillo</h3>
          <h2 className="text-4xl bounceInRight bounceInRight-delay-05">
            Full Stack Developer
          </h2>
          <p className="text-2xl">
            Hola! Soy un programador con conocimientos frontend y backend.
            Actualmente enfocado en el desarrollo web con Next.js y Javascript.
          </p>
        </div>
        {/** Div 2 */}
        <div className="w-1/3 bg-green-200 p-6 md:p-6">
          <div className="h-52 w-52 lg:mx-14 border-2 bg-amber-300 flex items-center justify-center rounded-full border-solid border-white">
            <Image
              className="rounded-b-3xl animate__animated animate__bounce"
              width={150}
              height={150}
              objectFit="cover"
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
