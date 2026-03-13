import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import type { Pet } from "./Home/FeaturedPetsSection";

export const AnimalsFeed = () => {
  const [petsData, setPetsData] = useState<Pet[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All Animals");

  useEffect(() => {
    const loadPets = async () => {
      const samplePets: Pet[] = [
        {
          id: 1,
          name: "Max",
          type: "Dog",
          age: 3,
          breed: "Golden Retriever",
          isVaccinated: true,
          liked: false,
          location: "San Francisco",
          rescuedDate: "2024-06-15",
          attributes: ["Friendly", "Playful", "Energetic"],
          imageUrl: "https://loremflickr.com/400/400/dog,golden-retriever",
        },
        {
          id: 2,
          name: "Luna",
          type: "Cat",
          age: 2,
          breed: "Siamese",
          isVaccinated: true,
          liked: true,
          location: "Oakland",
          rescuedDate: "2024-07-20",
          attributes: ["Calm", "Affectionate", "Independent"],
          imageUrl: "https://loremflickr.com/400/400/cat,siamese",
        },
        {
          id: 3,
          name: "Charlie",
          type: "Dog",
          age: 4,
          breed: "Beagle Mix",
          isVaccinated: true,
          liked: false,
          location: "San Jose",
          rescuedDate: "2024-05-10",
          attributes: ["Loyal", "Obedient", "Family-friendly"],
          imageUrl: "https://loremflickr.com/400/400/dog,beagle",
        },
        {
          id: 4,
          name: "Bella",
          type: "Cat",
          age: 1,
          breed: "Persian",
          isVaccinated: false,
          liked: true,
          location: "San Francisco",
          rescuedDate: "2024-08-05",
          attributes: ["Playful", "Gentle", "Social"],
          imageUrl: "https://loremflickr.com/400/400/cat,persian",
        },
        {
          id: 5,
          name: "Rocky",
          type: "Dog",
          age: 5,
          breed: "German Shepherd",
          isVaccinated: true,
          liked: false,
          location: "Oakland",
          rescuedDate: "2024-04-12",
          attributes: ["Intelligent", "Protective", "Alert"],
          imageUrl: "https://loremflickr.com/400/400/dog,german-shepherd",
        },
        {
          id: 6,
          name: "Tweety",
          type: "Bird",
          age: 2,
          breed: "Parrot",
          isVaccinated: true,
          liked: false,
          location: "San Jose",
          rescuedDate: "2024-07-08",
          attributes: ["Vocal", "Intelligent", "Colorful"],
          imageUrl: "https://loremflickr.com/400/400/bird,parrot",
        },
      ];
      setPetsData(samplePets);
    };
    
    loadPets();
  }, []);

  const animalTypes = ["All Animals", "Dog", "Cat", "Bird", "Rabbit", "Other"];

  const filteredPets =
    selectedType === "All Animals"
      ? petsData
      : petsData.filter((pet) => pet.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Animals for Adoption
          </h1>
          <p className="text-gray-600">
            Find your perfect companion from our available animals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {animalTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className="px-6 py-2 rounded-full font-semibold transition-all duration-300"
              style={{
                backgroundColor:
                  selectedType === type
                    ? "rgb(var(--color-primary))"
                    : "white",
                color:
                  selectedType === type
                    ? "white"
                    : "rgb(var(--color-primary))",
                border:
                  selectedType === type
                    ? "none"
                    : `2px solid rgb(var(--color-primary))`,
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => <Card key={pet.id} pet={pet} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">
                No animals found for the selected type.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
