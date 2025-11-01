
'use client'
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import ExperienceCard from "@/components/experiences/ExperienceCard";
import { useEffect, useState } from "react";
import { experiencesAPI } from "@/lib/api";
import { Experience } from "@/types";
import { HomeLoader } from "@/components/Loaders";
import { useSearchParams } from "next/navigation";

const Home = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';



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

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const filtered = experiences.filter(experience => 
        experience.title.toLowerCase().includes(query) ||
        experience.description.toLowerCase().includes(query) ||
        experience.location.toLowerCase().includes(query) ||
        experience.about.toLowerCase().includes(query)
      );
      setFilteredExperiences(filtered);
    } else {
      setFilteredExperiences(experiences);
    }
  }, [searchQuery, experiences]);

 
  const displayExperiences = searchQuery ? filteredExperiences : experiences;

  if (loading) {
    return (
      <ClientOnly>
        <HomeLoader/>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        {error || displayExperiences.length === 0 ? (
          <div className="pt-24">
            <EmptyState 
              showReset 
              title={searchQuery ? "No experiences found" : "No experiences available"}
              subtitle={searchQuery ? "Try searching with different keywords" : "Check back later for new experiences"}
            />
          </div>
        ) : (
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
            h-full "
          >
            {displayExperiences.map((experience) => (
              <ExperienceCard key={experience.id} data={experience} />
            ))}
          </div>
        )}
      </Container>
    </ClientOnly>
  );
};

export default Home;