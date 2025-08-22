import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Estudio <span className="text-accent">MV</span> Tandil
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Maestro Mayor de Obras matriculado con más de 15 años de experiencia 
              en construcción residencial y comercial en Tandil y zona.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/estudio_mv_tandil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Avenida Avellaneda 966, Tandil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+542494492375" className="hover:text-accent transition-colors">
                  +54 249 4492375
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contacto@estudiomvtandil.site" className="hover:text-accent transition-colors">
                  contacto@estudiomvtandil.site
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/80">
              <li>Construcción Residencial</li>
              <li>Construcción Comercial</li>
              <li>Remodelaciones</li>
              <li>Dirección Técnica</li>
              <li>Diseño de Planos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Estudio MV Tandil. Todos los derechos reservados.
          </p>
          <p className="text-white/60 mt-1">
            Maestro Mayor de Obras - Tandil, Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;