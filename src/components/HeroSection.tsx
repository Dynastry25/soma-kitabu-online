import { Button } from "@/components/ui/button";
import { Search, BookOpen, Download, Truck } from "lucide-react";
import heroImage from "@/assets/hero-bookstore.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Bookstore Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Soma Kitabu
          <span className="block text-2xl md:text-3xl font-normal mt-2 text-primary-foreground/90">
            Duka la Vitabu Mtandaoni
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
          Pata vitabu vya hali ya juu, vya kidijitali na vya karatasi. 
          Tunatoa huduma za haraka na za kuaminika kote Tanzania.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="group">
            <Search className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Tafuta Vitabu
          </Button>
          <Button variant="secondary" size="lg" className="group">
            <BookOpen className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Anza Kusoma
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 bg-background/10 backdrop-blur rounded-lg p-4">
            <Download className="h-8 w-8 text-secondary" />
            <div className="text-left">
              <h3 className="font-semibold">Vitabu vya Kidijitali</h3>
              <p className="text-sm text-primary-foreground/80">Pakua na usome papo hapo</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3 bg-background/10 backdrop-blur rounded-lg p-4">
            <BookOpen className="h-8 w-8 text-secondary" />
            <div className="text-left">
              <h3 className="font-semibold">Vitabu vya Karatasi</h3>
              <p className="text-sm text-primary-foreground/80">Utumaji wa haraka</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3 bg-background/10 backdrop-blur rounded-lg p-4">
            <Truck className="h-8 w-8 text-secondary" />
            <div className="text-left">
              <h3 className="font-semibold">Utoaji wa Haraka</h3>
              <p className="text-sm text-primary-foreground/80">Siku 1-3 tu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};