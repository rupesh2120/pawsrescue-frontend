import { useEffect, useRef, useState } from "react";
import { LocateFixed, LoaderCircle, MapPin, Search } from "lucide-react";
import { Card } from "../components/Card";
import type { Pet } from "./Home/FeaturedPetsSection";

interface LocationSuggestion {
  display_name: string;
  lat: string;
  lon: string;
}

const samplePets: Pet[] = [
  { id: 1, name: "Max", type: "Dog", age: 3, breed: "Golden Retriever", isVaccinated: true, liked: false, location: "San Francisco", rescuedDate: "2024-06-15", attributes: ["Friendly", "Playful", "Energetic"], imageUrl: "https://loremflickr.com/400/400/dog,golden-retriever" },
  { id: 2, name: "Luna", type: "Cat", age: 2, breed: "Siamese", isVaccinated: true, liked: true, location: "Oakland", rescuedDate: "2024-07-20", attributes: ["Calm", "Affectionate", "Independent"], imageUrl: "https://loremflickr.com/400/400/cat,siamese" },
  { id: 3, name: "Charlie", type: "Dog", age: 4, breed: "Beagle Mix", isVaccinated: true, liked: false, location: "San Jose", rescuedDate: "2024-05-10", attributes: ["Loyal", "Obedient", "Family-friendly"], imageUrl: "https://loremflickr.com/400/400/dog,beagle" },
  { id: 4, name: "Bella", type: "Cat", age: 1, breed: "Persian", isVaccinated: false, liked: true, location: "San Francisco", rescuedDate: "2024-08-05", attributes: ["Playful", "Gentle", "Social"], imageUrl: "https://loremflickr.com/400/400/cat,persian" },
  { id: 5, name: "Rocky", type: "Dog", age: 5, breed: "German Shepherd", isVaccinated: true, liked: false, location: "Oakland", rescuedDate: "2024-04-12", attributes: ["Intelligent", "Protective", "Alert"], imageUrl: "https://loremflickr.com/400/400/dog,german-shepherd" },
  { id: 6, name: "Tweety", type: "Bird", age: 2, breed: "Parrot", isVaccinated: true, liked: false, location: "San Jose", rescuedDate: "2024-07-08", attributes: ["Vocal", "Intelligent", "Colorful"], imageUrl: "https://loremflickr.com/400/400/bird,parrot" },
];

export const AnimalsFeed = () => {
  const [petsData, setPetsData] = useState<Pet[]>(samplePets);
  const [selectedType, setSelectedType] = useState<string>("All Animals");
  const [locationText, setLocationText] = useState("");
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [locationError, setLocationError] = useState("");
  const [locationPromptVisible, setLocationPromptVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const suggestionRequest = useRef<AbortController | null>(null);

  useEffect(() => {
    void fetchFeed();
  }, []);

  useEffect(() => {
    const query = locationText.trim();
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const timeout = window.setTimeout(async () => {
      suggestionRequest.current?.abort();
      const controller = new AbortController();
      suggestionRequest.current = controller;
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?${new URLSearchParams({ q: query, format: "json", limit: "5" })}`, { signal: controller.signal });
        if (!response.ok) throw new Error("Location lookup failed");
        setSuggestions((await response.json()) as LocationSuggestion[]);
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") setSuggestions([]);
      }
    }, 350);
    return () => window.clearTimeout(timeout);
  }, [locationText]);

  const fetchFeed = async ({ lat, lng }: { lat?: number | string; lng?: number | string } = {}) => {
    const params = new URLSearchParams();
    if (lat !== undefined && lng !== undefined) {
      params.set("lat", String(lat));
      params.set("lng", String(lng));
    }
    setIsLoading(true);
    setLocationError("");
    try {
      const response = await fetch(`/api/animal/feed?${params.toString()}`);
      if (!response.ok) throw new Error("Feed request failed");
      const payload = (await response.json()) as { data?: Pet[] };
      setPetsData(payload.data ?? []);
    } catch {
      setLocationError("The live feed is unavailable, so sample animals are shown.");
    } finally {
      setIsLoading(false);
    }
  };

  const selectLocation = (suggestion: LocationSuggestion) => {
    setLocationText(suggestion.display_name);
    setSuggestions([]);
    void fetchFeed({ lat: suggestion.lat, lng: suggestion.lon });
  };

  const handleAreaSearch = async () => {
    const query = locationText.trim();
    if (!query) return;
    setSuggestions([]);
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?${new URLSearchParams({ q: query, format: "json", limit: "1" })}`);
      if (!response.ok) throw new Error("Location lookup failed");
      const results = (await response.json()) as LocationSuggestion[];
      if (!results.length) {
        setLocationError("Could not find that location. Try a different area name.");
        return;
      }
      selectLocation(results[0]);
    } catch {
      setLocationError("Something went wrong finding that location.");
    }
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Your browser does not support location services.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocationText("Current location");
        setLocationPromptVisible(false);
        void fetchFeed({ lat: coords.latitude, lng: coords.longitude });
      },
      () => setLocationPromptVisible(true),
    );
  };

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
          <div className="relative max-w-2xl mx-auto mt-8 text-left">
            <form onSubmit={(event) => { event.preventDefault(); void handleAreaSearch(); }} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <MapPin size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  value={locationText}
                  onChange={(event) => setLocationText(event.target.value)}
                  placeholder="Search by area or city"
                  aria-label="Search by area or city"
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-gray-900 shadow-sm outline-none transition focus:border-[rgb(var(--color-primary))] focus:ring-2 focus:ring-[rgba(236,112,99,0.2)]"
                />
                {suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                    {suggestions.map((suggestion) => (
                      <button
                        key={`${suggestion.lat}-${suggestion.lon}`}
                        type="button"
                        onClick={() => selectLocation(suggestion)}
                        className="flex w-full items-start gap-3 border-b border-gray-100 px-4 py-3 text-left text-sm text-gray-700 last:border-0 hover:bg-orange-50"
                      >
                        <MapPin size={16} className="mt-0.5 shrink-0 text-[rgb(var(--color-primary))]" />
                        <span>{suggestion.display_name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading || !locationText.trim()}
                className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                style={{ backgroundColor: "rgb(var(--color-primary))" }}
              >
                <Search size={18} />
                Search area
              </button>
            </form>
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              className="mt-3 flex items-center gap-2 text-sm font-semibold text-[rgb(var(--color-primary))] hover:underline"
            >
              <LocateFixed size={17} />
              Use current location
            </button>
            {locationPromptVisible && (
              <div className="mt-3 rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800">
                Location permission was denied. Search for an area above to find nearby animals.
              </div>
            )}
            {locationError && <p className="mt-3 text-sm text-red-600">{locationError}</p>}
            {isLoading && (
              <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                <LoaderCircle size={16} className="animate-spin" />
                Finding animals near you...
              </p>
            )}
          </div>
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
