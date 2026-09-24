interface ServicePageProps {
  title: string;
  description: string;
}

export const ServicePage = ({ title, description }: ServicePageProps) => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-orange-50 px-4 py-12">
      <section className="mx-auto w-full max-w-3xl rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-3 text-gray-600">{description}</p>
      </section>
    </main>
  );
};