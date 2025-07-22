import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";

const Index = () => {
  const featuredBooks = [
    {
      id: "1",
      title: "Hadithi za Kiswahili",
      author: "Mohammed Salim",
      price: 25000,
      originalPrice: 30000,
      image: bookCover1,
      rating: 5,
      reviewCount: 128,
      category: "Fasihi",
      isDigital: false,
    },
    {
      id: "2",
      title: "Msingi wa Hisabati",
      author: "Dr. Amina Hassan",
      price: 35000,
      image: bookCover2,
      rating: 4,
      reviewCount: 67,
      category: "Elimu",
      isDigital: true,
    },
    {
      id: "3",
      title: "Hadithi za Watoto",
      author: "Grace Mwalimu",
      price: 15000,
      originalPrice: 20000,
      image: bookCover3,
      rating: 5,
      reviewCount: 95,
      category: "Watoto",
      isDigital: false,
    },
  ];

  const categories = [
    { name: "Fasihi", count: 156, color: "bg-primary" },
    { name: "Elimu", count: 98, color: "bg-secondary" },
    { name: "Watoto", count: 67, color: "bg-accent" },
    { name: "Kihistoria", count: 45, color: "bg-muted" },
    { name: "Dini", count: 89, color: "bg-primary" },
    { name: "Biashara", count: 34, color: "bg-secondary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Aina za Vitabu</h2>
            <p className="text-muted-foreground">Chagua aina ya kitabu unachotaka</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group cursor-pointer bg-card rounded-lg p-6 text-center hover:shadow-card-custom transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} vitabu
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Vitabu vya Maarufu</h2>
              <p className="text-muted-foreground">Vitabu vinavyopendekezwa zaidi</p>
            </div>
            <Button variant="outline" className="group">
              Ona Vyote
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Ofa Maalum</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Punguzo la 20% kwa vitabu vyote vya kidijitali wiki hii!
          </p>
          <Button variant="secondary" size="lg" className="group">
            Nunua Sasa
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-sm">SK</span>
                </div>
                <span className="text-xl font-bold">Soma Kitabu</span>
              </div>
              <p className="text-primary-foreground/80">
                Duka bora la vitabu mtandaoni Tanzania
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Vitabu</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-secondary transition-colors">Fasihi</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Elimu</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Watoto</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Dini</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Huduma</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-secondary transition-colors">Utumaji</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Malipo</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Msaada</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Kurudi</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Mawasiliano</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Simu: +255 123 456 789</li>
                <li>Email: info@somakitabu.co.tz</li>
                <li>Dar es Salaam, Tanzania</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 Soma Kitabu. Haki zote zimehifadhiwa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
