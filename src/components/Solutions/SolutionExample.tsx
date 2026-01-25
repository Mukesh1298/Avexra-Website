import Image from "next/image";

interface Experiment {
  tag: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceExampleProps {
  experiment: Experiment[];
}

export default function ServiceExample({ experiment }: ServiceExampleProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">
        {experiment.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* LEFT CONTENT */}
              <div>
                <span className="text-xs font-semibold tracking-wide text-blue-600">
                  {item.tag}
                </span>

                <h2 className="mt-3 text-3xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h2>

                <p className="mt-4 text-gray-600 max-w-xl">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="inline-block mt-6 text-sm font-semibold text-blue-600 hover:underline"
                >
                  View all integrations →
                </a>
              </div>

              {/* RIGHT IMAGE CARD */}
              <div className="flex justify-center">
                <div className="bg-white border rounded-2xl shadow-xl p-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={520}
                    height={360}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
