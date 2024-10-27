import { services } from "@/data/services";
import ShowOneByOne from "../animation/ShowOneByOne";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-10">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        My Services
      </h2>
      <div className="py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services?.map((service, index) => (
          <ShowOneByOne index={index} key={index}>
            <ServiceCard service={service} key={index} index={index} />
            {/* <div className="p-4 h-full   bg-cover  overflow-hidden rounded-lg border border-project-card-border bg-project-card-bg-secondary  transition-all duration-500  backdrop-blur-3xl ">
              <div>
                <div>{service?.icon}</div>
                <div>
                  <h3 className="text-text-primary text-2xl font-semibold py-2">
                    {service?.name}
                  </h3>
                  <p className="text-text-secondary">{service?.description}</p>
                </div>
              </div>
            </div> */}
          </ShowOneByOne>
        ))}
      </div>
    </section>
  );
}
