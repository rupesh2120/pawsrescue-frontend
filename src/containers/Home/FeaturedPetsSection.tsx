import { Button } from "../../components/Button"
import { Cards } from "../Cards"

export interface Pet {
  id: number,
  name: string,
  type: string,
  age: number,
  breed: string,
  isVaccinated: boolean,
  liked: boolean,
  location: string,
  rescuedDate: string,
  attributes: string[],
  imageUrl: string,
}

export const FeaturedPetsSection = () => {

   const petsData: Pet[] = [
    {
      id: 1,
      name: "Max",
      type: "Dog",
      age: 3,
      breed: "Golden Retriever",
      isVaccinated: true,
      liked: false,
      location: "New York",
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
      location: "Los Angeles",
      rescuedDate: "2024-07-20",
      attributes: ["Calm", "Affectionate", "Independent"],
      imageUrl: "https://loremflickr.com/400/400/cat,siamese",
    },
    {
      id: 3,
      name: "Charlie",
      type: "Dog",
      age: 4,
      breed: "Labrador",
      isVaccinated: true,
      liked: false,
      location: "Chicago",
      rescuedDate: "2024-05-10",
      attributes: ["Loyal", "Obedient", "Family-friendly"],
      imageUrl: "https://loremflickr.com/400/400/dog,labrador",
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
      location: "Boston",
      rescuedDate: "2024-04-12",
      attributes: ["Intelligent", "Protective", "Alert"],
      imageUrl: "https://loremflickr.com/400/400/dog,german-shepherd",
    },
    {
      id: 6,
      name: "Whiskers",
      type: "Cat",
      age: 3,
      breed: "Bengal",
      isVaccinated: true,
      liked: true,
      location: "Miami",
      rescuedDate: "2024-07-08",
      attributes: ["Active", "Curious", "Vocal"],
      imageUrl: "https://loremflickr.com/400/400/cat,bengal",
    },
  ]

  return (
    <div className="py-16 bg-gray-60">
      <div className="max-w-6xl mx-auto">
       <Cards petsData={petsData} />
      </div>
      <div className="flex justify-center mt-8">
        <Button 
          text="View All Animals"
          bgColor="rgb(var(--color-primary))"
          textColor="white"
          padding="12px 32px"
          radius="16px"
          fontSize="16px"
          fontWeight="400"
          onClick={() => {}}
          showHoverIcon={true}
        />
      </div>
    </div>
  )
}