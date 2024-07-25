

export default function Presentacion() {
    return (
      <div className="container mx-auto p-4 mb-6">
        <section className="flex h-auto">
            {/** Div 1 */}
          <div className="w-2/3 bg-blue-200 p-16 mr-2">
            <h3 className="text-6xl font-bold bounceInRight">Claudio Castillo</h3>
            <h2 className="text-4xl bounceInRight bounceInRight-delay-05">Full Stack Developer</h2>
            <p className="text-2xl">Hola! Soy un programador con conocimientos frontend y backend. Actualmente enfocado en el desarrollo web con Next.js
            </p>
          </div>
          {/** Div 2 */}
          <div className="w-1/3 bg-green-200 p-6 md:p-16">

            <div className="h-32 w-32 lg:mx-14 border-2 bg-amber-300 flex items-center justify-center rounded-full border-solid border-white">
                <h1 className="text-center text-xl font-bold">fotito</h1>
            </div>
          </div>
        </section>
      </div>
    );
}