
// @flow strict

import Image from "next/image";
import services from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { servicesData } from "@/utils/services";

function Services() {
  return (
    <div
      id="services"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Services"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>

          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Services
          </span>

          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={services} />
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="flex flex-col gap-6">
              {servicesData.map((service) => (
                <GlowCard
                  key={service.id}
                  identifier={`service-${service.id}`}
                >
                  <div className="p-3 relative">

                    <Image
                      src="/blur-23.svg"
                      alt=""
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />

                    <div className="flex items-center gap-x-8 px-3 py-5">

                      {/* Service Image */}
                      <div className="relative min-w-[50px] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] transition-all duration-300 hover:scale-125">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Service Content */}
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {service.title}
                        </p>

                        <p className="text-sm sm:text-base text-gray-300">
                          {service.description}
                        </p>
                      </div>

                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services;