import type { ServiceItem } from "@data/services";
import { ChevronRight, Phone, X } from "lucide-react";
import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
  selectedService: ServiceItem;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};
export const ModalDetails = ({ selectedService, isOpen, setOpen }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
        },

        content: {
          top: "50%",
          left: "50%",
          
          height: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      className={`fixed bg-white w-10/11 md:w-1/2 h-3/4 p-0   overflow-hidden rounded-xl border-none shadow-2xl ${
        isOpen ? "fade-in" : "fade-out"
      }`}
    >
      <div className="relative h-[150px] sm:h-[200px]">
        {/* <div className="absolute end-0 p-0  bg-red-400"> */}
        <button

          className="  hidden sm:block  absolute cursor-pointer end-0 text-white p-3 z-30"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>
        {/* </div> */}
        <div
          className="absolute inset-0 z-10 opacity-60"
          style={{ backgroundColor: selectedService.color }}
        />
        <img
          src={selectedService.image || "/placeholder.svg"}
          alt={selectedService.title}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            {selectedService.title}
          </h2>
        </div>
      </div>

      <div className="p-4 sm:p-6 thin-scrollbar md:p-8 overflow-y-auto max-h-[calc(90vh-150px)] sm:max-h-[calc(100vh-400px)]">
        <p className="text-slate-600 mb-6">{selectedService.description}</p>

        <div className="space-y-8">
          {selectedService.details.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3
                className="text-lg sm:text-xl font-bold pb-2 border-b"
                style={{
                  borderColor: `${selectedService.color}30`,
                  color: selectedService.color,
                }}
              >
                {section.title}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-3 p-3 rounded-lg transition-all hover:shadow-md"
                    style={{
                      backgroundColor: `${selectedService.color}05`,
                    }}
                  >
                    <div
                      className="rounded-full p-1 mt-0.5 flex-shrink-0"
                      style={{
                        backgroundColor: `${selectedService.color}15`,
                      }}
                    >
                      <ChevronRight
                        className="h-4 w-4"
                        style={{ color: selectedService.color }}
                      />
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 mb-2 border-t border-slate-500 w-4/4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="text-xs  text-slate-500 w-3/4">
            ¿Necesita más información? Contáctenos para una consulta
            personalizada.
          </div>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+51917549994&text=Hola tengo una consulta..."
            style={{ backgroundColor: selectedService.color }}
            className="cursor-pointer w-1/4 text-white  py-2 rounded-md font-semibold transition transform hover:scale-105 duration-200 flex items-center justify-center space-x-2"
          >
            <Phone size={13} />
            <span className=" text-[9px] sm:text-xs">917549994</span>
          </a>
        </div>
      </div>
      <div className="z-10 sm:hidden   flex justify-start items-center gap-2 p-4">
        <button 
          onClick={() => setOpen(false)}
        className="cursor-pointer end-0 text-red-600 p-3 ">
          <X />
        </button>
       {/*  <a
          target="_blank"
            href="https://api.whatsapp.com/send?phone=+51917549994&text=Hola tengo una consulta..."
          className="
            cursor-pointer w-1/4 text-white
              py-2 rounded-md font-semibold transition
               transform hover:scale-105 duration-200 
               flex items-center justify-center space-x-2
         
         "
          style={{ backgroundColor: selectedService.color }}
        >
          <Phone size={13} />
          <span className="text-[9px]">917549994</span>
        </a> */}
      </div>
    </Modal>
  );
};
