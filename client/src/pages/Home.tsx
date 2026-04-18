import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import { Shield, User, Camera, Lock, Mail, ArrowRight, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Landing Page - Estrutural Vigilância
 * Design: Estética refinada com toques industriais
 * Tipografia: Rajdhani (display) + Inter (corpo)
 * Paleta: Fundo #0B0E14, Dourado #D4AF37, elementos geométricos sutis
 * Características: Grid assimétrico, animações suaves, padrões geométricos
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Detect active section
      const sections = ["inicio", "galeria", "sobre", "servicos", "clientes", "contato"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    console.log("Formulário enviado:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    }, 3000);
  };

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
    "/manus-storage/ESTRUTURAL-1002_0fffa30f.jpg",
    "/manus-storage/ESTRUTURAL-1003_fd4d9fbf.jpg",
    "/manus-storage/ESTRUTURAL-1004_031fa69b.jpg",
    "/manus-storage/ESTRUTURAL-1008_93bbcb41.jpg",
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
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663417193336/nxKAdFuktNtukLvvKxofYW/security-banner-hero-fNoJqENTibGzsYBXpmysQ7.webp')",
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
                className="btn-primary flex items-center gap-2 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section id="galeria" className="py-20 bg-card/50 animate-fade-in">
        <div className="container mx-auto px-4">
          <ImageSlider images={sliderImages} autoPlay={true} interval={6000} />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-card/50 geometric-pattern animate-fade-in">
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
              <div className="floating-card bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-lg p-8 sticky top-32 hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
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
          <div className="mt-16 bg-background border-l-4 border-l-accent rounded-lg p-8 relative overflow-hidden hover:border-l-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Missão & Valores
            </h3>
            <p className="text-gray-300 leading-relaxed font-light relative z-10">
              Nossa missão é proteger pessoas, patrimônios e operações com responsabilidade, disciplina e eficiência, sempre com foco total na excelência dos resultados.
            </p>
          </div>

          {/* Certificações */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <div className="text-3xl text-accent mb-3">🏆</div>
              <h4 className="font-bold text-white mb-2">Certificações</h4>
              <p className="text-sm text-gray-400">Empresa certificada e reconhecida no mercado</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <div className="text-3xl text-accent mb-3">👥</div>
              <h4 className="font-bold text-white mb-2">Profissionais</h4>
              <p className="text-sm text-gray-400">Equipe altamente treinada e capacitada</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <div className="text-3xl text-accent mb-3">🔒</div>
              <h4 className="font-bold text-white mb-2">Confiança</h4>
              <p className="text-sm text-gray-400">Proteção total e segurança garantida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 animate-fade-in">
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
                  className="service-card group hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-accent/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    <Icon className="w-12 h-12 text-accent group-hover:scale-125 transition-transform duration-300 relative z-10" />
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
      <section id="clientes" className="py-20 bg-card/50 geometric-pattern animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge-accent mb-6 w-fit mx-auto">CLIENTES</div>
            <h2 className="section-title">
              Quem <span className="section-title-accent">Confia</span> em Nós
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, index) => (
              <div key={index} className="client-card hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:border-accent/50">
                <p className="text-center text-sm font-semibold text-gray-300 font-light">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 relative overflow-hidden animate-fade-in">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Formulário */}
            <div>
              <div className="badge-accent mb-6 w-fit">FORMULÁRIO</div>
              <h2 className="section-title mb-6">
                Solicite seu <span className="section-title-accent">Orçamento</span>
              </h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome *"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu Email *"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all duration-300"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu Telefone *"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all duration-300"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Sua Empresa"
                  value={formData.company}
                  onChange={handleFormChange}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all duration-300"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all duration-300"
                >
                  <option value="">Selecione um Serviço *</option>
                  <option value="armada">Segurança Armada</option>
                  <option value="desarmada">Segurança Desarmada</option>
                  <option value="eletronica">Segurança Eletrônica</option>
                  <option value="pessoal">Segurança Pessoal e Privada</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Sua Mensagem"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all duration-300"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
                >
                  {formSubmitted ? (
                    <>
                      <Check size={18} />
                      Mensagem Enviada!
                    </>
                  ) : (
                    <>
                      ENVIAR ORÇAMENTO
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <div className="badge-accent mb-6 w-fit">INFORMAÇÕES</div>
              <h2 className="section-title mb-8">
                Entre em <span className="section-title-accent">Contato</span>
              </h2>

              {/* Email */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Email</h4>
                    <a href="mailto:estruturalvigilancia@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                      estruturalvigilancia@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Telefone</h4>
                    <a href="tel:+5521999999999" className="text-accent hover:text-accent/80 transition-colors">
                      +55 (21) 9 9999-9999
                    </a>
                  </div>
                </div>
              </div>

              {/* Localização */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-2">Localização</h4>
                    <p className="text-gray-400 text-sm">Rio de Janeiro, RJ - Brasil</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/50"
              >
                <MessageCircle size={20} />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div>
              <img 
                src="/manus-storage/BM_logo_final_e3696309.png" 
                alt="BM Serviços Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-600 text-sm font-light">
                Mais de 35 anos protegendo o que realmente importa.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#inicio" className="text-gray-600 hover:text-accent transition-colors">Início</a></li>
                <li><a href="#sobre" className="text-gray-600 hover:text-accent transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="text-gray-600 hover:text-accent transition-colors">Serviços</a></li>
                <li><a href="#contato" className="text-gray-600 hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicos" className="text-gray-600 hover:text-accent transition-colors">Segurança Armada</a></li>
                <li><a href="#servicos" className="text-gray-600 hover:text-accent transition-colors">Segurança Desarmada</a></li>
                <li><a href="#servicos" className="text-gray-600 hover:text-accent transition-colors">Segurança Eletrônica</a></li>
                <li><a href="#servicos" className="text-gray-600 hover:text-accent transition-colors">Segurança Pessoal</a></li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors hover:scale-110 transform duration-300">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors hover:scale-110 transform duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors hover:scale-110 transform duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-700 text-sm font-light">
                © 2026 Estrutural Vigilância e Segurança Ltda. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-accent transition-colors">Política de Privacidade</a>
                <a href="#" className="text-gray-600 hover:text-accent transition-colors">Termos de Serviço</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5521999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 animate-bounce"
        title="Conversar no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
