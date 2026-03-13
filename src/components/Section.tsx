interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ title, children, className = "" }: SectionProps) => (
  <div className={className}>
    <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
    {children}
  </div>
);
