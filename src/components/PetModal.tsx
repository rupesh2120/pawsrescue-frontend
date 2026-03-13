import { X } from "lucide-react";
import type { Pet } from "../containers/Home/FeaturedPetsSection";
import { Button } from "./Button";
import { InfoItem } from "./InfoItem";
import { Section } from "./Section";
import { HealthStatus } from "./HealthStatus";

interface PetModalProps {
  pet: Pet;
  isOpen: boolean;
  onClose: () => void;
}

export const PetModal = ({ pet, isOpen, onClose }: PetModalProps) => {
  if (!isOpen) return null;

  const { name, age, breed, type, imageUrl, attributes, location, isVaccinated } = pet;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: "rgba(10, 9, 9, 0.7)" }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side - Image and Basic Info */}
            <div>
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <InfoItem label="Age" value={`${age} years`} icon="🎂" />
                <InfoItem label="Type" value={type} icon="🐾" />
                <InfoItem label="Breed" value={breed} icon="🏷️" />
                <InfoItem
                  label="Vaccinated"
                  value={isVaccinated ? "Yes" : "No"}
                  icon="💉"
                  valueColor={isVaccinated ? "text-green-600" : "text-red-600"}
                />
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="space-y-6">
              {/* About Section */}
              <Section title="About Max">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {name} is a friendly and energetic {breed} who loves playing fetch
                  and going for walks. Great with kids and other dogs.
                </p>
              </Section>

              {/* Personality */}
              <Section title="Personality">
                <div className="flex flex-wrap gap-2">
                  {attributes.map((attr, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: "var(--color-success-light-bg)",
                        color: "rgb(var(--color-success))",
                      }}
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </Section>

              {/* Health Status */}
              <HealthStatus status="Excellent" />

              {/* Location & Contact */}
              <Section title="Location & Contact">
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <span>📍</span>
                    <span>123 Shelter Lane, {location}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🏢</span>
                    <span>Happy Paws Rescue</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <span>(415) 555-0123</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📧</span>
                    <span>adopt@happypaws.org</span>
                  </p>
                </div>
              </Section>

              {/* Available & Price */}
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="flex items-center gap-2 text-sm">
                    <span>📅</span>
                    <span>Available since 15/01/2024</span>
                  </p>
                  <p className="text-2xl font-bold" style={{ color: "rgb(var(--color-primary))" }}>
                    $ 350
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    text="Adopt Max"
                    bgColor="rgb(var(--color-primary))"
                    textColor="white"
                    width="100%"
                    onClick={() => alert("Adoption process started!")}
                  />
                  <Button
                    text="Contact Shelter"
                    bgColor="white"
                    textColor="rgb(var(--color-primary))"
                    width="100%"
                    onClick={() => alert("Contacting shelter...")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
