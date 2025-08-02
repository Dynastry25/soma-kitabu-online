import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";

const Cart = () => {
  // Sample cart items
  const cartItems = [
    {
      id: "1",
      title: "Hadithi za Kiswahili",
      author: "Mohammed Salim",
      price: 25000,
      originalPrice: 30000,
      image: bookCover1,
      quantity: 2,
      isDigital: false,
    },
    {
      id: "2",
      title: "Msingi wa Hisabati",
      author: "Dr. Amina Hassan",
      price: 35000,
      image: bookCover2,
      quantity: 1,
      isDigital: true,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5000; // TZS 5,000 for shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Rudi Nyumbani
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Mkoba Wako</h1>
            
            {cartItems.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">Mkoba wako haujaongeza vitabu</p>
                  <Link to="/">
                    <Button>Anza Ununuzi</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-28 object-cover rounded-md"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-muted-foreground mb-2">{item.author}</p>
                          
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-lg font-bold">
                              TSh {item.price.toLocaleString()}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                TSh {item.originalPrice.toLocaleString()}
                              </span>
                            )}
                            {item.isDigital && (
                              <Badge variant="secondary">Kidijitali</Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Muhtasari wa Agizo</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Jumla ya Bidhaa:</span>
                    <span>TSh {subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Gharama za Usafirishaji:</span>
                    <span>TSh {shipping.toLocaleString()}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Jumla:</span>
                    <span>TSh {total.toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full mt-6" size="lg">
                  Endelea na Malipo
                </Button>
                
                <div className="mt-4 text-center">
                  <Link to="/">
                    <Button variant="outline" className="w-full">
                      Endelea na Ununuzi
                    </Button>
                  </Link>
                </div>

                {/* Payment Info */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2">Usalama wa Malipo</h3>
                  <p className="text-sm text-muted-foreground">
                    Malipo yako ni salama. Tunatumia teknolojia ya kisasa ya usalama.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;