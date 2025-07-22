import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isDigital?: boolean;
}

export const BookCard = ({
  title,
  author,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  category,
  isDigital = false,
}: BookCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-book hover:scale-105 bg-gradient-card">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          {isDigital && (
            <Badge variant="outline" className="text-xs bg-primary text-primary-foreground">
              Digital
            </Badge>
          )}
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-2">na {author}</p>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">
            ({reviewCount})
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary">
            TSh {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              TSh {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Ongeza kwenye Cart
        </Button>
      </CardFooter>
    </Card>
  );
};