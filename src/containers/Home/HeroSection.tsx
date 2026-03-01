import { Button } from "../../components/Button"
import { Sparkles, Heart } from "lucide-react"

export const HeroSection = () => {
  return (
    <div className="min-h-150 px-60 bg-gradient-hero justify-center items-center flex flex-col">
      <Button 
        text="Rescue • Rehabilitate • Rehome"
        bgColor="var(--color-white-light)"
        textColor="white"
        padding="4px 8px"
        radius="50px"
        fontSize="12px"
        fontWeight="600"
        icon={<Sparkles size={14} />}
        onClick={() => {}}
      />
      <h1 className="text-6xl font-bold mb-8 mt-2 text-white float-animation">Find Your Perfect Companion</h1>
      <p className="text-2xl text-gray-200 mb-8 wrap text-center">
        Give a rescued animal a second chance at happiness. Browse our lovable pets waiting for their forever homes.
      </p>
      <div className="flex flex-row w-[46%] justify-between">
        <Button 
          text="Browse Animals"
          bgColor="var(--color-white)"
          textColor="black"
          padding="12px 32px"
          radius="16px"
          fontSize="18px"
          fontWeight="600"
          icon={<Heart size={14} />}
          onClick={() => {}}
          showHoverIcon={true}
        />
        <Button 
          text="Post for Adoption"
          bgColor="var(--color-white-light)"
          textColor="white"
          padding="12px 32px"
          radius="16px"
          fontSize="18px"
          fontWeight="600"
          onClick={() => {}}
          showHoverIcon={true}
        />
      </div>
    </div>
  )
}