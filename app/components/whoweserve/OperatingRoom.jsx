import React from 'react'
import Image from 'next/image'
import whoWeServeImg from "@/public/images/whoWeServeImg.png"
import opr1 from "@/public/images/opr1.png"
import opr2 from "@/public/images/opr2.png"
import opr3 from "@/public/images/opr3.png"
import opr4 from "@/public/images/opr4.png"
import * as motion from "framer-motion/client"

const OperatingRoom = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const cards = [
    { image: opr1, alt: "Surgical Drapes & Gowns" , description: "Our OR consumables include drapes, gowns, covers, wraps, pouches, and cleaning solutions, ensuring contamination protection."  },
    { image: opr2, alt: "Sterilization Wraps" , description: "Maintaining hygiene and safety in the operating room (OR) is essential for successful surgical procedures and patient outcomes." }, 
    { image: opr3, alt: "Cleaning Solutions" , description: "Additional services include instrument/equipment repair, custom packaging, and OR staff training programs." },
    { image: opr4, alt: "Protection Equipment" , description: "We are dedicated to providing high-quality products and excellent customer service. Contact us for more information or to place a quotation." }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image 
            src={whoWeServeImg} 
            alt="Operating Room Solutions" 
            className="w-full rounded-lg shadow-md"
            priority={true}
          />
        </motion.div>

        <div className="flex flex-col justify-start items-start gap-10 mt-12 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true , amount: 0.5 }}
            className="text-center text-[#222823] text-4xl font-semibold font-primary"
          >
            Operating Room Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true , amount: 0.5 }}
            className=" text-[#222823] text-lg font-normal font-primary leading-relaxed"
          >
            In the operating room, surgeons and nurses play a vital role in preventing infections and protecting vulnerable patients. Safecare's Bensan disinfection line ensures top-quality chemical reprocessing, including scrubs and surface disinfectants, while its physical barriers like packs, drapes, and wrappers provide complete infection control, meeting the highest safety standards.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true , amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="flex flex-col gap-4 px-8 pt-10 pb-8  bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e9ecef]"
            >
              <div className="flex justify-center items-center">
                <Image 
                  src={card.image} 
                  alt={card.alt}
                  className=""
                />
              </div>
              <p className="text-center text-[#222823] text-base font-normal font-primary">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OperatingRoom