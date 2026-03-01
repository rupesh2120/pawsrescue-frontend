import { Heart, Home, Users } from "lucide-react"

interface StatCard {
  icon: React.ReactNode
  number: string
  label: string
  iconColor: string
}

const StatCard = ({ icon, number, label, iconColor }: StatCard) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-white shadow-md">
      <div className="mb-4" style={{ color: iconColor }}>
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-2 text-gray-900">{number}</h3>
      <p className="text-gray-600 text-lg">{label}</p>
    </div>
  )
}

export const StatesSection = () => {
  const stats: StatCard[] = [
    {
      icon: <Heart size={48} />,
      number: "500+",
      label: "Animals Rescued",
      iconColor: "rgb(var(--color-primary))",
    },
    {
      icon: <Home size={48} />,
      number: "350+",
      label: "Successful Adoptions",
      iconColor: "rgb(var(--color-success))",
    },
    {
      icon: <Users size={48} />,
      number: "50+",
      label: "Partner Shelters",
      iconColor: "rgb(var(--color-info))",
    },
  ]

  return (
    <div className="py-16 bg-gray-60">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              iconColor={stat.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  )
}