import { FeaturedPetsSection } from "./FeaturedPetsSection"
import { HeroSection } from "./HeroSection"
import { StatesSection } from "./StateSection"

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatesSection />
      <FeaturedPetsSection />
    </div>
  )
}