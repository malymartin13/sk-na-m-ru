import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  {
    src: gallery1,
    alt: "Luxusní walk-in šatna s dřevěnými policemi",
  },
  {
    src: gallery2,
    alt: "Minimalistická skříň s bílými posuvnými dveřmi",
  },
  {
    src: gallery3,
    alt: "Vestavěná skříň se zrcadlovými dveřmi",
  },
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Realizace
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Podívejte se na příklady vestavěných skříní na míru
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
