import type { Pet } from "../containers/Home/FeaturedPetsSection";
import { Heart, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

export const Card = ({ pet }: { pet: Pet }) => {
  const [isLiked, setIsLiked] = useState(pet.liked);
  const {
    name,
    type,
    age,
    breed,
    isVaccinated,
    location,
    rescuedDate,
    attributes,
    imageUrl,
  } = pet;
  return (
    <div className="rounded-lg bg-white shadow-md relative">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[16rem] object-cover rounded-t-lg"
      />
      <div className="absolute top-4 left-4 right-4 flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <span
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold"
            style={{
              backgroundColor: "var(--color-primary-light-bg)",
              color: "rgb(var(--color-primary))",
            }}
          >
            {type}
          </span>
          <p
            className="text-sm font-semibold rounded-full px-3 py-1"
            style={{
              backgroundColor: isVaccinated
                ? "var(--color-success-light-bg)"
                : "rgba(239, 68, 68, 0.15)",
              color: isVaccinated
                ? "rgb(var(--color-success))"
                : "rgb(var(--color-primary))",
            }}
          >
            {isVaccinated ? "Vaccinated" : "Not Vaccinated"}
          </p>
        </div>

        <div
          className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer hover:bg-rgb(var(--color-primary)) transition-colors"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            size={24}
            style={{
              color: "rgb(var(--color-primary))",
              fill: isLiked ? "rgb(var(--color-primary))" : "none",
              strokeWidth: 2,
            }}
          />
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-xs text-gray-600 mb-1">
          {breed} - {age} years
        </p>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex flex-row items-center gap-1">
            <MapPin size={12} className="text-gray-600" />
            <p className="text-xs text-gray-600">{location}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Calendar size={12} className="text-gray-600" />
            <p className="text-xs text-gray-600">
              Rescued: {new Date(rescuedDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div>
          {attributes.map((attr, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1"
            >
              {attr}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
