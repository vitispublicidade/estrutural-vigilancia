import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/manus-storage/BM_blue_clean_2c4b9d22.png" 
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
              className="text-sm font-semibold text-gray-800 hover:text-accent transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contato")}
            className="px-6 py-2 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-all duration-300 border-2 border-accent text-sm"
          >
            SOLICITAR ORÇAMENTO
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-semibold text-gray-800 hover:text-accent transition-colors duration-300 py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contato")}
              className="px-6 py-2 bg-accent text-accent-foreground font-bold rounded hover:bg-accent/90 transition-all duration-300 border-2 border-accent text-sm w-full"
            >
              SOLICITAR ORÇAMENTO
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
