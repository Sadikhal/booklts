// import Container from "@/components/Container";
// import EmptyState from "@/components/EmptyState";
// import ClientOnly from "@/components/ClientOnly";
// import ExperienceCard from "@/components/experiences/ExperienceCard";
// import { experiences } from "@/lib/data";

// const Home = () => {
//   if (experiences.length === 0) {
//     return (
//       <ClientOnly>
//         <EmptyState showReset />
//       </ClientOnly>
//     );
//   }

//   return (
//     <ClientOnly>
//       <Container>
//         <div
//           className="
//             pt-34
//             grid
//             grid-cols-2
//             sm:grid-cols-2
//             lg:grid-cols-3
//             xl:grid-cols-4
//             2xl:grid-cols-5
//             gap-8
//             w-full
//             h-full
//           "
//         >
//           {experiences.map((experience) => (
//             <ExperienceCard key={experience.id} data={experience} />
//           ))}
//         </div>
//       </Container>
//     </ClientOnly>
//   );
// };

// export default Home;

"use client"
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import ExperienceCard from "@/components/experiences/ExperienceCard";
import { useEffect, useState } from "react";
import { experiencesAPI } from "@/lib/api";
import { Experience } from "@/types";
import {HomeLoader} from "@/components/Loaders";

const Home = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await experiencesAPI.getAll();
        setExperiences(response.data);
      } catch (err) {
        setError('Failed to fetch experiences');
        console.error('Error fetching experiences:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <ClientOnly>
        <HomeLoader/>
      </ClientOnly>
    );
  }

  if (error || experiences.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-34
            grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-5
            gap-8
            w-full
            h-full
          "
        >
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} data={experience} />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;


