import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

export default function Theme() {
  return (
    <section className="rounded-[30px] border border-[#E6B55B]/20 bg-[#211A17]/70 p-8">

      <SectionTitle title="Tema Visual" />

      <div className="grid lg:grid-cols-2 gap-10 mt-8">

        <div>

          <ul className="space-y-4 text-[#D9C8A7]">

            <li>🌻 Sunflower Aesthetic</li>

            <li>✨ Warm Yellow & Cream</li>

            <li>🤎 Elegant & Romantic</li>

            <li>💫 Soft Animation</li>

          </ul>

        </div>

        <div className="grid grid-cols-2 gap-4">

          {[1,2,3,4].map((item)=>(
            <div
              key={item}
              className="relative aspect-square rounded-2xl overflow-hidden border border-[#E6B55B]/20 bg-[#2B211C]"
            >

              <Image
                src="/images/sunflower.png"
                alt="Sunflower"
                fill
                className="object-cover"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}