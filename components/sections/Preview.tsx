import PreviewCard from "../ui/PreviewCard";
import { previews } from "@/data/preview";

export default function Preview() {
  return (
    <section className="space-y-6">

      <h2 className="text-center text-[#F7ECD8] text-2xl font-semibold">
        PREVIEW SETIAP HALAMAN
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {previews.map((item) => (
          <PreviewCard
            key={item.id}
            number={item.id}
            title={item.title}
          />
        ))}

      </div>

    </section>
  );
}