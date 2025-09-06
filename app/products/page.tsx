"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Sample product data
const products = [
  {
    id: "swad",
    name: "Swad – Ghar Ki Chai",
    description: "Your everyday comfort tea. Strong, refreshing, and familiar — the perfect cup for family mornings.",
    price: 180,
    originalPrice: 220,
    image: "/swad-tea-jars.jpg",
    category: "Black",
    rating: 4.8,
    reviews: 124,
    sizes: ["50g", "100g", "250g"],
    bestseller: true,
    tags: ["Everyday", "Strong", "Family"],
  },
  {
    id: "utsav",
    name: "Utsav – Festival Tea",
    description: "A lively, aromatic blend made for celebrations. Ideal for gatherings, gifting, and making memories.",
    price: 250,
    originalPrice: 300,
    image: "/utsav-tea-jars.jpg",
    category: "Masala",
    rating: 4.9,
    reviews: 89,
    sizes: ["50g", "100g", "250g"],
    bestseller: true,
    tags: ["Festival", "Aromatic", "Gift"],
  },
  {
    id: "premium-ctc",
    name: "Premium CTC – Bulk Choice",
    description: "Robust, consistent, and value-packed. Perfect for cafés, hotels, corporates, and wholesale partners.",
    price: 450,
    originalPrice: 500,
    image: "/premium-ctc-tea.jpg",
    category: "Black",
    rating: 4.7,
    reviews: 67,
    sizes: ["500g", "1kg", "2.5kg"],
    bestseller: false,
    tags: ["Bulk", "Commercial", "Strong"],
  },
  {
    id: "darjeeling-gold",
    name: "Darjeeling Gold Reserve",
    description: "Premium single-origin Darjeeling with delicate muscatel flavor and golden liquor.",
    price: 380,
    originalPrice: 450,
    image: "/premium-darjeeling-tea-jar-with-golden-label.jpg",
    category: "Black",
    rating: 4.9,
    reviews: 45,
    sizes: ["50g", "100g", "250g"],
    bestseller: false,
    tags: ["Premium", "Single-origin", "Delicate"],
  },
  {
    id: "green-wellness",
    name: "Green Wellness Blend",
    description: "Antioxidant-rich green tea blend with natural herbs for daily wellness and vitality.",
    price: 320,
    originalPrice: 380,
    image: "/green-tea-jar-with-wellness-herbs.jpg",
    category: "Green",
    rating: 4.6,
    reviews: 78,
    sizes: ["50g", "100g", "250g"],
    bestseller: false,
    tags: ["Wellness", "Antioxidant", "Herbal"],
  },
  {
    id: "masala-royal",
    name: "Royal Masala Chai",
    description: "Traditional spice blend with cardamom, cinnamon, and cloves for the perfect masala chai experience.",
    price: 280,
    originalPrice: 340,
    image: "/masala-chai-spices-tea-jar-with-royal-design.jpg",
    category: "Masala",
    rating: 4.8,
    reviews: 156,
    sizes: ["50g", "100g", "250g"],
    bestseller: true,
    tags: ["Spiced", "Traditional", "Aromatic"],
  },
]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [showBestsellers, setShowBestsellers] = useState(false)

  const filterProducts = (category: string, priceRange: string, bestsellers: boolean) => {
    let filtered = products

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category)
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      filtered = filtered.filter((product) => product.price >= min && product.price <= max)
    }

    if (bestsellers) {
      filtered = filtered.filter((product) => product.bestseller)
    }

    setFilteredProducts(filtered)
  }

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)
    filterProducts(value, selectedPriceRange, showBestsellers)
  }

  const handlePriceRangeChange = (value: string) => {
    setSelectedPriceRange(value)
    filterProducts(selectedCategory, value, showBestsellers)
  }

  const handleBestsellerToggle = () => {
    const newValue = !showBestsellers
    setShowBestsellers(newValue)
    filterProducts(selectedCategory, selectedPriceRange, newValue)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <ArrowLeft className="h-6 w-6" />
            <img src="/dwivedi-tea-logo.png" alt="DWIVEDI TEA" className="h-12 w-12 brightness-0 invert" />
            <span className="font-playfair text-2xl font-bold">DWIVEDI TEA</span>
          </Link>
          <Link href="/order">
            <Button variant="secondary" size="lg" className="font-serif">
              Order Now
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-[#4A2C2A] mb-6 italic">
            Handpicked, Small Batch
          </h1>
          <p className="text-xl text-[#6B4423] font-serif leading-relaxed">
            Discover our complete collection of premium teas from Assam and Darjeeling
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 bg-muted/50 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-serif text-foreground">Filters:</span>
            </div>

            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Black">Black Tea</SelectItem>
                <SelectItem value="Green">Green Tea</SelectItem>
                <SelectItem value="Masala">Masala Chai</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedPriceRange} onValueChange={handlePriceRangeChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-200">₹0 - ₹200</SelectItem>
                <SelectItem value="200-350">₹200 - ₹350</SelectItem>
                <SelectItem value="350-500">₹350 - ₹500</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant={showBestsellers ? "default" : "outline"}
              onClick={handleBestsellerToggle}
              className="font-serif"
            >
              Bestsellers Only
            </Button>

            <div className="ml-auto text-sm text-muted-foreground font-serif">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-secondary/30"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-secondary text-secondary-foreground">{product.category}</Badge>
                    {product.bestseller && <Badge className="bg-primary text-primary-foreground">⭐ Bestseller</Badge>}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90">
                      {product.rating} ⭐ ({product.reviews})
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-primary">{product.name}</CardTitle>
                  <CardDescription className="font-serif text-base leading-relaxed text-muted-foreground">
                    {product.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                    </div>
                    <div className="text-sm text-secondary font-semibold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-serif text-muted-foreground">Available sizes: </span>
                    <span className="text-sm font-semibold">{product.sizes.join(", ")}</span>
                  </div>

                  <Link href={`/order?product=${product.id}`}>
                    <Button className="w-full font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Order Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/dwivedi-tea-logo.png" alt="DWIVEDI TEA Logo" className="h-16 w-16 brightness-0 invert" />
          </div>
          <p className="font-serif text-primary-foreground/80">
            🌱 © 2025 DWIVEDI TEA | Premium Assam & Darjeeling Teas
          </p>
        </div>
      </footer>
    </div>
  )
}
