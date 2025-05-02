import { SERVICES } from "@data/services";
import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ModalDetails } from "./ModalDetails";

export const ServiceCard = () => {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Service cards navigation */}
      <div className="container mx-auto px-4 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group transition-all duration-300 ${
                activeService.id === service.id
                  ? "ring-2 shadow-lg"
                  : "hover:shadow-md bg-white"
              }`}
              style={{
                // ringColor: service.color,
                boxShadow:
                  activeService.id === service.id
                    ? `0 10px 25px -5px ${service.color}20`
                    : "",
              }}
            >
              <div className="relative h-36 sm:h-48">
                <div
                  className="absolute inset-0 z-10 opacity-60 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: service.color }}
                />
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute top-0 right-0 m-3 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeService.id === service.id
                        ? service.color
                        : "rgba(255,255,255,0.3)",
                    opacity: activeService.id === service.id ? 1 : 0,
                    transform:
                      activeService.id === service.id
                        ? "scale(1)"
                        : "scale(0.8)",
                  }}
                >
                  <ChevronRight className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3
                  className="text-lg sm:text-xl font-bold mb-1 sm:mb-2"
                  style={{
                    color:
                      activeService.id === service.id
                        ? service.color
                        : "#1e293b",
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                  {service.description}
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-lg px-4 mt-5 
                
                cursor-pointer items-center gap-x-2 
                sm:px-6 py-2 sm:py-3 h-auto text-white group w-full sm:w-auto
                sm:hidden"
                  style={{ backgroundColor: service.color }}
                >
                  <span
                    className="font-semibold text-center transition-all duration-200 ease-in-out hover:text-lg
                "
                  >
                    Ver más
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured service section */}
      <div className="container mx-auto px-4 mb-16 hidden sm:block">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image section */}
            <div className="relative h-48 sm:h-64 lg:h-auto order-1">
              <div
                className="absolute inset-0 z-10 opacity-30"
                style={{ backgroundColor: activeService.color }}
              ></div>
              <img
                src={activeService.image || "/placeholder.svg"}
                alt={activeService.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content section */}
            <div className="p-5 sm:p-8 lg:p-12 order-2">
              <div
                className="inline-block px-3 py-1 rounded-full text-2xl font-medium mb-3 sm:mb-4"
                style={{
                  backgroundColor: `${activeService.color}15`,
                  color: activeService.color,
                }}
              >
                {activeService.title}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Soluciones en {activeService.title}
              </h3>
              <p className="text-slate-600 mb-5 sm:mb-8 text-sm sm:text-base">
                {activeService.description}
              </p>

              {/* Preview of services */}
              <div className="mb-5 sm:mb-8">
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                  Servicios destacados:
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {activeService.details[0].items
                    .slice(0, 3)
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: activeService.color }}
                        />
                        <span className="text-slate-700 text-sm sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-lg px-4 inline-flex cursor-pointer items-center gap-x-2 sm:px-6 py-2 sm:py-3 h-auto text-white group w-full sm:w-auto"
                style={{ backgroundColor: activeService.color }}
              >
                <span className="font-semibold">Ver más</span>
                <ArrowRight size={15} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal details */}
      <ModalDetails
        selectedService={activeService}
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
      />
    </>
  );
};
