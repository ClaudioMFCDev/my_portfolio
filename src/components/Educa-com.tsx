{
  /** Formacion */
}

type EducationEntry = {
  year: string;
  institution: string;
  description: string;
}

const educationData: EducationEntry[] = [
  {
    year: "2017",
    institution: "UNNE - Lic. en Sistemas de Información",
    description: "2017 - 4th year currently",
  },
  {
    year: "2019",
    institution: "UNNE Idiomas - British English",
    description: "2019 - 4th year currently",
  },
  {
    year: "2023",
    institution: "Talentos Digitales - Desarrollo Web",
    description: "2023 - 2024",
  },
  {
    year: "2024",
    institution: "Udemy - Python: De Principiante a Avanzado",
    description: "2024",
  },
]

const Educacion: React.FC = () => {
  return (
    <section id="education" className="container mx-auto mt-6">
      <h3 className="mb-2 text-4xl sm:text-5xl text-center text-deepblue-500">Education</h3>
      <div className="cards mb-6 flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
        {educationData.map( (entry, index) => (
          <div key={index} className=" bg-deepblue-500 rounded border-2 w-1/2 max-w-80 min-w-72 max-lg:max-h-36 shadow-xl shadow-deepblue-300">
            <div className="h-8 w-28 mt-0.5 -ml-1.5 content-center absolute border-2 rounded-r-xl my-col bg-deepblue-400">
              <h3 className="mx-4 text-base sm:text-lg text-white font-black">{entry.year}</h3>
            </div>
            <div className="pb-0 h-40 mx-4 content-center text-white">
              <h3 className="my-1 text-lg sm:text-xl font-bold">{entry.institution}</h3>
              <p className="italic text-sm sm:text-base text-deepblue-200 font-semibold">{entry.description}</p>
            </div>
          </div>
        ) )}
      </div>
    </section>
  );
}

export default Educacion;