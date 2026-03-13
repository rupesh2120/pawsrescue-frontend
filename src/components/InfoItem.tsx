interface InfoItemProps {
  label: string;
  value: string;
  icon: string;
  valueColor?: string;
}

export const InfoItem = ({ label, value, icon, valueColor = "text-gray-900" }: InfoItemProps) => (
  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
    <span className="text-xl">{icon}</span>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`font-semibold text-sm ${valueColor}`}>{value}</p>
    </div>
  </div>
);
