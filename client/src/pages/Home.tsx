import Header from "@/components/Header";
import { Shield, User, Camera, Lock, Mail, ArrowRight } from "lucide-react";

/**
 * Landing Page - Estrutural Vigilância
 * Design: Tema escuro profissional com destaque em dourado
 * Paleta: Fundo #0B0E14, Dourado #D4AF37, Branco para textos
 * Tipografia: Montserrat para títulos, Lora para corpo
 */

export default function Home() {
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="badge-accent mb-6 w-fit">
              MAIS DE 35 ANOS DE EXCELÊNCIA
            </div>

            <h1 className="section-title mb-6">
              Protegendo o que <span className="section-title-accent">realmente importa</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
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

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="badge-accent mb-6 w-fit">QUEM SOMOS</div>
              <h2 className="section-title mb-8">
                Experiência e <span className="section-title-accent">Comprometimento</span>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  Com mais de 35 anos de experiência no segmento de Segurança e Vigilância, a Estrutural Vigilância e Segurança Ltda. nasceu com o propósito de atender com excelência clientes e parceiros.
                </p>

                <p>
                  Somos especializados em soluções completas de segurança, combinando tecnologia avançada com atuação estratégica de profissionais altamente capacitados.
                </p>

                <p>
                  Nosso diferencial está na qualidade da prestação de serviços, no comprometimento da equipe e na confiança construída em cada contrato. Atuamos protegendo empresas, residências, condomínios, indústrias, obras e eventos, garantindo tranquilidade e segurança.
                </p>
              </div>

              {/* Experience Badge */}
              <div className="mt-8 bg-card border border-border rounded-lg p-6 inline-block">
                <div className="text-4xl font-bold text-accent mb-2">35+</div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Anos de Experiência
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417193336/nxKAdFuktNtukLvvKxofYW/surveillance-tech-48r4ocsrQGGoT7ovoRNyKf.webp"
                alt="Tecnologia de Segurança"
                className="rounded-lg shadow-2xl shadow-accent/20"
              />
            </div>
          </div>

          {/* Missão & Valores */}
          <div className="mt-16 bg-background border border-border rounded-lg p-8 border-l-4 border-l-accent">
            <h3 className="text-2xl font-bold text-white mb-4">Missão & Valores</h3>
            <p className="text-gray-300 leading-relaxed">
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
                <div key={index} className="service-card group">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section id="clientes" className="py-20 bg-card/50">
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
                <p className="text-center text-sm font-semibold text-gray-300">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="badge-accent mb-6 w-fit mx-auto">CONTATO</div>
            <h2 className="section-title mb-6">
              Entre em <span className="section-title-accent">Contato</span>
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Estamos prontos para proteger o que é importante para você.
            </p>

            {/* Email Card */}
            <div className="bg-card border border-border rounded-lg p-8 inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <a
                  href="mailto:estruturalvigilancia@gmail.com"
                  className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
                >
                  estruturalvigilancia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="font-bold text-accent-foreground text-lg">EV</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 Estrutural Vigilância e Segurança Ltda. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs">
              Mais de 35 anos protegendo o que realmente importa.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
