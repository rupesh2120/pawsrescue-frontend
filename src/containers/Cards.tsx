import { Card } from "../components/Card"
import type { Pet } from "./Home/FeaturedPetsSection";

export const Cards = ({ petsData }: { petsData: Pet[] }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {petsData.slice(0,3).map((pet) => (
        <Card key={pet.id} pet={pet} />
      ))}
    </div>
  );
};
