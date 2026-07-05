"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const GALLERY_IMAGES = [
  { src: "/images/tikal-62607e08.jpg", alt: "Librería blanca con iluminación cálida", category: "Librerías" },
  { src: "/images/tikal-84bfba2b.jpg", alt: "Librería con espejo e iluminación integrada", category: "Librerías" },
  { src: "/images/tikal-9177a811.jpg", alt: "Mueble de salón en roble con TV", category: "Salones" },
  { src: "/images/tikal-a433f41b.jpg", alt: "Estantería moderna retroiluminada", category: "Salones" },
  { src: "/images/tikal-aaacc44c.jpg", alt: "Mueble de salón blanco con vitrina", category: "Salones" },
  { src: "/images/tikal-b55ac634.jpg", alt: "Estantería de roble con luz ambiental", category: "Librerías" },
  { src: "/images/tikal-20e32586.jpg", alt: "Despacho en roble con librería iluminada", category: "Despachos" },
  { src: "/images/tikal-784859aa.jpg", alt: "Oficina con estantería y escritorio de madera", category: "Despachos" },
  { src: "/images/tikal-bd84b542.jpg", alt: "Escritorio moderno con estantería", category: "Despachos" },
  { src: "/images/tikal-f751995b.jpg", alt: "Salón con librería negro y roble", category: "Salones" },
  { src: "/images/tikal-5c678e37.jpg", alt: "Salón con sofá y estantería de lamas", category: "Salones" },
  { src: "/images/tikal-93131d56.jpg", alt: "Mueble de TV minimalista blanco y roble", category: "Salones" },
];

const SERVICES = [
  {
    title: "Librerías",
    description: "Diseños a medida que transforman tus paredes en espacios funcionales y elegantes con iluminación integrada.",
    image: "/images/tikal-62607e08.jpg",
  },
  {
    title: "Muebles a Medida",
    description: "Creamos composiciones únicas según tus gustos, adaptando cada pieza a las medidas y acabados que necesitas.",
    image: "/images/tikal-84bfba2b.jpg",
  },
  {
    title: "Salones",
    description: "Muebles de televisión, aparadores y composiciones completas para crear el salón perfecto.",
    image: "/images/tikal-e6038fbc.jpg",
  },
  {
    title: "Despachos",
    description: "Espacios de trabajo a medida con librerías, escritorios y almacenamiento integrado para máxima funcionalidad.",
    image: "/images/tikal-20e32586.jpg",
  },
];

const SCHEDULE = [
  { day: "Lunes", hours: "11:00 – 21:00" },
  { day: "Martes", hours: "11:00 – 21:00" },
  { day: "Miércoles", hours: "11:00 – 21:00" },
  { day: "Jueves", hours: "11:00 – 21:00" },
  { day: "Viernes", hours: "11:00 – 21:00" },
  { day: "Sábado", hours: "11:00 – 21:00" },
  { day: "Domingo", hours: "Cerrado" },
];

export default function Home() {
  useScrollReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ───────── NAVBAR ───────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-scrolled py-4" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a
            href="#inicio"
            className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl tracking-[0.25em] font-light text-foreground"
          >
            TIKAL
          </a>
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-foreground transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 ${
          menuOpen ? "open" : ""
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-widest text-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* ───────── HERO ───────── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/tikal-5c678e37.jpg"
            alt="Interior moderno con muebles TIKAL"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-white/45" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="hero-line visible">
            <span className="font-[family-name:var(--font-cormorant)] text-sm md:text-base tracking-[0.4em] uppercase text-warm-dark font-light">
              Muebles a medida · Las Rozas de Madrid
            </span>
          </div>
          <div className="mt-4 hero-line visible">
            <span className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1]">
              Fabricamos
            </span>
          </div>
          <div className="hero-line visible">
            <span className="font-[family-name:var(--font-cormorant)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic text-warm-dark leading-[1.1]">
              tus ideas
            </span>
          </div>
          <div className="mt-6 hero-line visible">
            <span className="text-base md:text-lg font-light text-muted max-w-lg mx-auto block leading-relaxed">
              Realizamos composiciones según tus gustos adaptando nuestros
              productos a tus necesidades.
            </span>
          </div>
          <div className="mt-10 hero-line visible">
            <span>
              <a
                href="#contacto"
                className="cta-btn inline-block border border-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-light text-foreground"
              >
                <span>Pide presupuesto</span>
              </a>
            </span>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-xs tracking-[0.3em] uppercase text-muted font-light">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-warm-light/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-warm animate-scroll-line" />
          </div>
        </div>
      </section>

      {/* ───────── ABOUT ───────── */}
      <section id="nosotros" className="py-20 md:py-28 bg-background relative grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="reveal text-sm tracking-[0.3em] uppercase text-warm font-light mb-4">
                Sobre nosotros
              </p>
              <h2 className="reveal delay-100 font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-foreground">
                Transformamos tus ideas en realidad
              </h2>
              <div className="reveal delay-200 mt-4 h-[1px] bg-stone w-20" />
              <p className="reveal delay-300 mt-8 text-base md:text-lg font-light text-muted leading-relaxed">
                Ubicados en Las Rozas de Madrid, en Tikal Muebles nos
                especializamos en transformar tus ideas en realidad. Somos más
                que una tienda de muebles: ofrecemos soluciones personalizadas
                que se adaptan perfectamente a tus necesidades y estilo.
              </p>
              <p className="reveal delay-400 mt-6 text-base md:text-lg font-light text-muted leading-relaxed">
                Con un enfoque en la personalización, creamos diseños a medida
                en diversas medidas y acabados, siempre con la máxima calidad y
                atención al detalle.
              </p>
            </div>
            <div className="reveal-scale delay-200">
              <div className="img-hover aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/tikal-e6038fbc.jpg"
                  alt="Salón diseñado por TIKAL Muebles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PHILOSOPHY ───────── */}
      <section className="py-20 md:py-28 bg-cream relative grain">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h3 className="reveal font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-light italic text-foreground leading-relaxed">
            &ldquo;Cada espacio es único. Cada mueble, una historia que merece
            ser contada a medida.&rdquo;
          </h3>
          <div className="reveal delay-200 mt-8 flex justify-center">
            <div className="h-[1px] bg-warm-light w-16" />
          </div>
          <p className="reveal delay-300 mt-6 text-sm tracking-[0.3em] uppercase text-warm font-light">
            Tikal Muebles
          </p>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section id="servicios" className="py-20 md:py-28 bg-background relative grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <p className="reveal text-sm tracking-[0.3em] uppercase text-warm font-light mb-4">
              Nuestros servicios
            </p>
            <h2 className="reveal delay-100 font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Lo que hacemos
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span className="reveal text-sm tracking-[0.3em] uppercase text-warm font-light">
                    0{i + 1}
                  </span>
                  <h3 className="reveal delay-100 font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-foreground mt-3">
                    {service.title}
                  </h3>
                  <div className="reveal delay-200 mt-4 h-[1px] bg-stone w-16" />
                  <p className="reveal delay-300 mt-6 text-base font-light text-muted leading-relaxed max-w-md">
                    {service.description}
                  </p>
                  <a
                    href="#contacto"
                    className="reveal delay-400 inline-block mt-8 text-sm tracking-[0.15em] uppercase font-light text-foreground border-b border-foreground pb-1 hover:text-warm hover:border-warm transition-colors duration-300"
                  >
                    Pide presupuesto
                  </a>
                </div>
                <div className={`reveal-scale delay-200 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="img-hover aspect-[3/2] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PROJECTS GALLERY ───────── */}
      <section id="proyectos" className="py-20 md:py-28 bg-cream relative grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <p className="reveal text-sm tracking-[0.3em] uppercase text-warm font-light mb-4">
              Portfolio
            </p>
            <h2 className="reveal delay-100 font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Proyectos realizados
            </h2>
            <p className="reveal delay-200 mt-6 text-base font-light text-muted max-w-lg mx-auto">
              Cada proyecto es una colaboración única entre nuestro equipo y el
              cliente para crear espacios que inspiran.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`reveal-scale ${
                  i % 3 === 0
                    ? "delay-100"
                    : i % 3 === 1
                    ? "delay-200"
                    : "delay-300"
                } img-hover group relative ${
                  i === 3 ? "sm:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    i === 3 ? "aspect-[3/4]" : "aspect-[4/3]"
                  } overflow-hidden`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end justify-start p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-white text-xs tracking-[0.2em] uppercase font-light">
                        {img.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CUSTOM PROJECTS CTA ───────── */}
      <section className="py-20 md:py-28 bg-background relative grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="reveal-scale delay-200">
              <div className="img-hover aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/tikal-e4e7cdf1.jpg"
                  alt="Espacio funcional y acogedor por TIKAL"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <p className="reveal text-sm tracking-[0.3em] uppercase text-warm font-light mb-4">
                Proyectos personalizados
              </p>
              <h2 className="reveal delay-100 font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-foreground">
                Tu proyecto, a tu medida
              </h2>
              <div className="reveal delay-200 mt-4 h-[1px] bg-stone w-20" />
              <p className="reveal delay-300 mt-8 text-base md:text-lg font-light text-muted leading-relaxed">
                Además de nuestra oferta estándar, en Tikal Muebles nos
                especializamos en proyectos de amueblado a medida. Trabajamos
                contigo para entender tus necesidades y deseos, creando piezas
                únicas que se integran perfectamente en tu hogar.
              </p>
              <div className="reveal delay-400 mt-10">
                <a
                  href="#contacto"
                  className="cta-btn inline-block border border-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-light text-foreground"
                >
                  <span>Pide presupuesto</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── INSTAGRAM CTA ───────── */}
      <section className="py-20 md:py-28 bg-cream relative grain">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-warm font-light mb-4">
            Síguenos
          </p>
          <h3 className="reveal delay-100 font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-foreground">
            @mueblestikal
          </h3>
          <p className="reveal delay-200 mt-4 text-base font-light text-muted">
            Descubre más inspiración y proyectos en nuestro Instagram.
          </p>
          <div className="reveal delay-300 mt-8">
            <a
              href="https://www.instagram.com/mueblestikal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase font-light text-foreground border-b border-foreground pb-1 hover:text-warm hover:border-warm transition-colors duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ───────── CONTACT / LOCATION ───────── */}
      <section id="contacto" className="py-20 md:py-28 bg-foreground text-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="reveal text-sm tracking-[0.3em] uppercase text-warm-light font-light mb-4">
                Contacto
              </p>
              <h2 className="reveal delay-100 font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15]">
                Dónde estamos
              </h2>
              <div className="reveal delay-200 mt-4 h-[1px] bg-white/20 w-20" />
              <div className="reveal delay-300 mt-10 space-y-6">
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-warm-light font-light mb-2">
                    Dirección
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    C. Oxford, 4B
                    <br />
                    28232 Las Rozas de Madrid, Madrid
                  </p>
                </div>
                <div>
                  <p className="text-sm tracking-[0.2em] uppercase text-warm-light font-light mb-2">
                    Teléfono
                  </p>
                  <a
                    href="tel:+34681918194"
                    className="text-lg font-light hover:text-warm-light transition-colors duration-300"
                  >
                    681 91 81 94
                  </a>
                </div>
                <div className="flex gap-6 mt-8">
                  <a
                    href="https://www.instagram.com/mueblestikal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://www.pinterest.es/mueblestikal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    aria-label="Pinterest"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="reveal text-sm tracking-[0.3em] uppercase text-warm-light font-light mb-4">
                Horario
              </p>
              <h3 className="reveal delay-100 font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light">
                Horario de apertura
              </h3>
              <div className="reveal delay-200 mt-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 text-sm tracking-[0.2em] uppercase text-warm-light font-light">
                        Día
                      </th>
                      <th className="text-right py-3 text-sm tracking-[0.2em] uppercase text-warm-light font-light">
                        Horario
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCHEDULE.map((row) => (
                      <tr key={row.day} className="border-b border-white/5">
                        <td className="py-4 text-base font-light">{row.day}</td>
                        <td
                          className={`py-4 text-base font-light text-right ${
                            row.hours === "Cerrado" ? "text-warm-light" : ""
                          }`}
                        >
                          {row.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="py-10 bg-foreground border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#inicio"
            className="font-[family-name:var(--font-cormorant)] text-xl tracking-[0.25em] font-light text-white/60"
          >
            TIKAL
          </a>
          <p className="text-xs text-white/30 font-light tracking-wider">
            &copy; {new Date().getFullYear()} Tikal Muebles. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
