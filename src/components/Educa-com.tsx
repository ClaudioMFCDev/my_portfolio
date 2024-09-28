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
      <h3 className=" text-4xl sm:text-5xl text-center text-deepblue-500">Education</h3>
      <div className="cards mb-6 flex justify-center items-center flex-col">
        {educationData.map( (entry, index) => (
          <div key={index} className="mt-4 bg-deepblue-500 rounded border-2 w-1/2">
            <div className="h-8 w-28 my-2 -ml-2 content-center absolute border-2 rounded-r-xl my-col">
              <h3 className="mx-4 text-lg text-deepblue-200 font-black">{entry.year}</h3>
            </div>
            <div className="pl-4 h-40 mx-4 content-center text-white">
              <h3 className="my-4 text-2xl font-bold">{entry.institution}</h3>
              <p className="italic text-xl font-semibold">{entry.description}</p>
            </div>
          </div>
        ) )}
      </div>
    </section>
  );
}

export default Educacion;