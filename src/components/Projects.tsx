import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Home, Wrench } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Casa Familiar en Barrio Cerrado",
      category: "Residencial",
      description: "Construcción completa de vivienda familiar de 180m² con diseño moderno y eficiencia energética.",
      icon: Home,
      features: ["180m² cubiertos", "4 dormitorios", "Diseño sustentable", "Terminaciones premium"]
    },
    {
      title: "Oficinas Comerciales Centro",
      category: "Comercial",
      description: "Remodelación integral de oficinas en el centro de Tandil, optimizando espacios de trabajo.",
      icon: Building,
      features: ["250m² renovados", "Open space", "Salas de reunión", "Accesibilidad total"]
    },
    {
      title: "Ampliación Residencial",
      category: "Remodelación",
      description: "Ampliación de vivienda existente con nueva planta alta y remodelación de planta baja.",
      icon: Wrench,
      features: ["100m² nuevos", "Nueva planta alta", "Renovación total", "Integración perfecta"]
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Algunos de nuestros trabajos más recientes que reflejan nuestra calidad y profesionalismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 border-0 group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-accent/10 text-accent border-accent/20"
                  >
                    {project.category}
                  </Badge>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary text-sm">Características:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            ¿Te interesa ver más proyectos o necesitás referencias?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors"
          >
            Consultanos por más información →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;