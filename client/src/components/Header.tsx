import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = ["inicio", "sobre", "servicos", "clientes", "contato"];
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "INÍCIO", id: "inicio" },
    { label: "SOBRE", id: "sobre" },
    { label: "SERVIÇOS", id: "servicos" },
    { label: "CLIENTES", id: "clientes" },
    { label: "CONTATO", id: "contato" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white border-b border-gray-200 shadow-md" 
        : "bg-white border-b border-gray-200 shadow-sm"
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/manus-storage/BM_logo_final_e3696309.png" 
            alt="BM Serviços Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-semibold transition-all duration-300 relative pb-1 ${
                activeSection === item.id
                  ? "text-accent"
                  : "text-gray-800 hover:text-accent"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent animate-scale-in"></div>
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contato")}
            className="px-6 py-2 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-all duration-300 border-2 border-accent text-sm hover:shadow-lg hover:shadow-accent/50"
          >
            SOLICITAR ORÇAMENTO
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 hover:text-accent transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 animate-slide-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm font-semibold transition-all duration-300 py-2 pl-2 border-l-2 ${
                  activeSection === item.id
                    ? "text-accent border-l-accent"
                    : "text-gray-800 border-l-transparent hover:text-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contato")}
              className="px-6 py-2 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-all duration-300 border-2 border-accent text-sm w-full hover:shadow-lg hover:shadow-accent/50"
            >
              SOLICITAR ORÇAMENTO
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
