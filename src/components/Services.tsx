import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, Wrench, ClipboardList, PenTool } from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceDirection from "@/assets/service-direction.jpg";
import servicePlans from "@/assets/service-plans.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Construcción Residencial",
      description: "Casas familiares, ampliaciones y construcciones desde cero con los más altos estándares de calidad.",
      image: serviceResidential,
    },
    {
      icon: Building,
      title: "Construcción Comercial", 
      description: "Oficinas, locales comerciales y edificios corporativos diseñados para maximizar la funcionalidad.",
      image: serviceCommercial,
    },
    {
      icon: Wrench,
      title: "Remodelaciones",
      description: "Renovamos y modernizamos espacios existentes, dándoles nueva vida y funcionalidad.",
      image: serviceRenovation,
    },
    {
      icon: ClipboardList,
      title: "Dirección Técnica",
      description: "Supervisión profesional de obras, garantizando cumplimiento de normas y plazos establecidos.",
      image: serviceDirection,
    },
    {
      icon: PenTool,
      title: "Diseño de Planos",
      description: "Proyectos arquitectónicos detallados, planos municipales y documentación técnica completa.",
      image: servicePlans,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en construcción, desde el diseño inicial hasta la entrega final
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-card transition-all duration-300 border-0 group hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-light transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-primary font-semibold mb-4">
            ¿Necesitas un servicio específico?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center text-accent hover:text-accent-light font-medium transition-colors"
          >
            Consultanos sin compromiso →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;