import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, whatsappUrl } from "@/lib/config";

const services = [
  {
    title: "Placards y roperos",
    text: "Aprovechamos cada centímetro con diseños a medida y herrajes de calidad.",
  },
  {
    title: "Vestidores",
    text: "Espacios organizados con estantes, cajoneras y barrales a tu medida.",
  },
  {
    title: "Cocinas y bajomesadas",
    text: "Muebles funcionales y resistentes, pensados para el uso diario.",
  },
  {
    title: "Muebles para el hogar",
    text: "Living, escritorios, vanitorys y todo lo que necesites, a medida.",
  },
];

const gallery = [
  { src: "/images/mueble-1.jpeg", alt: "Placard a medida con cajonera" },
  { src: "/images/mueble-2.jpg", alt: "Vestidor a medida" },
  { src: "/images/mueble-3.jpg", alt: "Mueble a medida" },
];

const steps = [
  { n: "01", title: "Consulta", text: "Nos contás qué necesitás por WhatsApp." },
  { n: "02", title: "Medición y diseño", text: "Vamos, medimos y armamos el diseño." },
  { n: "03", title: "Fabricación", text: "Construimos tu mueble en taller." },
  { n: "04", title: "Instalación", text: "Lo colocamos y queda listo para usar." },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-arena bg-crema/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-extrabold tracking-wide">
            DESING <span className="font-medium text-madera">Amoblamientos</span>
          </span>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li><a href="#servicios" className="hover:text-madera">Servicios</a></li>
            <li><a href="#trabajos" className="hover:text-madera">Trabajos</a></li>
            <li><a href="#proceso" className="hover:text-madera">Proceso</a></li>
            <li><a href="#contacto" className="hover:text-madera">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-script text-3xl text-madera">{SITE.tagline}</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-6xl">
              Muebles pensados para tu espacio
            </h1>
            <p className="mt-6 max-w-md text-lg text-carbon/80">
              Diseñamos y fabricamos a medida en {SITE.location}. Presupuestos
              sin cargo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-carbon px-7 py-3 font-semibold text-crema transition hover:bg-madera"
              >
                Pedí tu presupuesto
              </a>
              <a
                href="#trabajos"
                className="rounded-full border-2 border-carbon px-7 py-3 font-semibold transition hover:bg-carbon hover:text-crema"
              >
                Ver trabajos
              </a>
            </div>
          </div>
          <div className="mx-auto h-72 w-72 overflow-hidden rounded-full shadow-xl md:h-96 md:w-96">
            <Image
              src="/images/logo.png"
              alt="Logo Desing Amoblamientos"
              width={600}
              height={600}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="bg-arena/50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              Qué hacemos
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-carbon/70">
              Cada mueble se diseña según tus medidas, tu estilo y tu presupuesto.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl border border-arena bg-crema p-6 shadow-sm"
                >
                  <div className="mb-4 h-1 w-10 rounded bg-madera" />
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-carbon/75">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Galería */}
        <section id="trabajos" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              Nuestros trabajos
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {gallery.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="bg-carbon py-20 text-crema">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-extrabold md:text-4xl">
              Cómo trabajamos
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n}>
                  <span className="font-script text-5xl text-madera">{s.n}</span>
                  <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-crema/75">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-arena py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-script text-3xl text-madera">Hablemos</p>
          <h2 className="mt-1 text-3xl font-extrabold md:text-4xl">
            Contanos tu idea
          </h2>
          <p className="mx-auto mt-3 max-w-md text-carbon/75">
            Escribinos y te pasamos un presupuesto sin cargo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-8 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Escribir por WhatsApp
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-carbon px-8 py-3 font-semibold text-crema transition hover:bg-madera"
            >
              Ver Instagram
            </a>
          </div>
          <p className="mt-8 text-sm text-carbon/70">
            {SITE.phones.join(" · ")} — {SITE.location}
          </p>
          <p className="mt-6 text-xs text-carbon/50">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}