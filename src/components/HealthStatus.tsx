interface HealthStatusProps {
  status: string;
}

export const HealthStatus = ({ status }: HealthStatusProps) => (
  <div
    className="rounded-lg p-4"
    style={{ backgroundColor: "var(--color-success-light-bg)" }}
  >
    <div className="flex items-center gap-3">
      <span className="text-2xl">✓</span>
      <div>
        <p className="text-sm font-semibold" style={{ color: "rgb(var(--color-success))" }}>
          Health Status
        </p>
        <p className="text-sm font-bold" style={{ color: "rgb(var(--color-success))" }}>
          {status}
        </p>
      </div>
    </div>
  </div>
);
