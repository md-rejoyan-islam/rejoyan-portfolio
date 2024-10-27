import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-10">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        My Services
      </h2>
      <div className="py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services?.map((service, index) => (
          <ServiceCard service={service} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}
