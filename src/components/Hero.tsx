import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Estudio MV Tandil
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-accent">
              Maestro Mayor de Obras en Tandil
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transformamos tus ideas en realidad con más de 15 años de experiencia en construcción. 
            Calidad, profesionalismo y compromiso en cada proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-accent hover:bg-accent-light text-white shadow-accent"
            >
              Solicitar Presupuesto
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
            >
              Ver Proyectos
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">200+</div>
              <div className="text-sm">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;