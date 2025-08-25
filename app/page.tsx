"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Package, Heart, Star, MapPin, Mail, MessageSquare } from "lucide-react"

export default function DwivediTeaPage() {
  const scrollToTeaCollection = () => {
    const element = document.getElementById("tea-collection")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23D2691E' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/dwivedi-tea-logo.png"
              alt="DWIVEDI TEA Logo"
              className="h-40 w-40 md:h-48 md:w-48 drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 20px rgba(74, 44, 42, 0.4)) drop-shadow(0 0 40px rgba(74, 44, 42, 0.2))",
              }}
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#4A2C2A] mb-8 tracking-tight leading-tight drop-shadow-sm italic">
            Fresh, Premium Teas — From Assam to Your Home
          </h2>
          <p className="text-xl md:text-2xl text-[#6B4423] mb-10 max-w-3xl mx-auto font-sans leading-snug font-medium drop-shadow-sm italic">
            From homely blends to festive teas, experience authentic, single-origin freshness — crafted for every tea
            lover and bulk buyer in India.
          </p>
          <Button
            size="lg"
            className="text-xl px-10 py-7 font-sans font-semibold bg-[#D2691E] hover:bg-[#B8541A] text-white border-0 shadow-xl"
            onClick={scrollToTeaCollection}
          >
            Shop Teas
          </Button>
        </div>
      </section>

      {/* Our Teas Section */}
      <section id="tea-collection" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-16 text-foreground">
            Our Premium Tea Collection
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Swad Tea */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/swad-tea-jars.jpg"
                  alt="Swad - Ghar Ki Chai"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  🍵 Everyday Comfort
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-sans text-xl text-primary">Swad – Ghar Ki Chai</CardTitle>
                <CardDescription className="font-serif text-base leading-relaxed text-muted-foreground">
                  Your everyday comfort tea. Strong, refreshing, and familiar — the perfect cup for family mornings and
                  daily rituals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  👉 Buy Swad
                </Button>
              </CardContent>
            </Card>

            {/* Utsav Tea */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/utsav-tea-jars.jpg"
                  alt="Utsav - Festival Tea"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">🎉 Festival Special</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-sans text-xl text-primary">Utsav – When Tea Becomes a Festival</CardTitle>
                <CardDescription className="font-serif text-base leading-relaxed text-muted-foreground">
                  A lively, aromatic blend made for celebrations. Ideal for gatherings, gifting, and making memories.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  👉 Buy Utsav
                </Button>
              </CardContent>
            </Card>

            {/* Premium CTC */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/30">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/premium-ctc-tea.jpg"
                  alt="Premium CTC - Bulk Tea"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">🏪 Bulk Choice</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-sans text-xl text-primary">Premium CTC – Bulk Buyers' Choice</CardTitle>
                <CardDescription className="font-serif text-base leading-relaxed text-muted-foreground">
                  Robust, consistent, and value-packed. Perfect for cafés, hotels, corporates, and wholesale partners.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  👉 Order Bulk Tea
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 text-foreground">Why Choose DWIVEDI TEA?</h2>
            <p className="text-lg font-serif text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tea isn't just a drink — it's a way of life. With us, you don't just sip tea; you join a tradition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2 text-primary">🌱 From Assam & Darjeeling Gardens</h3>
              <p className="font-serif text-muted-foreground">Authentic & fresh.</p>
            </div>

            <div className="text-center group">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2 text-primary">🍵 Made for All Tea Lovers</h3>
              <p className="font-serif text-muted-foreground">From homely brews to bulk buyers.</p>
            </div>

            <div className="text-center group">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2 text-primary">🤝 Community First</h3>
              <p className="font-serif text-muted-foreground">Supporting small farmers, fair wages & sustainability.</p>
            </div>

            <div className="text-center group">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Package className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2 text-primary">📦 Eco-Friendly Packaging</h3>
              <p className="font-serif text-muted-foreground">Fresh tea, minimal footprint.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              👉 Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-8 text-foreground">Our Story</h2>
          <p className="text-xl font-serif text-muted-foreground mb-8 leading-relaxed">
            A heritage of tea, passed down through generations.
          </p>
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <blockquote className="text-lg font-serif text-card-foreground leading-relaxed italic">
              "As a third-generation tea enthusiast from Assam, I've spent over 15 years exploring the world of tea.
              With DWIVEDI TEA, my mission is simple: to make premium teas accessible to every home, while celebrating
              tradition, wellness, and community."
            </blockquote>
          </div>
          <Button variant="outline" size="lg" className="mt-8 font-serif bg-transparent">
            👉 Meet Our Story
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-4 text-foreground">
            ✨ Loved by Tea Drinkers & Partners ✨
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="border-border hover:border-secondary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-serif text-card-foreground mb-4 leading-relaxed">
                  "Swad feels like home. Best chai I've ever had!"
                </p>
                <p className="font-sans font-semibold text-sm text-muted-foreground">– Michael R.</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-secondary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-serif text-card-foreground mb-4 leading-relaxed">
                  "Our café margins improved by 55% with DWIVEDI TEA blends."
                </p>
                <p className="font-sans font-semibold text-sm text-muted-foreground">– David K.</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-secondary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-serif text-card-foreground mb-4 leading-relaxed">
                  "Corporate program boosted employee focus by 28%."
                </p>
                <p className="font-sans font-semibold text-sm text-muted-foreground">– Priya P.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              👉 Join the Community
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 text-foreground">
              Start Your Tea Journey Today 🍵
            </h2>
          </div>

          <Card className="border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-serif text-primary">
                      Name*
                    </Label>
                    <Input id="name" required className="mt-1 border-border focus:ring-secondary" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-serif text-primary">
                      Email*
                    </Label>
                    <Input id="email" type="email" required className="mt-1 border-border focus:ring-secondary" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="font-serif text-primary">
                    Phone (optional)
                  </Label>
                  <Input id="phone" type="tel" className="mt-1 border-border focus:ring-secondary" />
                </div>

                <div>
                  <Label htmlFor="interest" className="font-serif text-primary">
                    I'm Interested In:
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1 border-border focus:ring-secondary">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="subscription">Subscription</SelectItem>
                      <SelectItem value="bulk">Bulk</SelectItem>
                      <SelectItem value="wholesale">Wholesale</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="custom">Custom Blend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-serif text-primary">
                    Message
                  </Label>
                  <Textarea id="message" rows={4} className="mt-1 border-border focus:ring-secondary" />
                </div>

                <div>
                  <Label htmlFor="source" className="font-serif text-primary">
                    How did you hear about us?
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1 border-border focus:ring-secondary">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Friend Referral</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  👉 Send Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src="/dwivedi-tea-logo.png" alt="DWIVEDI TEA Logo" className="h-16 w-16 brightness-0 invert" />
            </div>
            <p className="font-serif text-primary-foreground/80">
              🌱 © 2025 DWIVEDI TEA | Premium Assam & Darjeeling Teas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="font-serif text-primary">Locations</span>
              </div>
              <p className="font-serif text-sm text-primary-foreground/80">
                📍 Assam | Darjeeling | Bangalore | Kolkata
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-2">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="font-serif text-primary">Contact</span>
              </div>
              <p className="font-serif text-sm text-primary-foreground/80">📧 Email | 📞 Phone</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-2">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                <span className="font-serif text-primary">Connect</span>
              </div>
              <p className="font-serif text-sm text-primary-foreground/80">WhatsApp | Social Media</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
