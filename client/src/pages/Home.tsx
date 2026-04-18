import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import { Shield, User, Camera, Lock, Mail, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Landing Page - Estrutural Vigilância
 * Design: Estética refinada com toques industriais
 * Tipografia: Rajdhani (display) + Inter (corpo)
 * Paleta: Fundo #0B0E14, Dourado #D4AF37, elementos geométricos sutis
 * Características: Grid assimétrico, animações suaves, padrões geométricos
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Segurança Armada",
      description: "Profissionais altamente treinados e equipados para proteção máxima de patrimônios e pessoas.",
    },
    {
      icon: User,
      title: "Segurança Desarmada",
      description: "Vigilância presencial com foco em prevenção e controle de acesso.",
    },
    {
      icon: Camera,
      title: "Segurança Eletrônica",
      description: "Tecnologia avançada em monitoramento e sistemas integrados de segurança.",
    },
    {
      icon: Lock,
      title: "Segurança Pessoal e Privada",
      description: "Proteção personalizada e discreta para executivos e eventos.",
    },
  ];

  const clients = [
    "BR Capital",
    "Circo Crescer e Viver Flamengo",
    "MPE Engenharia",
    "Banco Mumbuca",
    "Fundo SPE Brick",
    "Instituto Realizando o Futuro",
    "Somar",
    "Smart Luz",
    "Codemar",
    "ICTIM Maricá",
    "Concrejato",
  ];

  const sliderImages = [
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663417193336/nxKAdFuktNtukLvvKxofYW/hero-security-bg-CPWUJ98iKemot6wQTNy7Zp.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663417193336/nxKAdFuktNtukLvvKxofYW/armed-security-T9VyniE7ZrREYuJKxAZZcg.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663417193336/nxKAdFuktNtukLvvKxofYW/surveillance-tech-48r4ocsrQGGoT7ovoRNyKf.webp",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663417193336/nxKAdFuktNtukLvvKxofYW/building-protection-QDLe72AyMaYafLg9pSkinB.webp",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663417193336/nxKAdFuktNtukLvvKxofYW/hero-security-bg-CPWUJ98iKemot6wQTNy7Zp.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-5 geometric-pattern"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <div className="badge-accent mb-6 w-fit">
              MAIS DE 35 ANOS DE EXCELÊNCIA
            </div>

            <h1 className="section-title mb-6">
              Protegendo o que <span className="section-title-accent">realmente importa</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
              Soluções completas de segurança que combinam tecnologia avançada com profissionais altamente capacitados. Confiança, comprometimento e excelência em cada contrato.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection("contato")}
                className="btn-primary flex items-center gap-2"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section id="galeria" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <ImageSlider images={sliderImages} autoPlay={true} interval={6000} />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-card/50 geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left Content - Spans 2 columns */}
            <div className="md:col-span-2">
              <div className="badge-accent mb-6 w-fit">QUEM SOMOS</div>
              <h2 className="section-title mb-8">
                Experiência e <span className="section-title-accent">Comprometimento</span>
              </h2>

              <div className="space-y-6 text-gray-300 font-light">
                <p className="text-base leading-relaxed">
                  Com mais de 35 anos de experiência no segmento de Segurança e Vigilância, a Estrutural Vigilância e Segurança Ltda. nasceu com o propósito de atender com excelência clientes e parceiros.
                </p>

                <p className="text-base leading-relaxed">
                  Somos especializados em soluções completas de segurança, combinando tecnologia avançada com atuação estratégica de profissionais altamente capacitados.
                </p>

                <p className="text-base leading-relaxed">
                  Nosso diferencial está na qualidade da prestação de serviços, no comprometimento da equipe e na confiança construída em cada contrato. Atuamos protegendo empresas, residências, condomínios, indústrias, obras e eventos, garantindo tranquilidade e segurança.
                </p>
              </div>
            </div>

            {/* Right - Experience Badge (Floating Card) */}
            <div className="md:col-span-1">
              <div className="floating-card bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-lg p-8 sticky top-32">
                <div className="text-5xl font-bold text-accent mb-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  35+
                </div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Anos de Experiência
                </div>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-accent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Missão & Valores */}
          <div className="mt-16 bg-background border-l-4 border-l-accent rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Missão & Valores
            </h3>
            <p className="text-gray-300 leading-relaxed font-light relative z-10">
              Nossa missão é proteger pessoas, patrimônios e operações com responsabilidade, disciplina e eficiência, sempre com foco total na excelência dos resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge-accent mb-6 w-fit mx-auto">NOSSOS SERVIÇOS</div>
            <h2 className="section-title">
              Soluções Completas em <span className="section-title-accent">Segurança</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="service-card group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-accent/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <Icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section id="clientes" className="py-20 bg-card/50 geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge-accent mb-6 w-fit mx-auto">CLIENTES</div>
            <h2 className="section-title">
              Quem <span className="section-title-accent">Confia</span> em Nós
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <p className="text-center text-sm font-semibold text-gray-300 font-light">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="badge-accent mb-6 w-fit mx-auto">CONTATO</div>
            <h2 className="section-title mb-6">
              Entre em <span className="section-title-accent">Contato</span>
            </h2>
            <p className="text-lg text-gray-300 mb-12 font-light">
              Estamos prontos para proteger o que é importante para você.
            </p>

            {/* Email Card */}
            <div className="bg-card border border-border rounded-lg p-8 inline-block hover:border-accent/50 transition-all duration-300 group">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:estruturalvigilancia@gmail.com"
                  className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  estruturalvigilancia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <img 
              src="/manus-storage/BM_blue_e61183f3.png" 
              alt="BM Serviços Logo" 
              className="h-16 w-auto"
            />
            <p className="text-gray-400 text-sm font-light">
              © 2026 Estrutural Vigilância e Segurança Ltda. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs font-light">
              Mais de 35 anos protegendo o que realmente importa.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
