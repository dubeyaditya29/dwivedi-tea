"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Minus, CheckCircle } from "lucide-react"
import Link from "next/link"

// Product data (same as products page)
const products = [
  {
    id: "swad",
    name: "Swad – Ghar Ki Chai",
    description: "Your everyday comfort tea. Strong, refreshing, and familiar.",
    price: 180,
    image: "/swad-tea-jars.jpg",
    sizes: [
      { size: "50g", price: 180 },
      { size: "100g", price: 320 },
      { size: "250g", price: 750 },
    ],
  },
  {
    id: "utsav",
    name: "Utsav – Festival Tea",
    description: "A lively, aromatic blend made for celebrations.",
    price: 250,
    image: "/utsav-tea-jars.jpg",
    sizes: [
      { size: "50g", price: 250 },
      { size: "100g", price: 450 },
      { size: "250g", price: 1000 },
    ],
  },
  {
    id: "premium-ctc",
    name: "Premium CTC – Bulk Choice",
    description: "Robust, consistent, and value-packed for commercial use.",
    price: 450,
    image: "/premium-ctc-tea.jpg",
    sizes: [
      { size: "500g", price: 450 },
      { size: "1kg", price: 850 },
      { size: "2.5kg", price: 2000 },
    ],
  },
]

export default function OrderPage() {
  const searchParams = useSearchParams()
  const preselectedProduct = searchParams.get("product")

  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")

  // Form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    deliveryNotes: "",
    paymentMethod: "cod",
    promoCode: "",
  })

  useEffect(() => {
    if (preselectedProduct) {
      const product = products.find((p) => p.id === preselectedProduct)
      if (product) {
        setSelectedProduct(product)
        setSelectedSize(product.sizes[0].size)
      }
    }
  }, [preselectedProduct])

  const getCurrentPrice = () => {
    if (!selectedProduct || !selectedSize) return 0
    const sizeOption = selectedProduct.sizes.find((s: any) => s.size === selectedSize)
    return sizeOption ? sizeOption.price : 0
  }

  const getSubtotal = () => {
    return getCurrentPrice() * quantity
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate order number
    const orderNum = `DWV-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}-${Math.floor(Math.random() * 10000)}`
    setOrderNumber(orderNum)

    // Simulate order processing
    console.log("Order submitted:", {
      orderNumber: orderNum,
      product: selectedProduct,
      size: selectedSize,
      quantity,
      subtotal: getSubtotal(),
      customer: formData,
    })

    setOrderSubmitted(true)
  }

  if (orderSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-playfair font-bold text-primary mb-4">Order Confirmed!</h1>
            <p className="text-xl font-serif text-muted-foreground mb-6">
              Thank you for your order. Your tea is on its way!
            </p>

            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h2 className="font-playfair text-xl font-bold mb-4">Order Details</h2>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="font-serif">Order Number:</span>
                  <span className="font-bold">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-serif">Product:</span>
                  <span>{selectedProduct?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-serif">Size & Quantity:</span>
                  <span>
                    {selectedSize} × {quantity}
                  </span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="font-serif">Total:</span>
                  <span>₹{getSubtotal()}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-serif font-bold text-blue-800 mb-2">Next Steps:</h3>
              <ul className="text-sm text-blue-700 text-left space-y-1">
                <li>• You'll receive an email confirmation shortly</li>
                <li>• We'll call you within 24 hours to confirm your order</li>
                <li>• Delivery typically takes 3-5 business days</li>
                <li>• Payment on delivery (Cash/UPI accepted)</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="font-serif bg-transparent">
                  Back to Home
                </Button>
              </Link>
              <Link href="/products">
                <Button className="font-serif bg-secondary hover:bg-secondary/90">Continue Shopping</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/products" className="flex items-center gap-3">
            <ArrowLeft className="h-6 w-6" />
            <img src="/dwivedi-tea-logo.png" alt="DWIVEDI TEA" className="h-12 w-12 brightness-0 invert" />
            <span className="font-playfair text-2xl font-bold">Place Your Order</span>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Selection */}
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-6">Select Your Tea</h2>

            {!selectedProduct && (
              <div className="grid gap-4 mb-8">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${selectedProduct?.id === product.id ? "ring-2 ring-secondary" : ""}`}
                    onClick={() => {
                      setSelectedProduct(product)
                      setSelectedSize(product.sizes[0].size)
                    }}
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-playfair font-bold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                        <p className="font-bold text-secondary">From ₹{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {selectedProduct && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      src={selectedProduct.image || "/placeholder.svg"}
                      alt={selectedProduct.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-bold">{selectedProduct.name}</h3>
                      <p className="text-muted-foreground mb-4">{selectedProduct.description}</p>

                      <div className="space-y-4">
                        <div>
                          <Label className="font-serif">Size & Price</Label>
                          <Select value={selectedSize} onValueChange={setSelectedSize}>
                            <SelectTrigger className="mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {selectedProduct.sizes.map((sizeOption: any) => (
                                <SelectItem key={sizeOption.size} value={sizeOption.size}>
                                  {sizeOption.size} - ₹{sizeOption.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label className="font-serif">Quantity</Label>
                          <div className="flex items-center gap-3 mt-1">
                            <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-bold">{quantity}</span>
                            <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-serif">Subtotal:</span>
                      <span className="text-2xl font-bold text-primary">₹{getSubtotal()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Form */}
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-6">Delivery Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="font-serif">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="email" className="font-serif">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-serif">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="age" className="font-serif">
                        Age *
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        min="18"
                        max="100"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address1" className="font-serif">
                      Address Line 1 *
                    </Label>
                    <Input
                      id="address1"
                      required
                      value={formData.address1}
                      onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address2" className="font-serif">
                      Address Line 2
                    </Label>
                    <Input
                      id="address2"
                      value={formData.address2}
                      onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="font-serif">
                        City *
                      </Label>
                      <Input
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="font-serif">
                        State *
                      </Label>
                      <Input
                        id="state"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode" className="font-serif">
                        Pincode *
                      </Label>
                      <Input
                        id="pincode"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="deliveryNotes" className="font-serif">
                      Delivery Notes
                    </Label>
                    <Textarea
                      id="deliveryNotes"
                      rows={3}
                      value={formData.deliveryNotes}
                      onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cod">Cash on Delivery</SelectItem>
                      <SelectItem value="upi">UPI Payment (Instructions will be sent)</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="mt-4">
                    <Label htmlFor="promoCode" className="font-serif">
                      Promo Code (Optional)
                    </Label>
                    <Input
                      id="promoCode"
                      placeholder="Enter promo code"
                      value={formData.promoCode}
                      onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>

              {selectedProduct && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-serif">Order Total:</span>
                      <span className="text-3xl font-bold text-primary">₹{getSubtotal()}</span>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-serif bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      Buy Now - Place Order
                    </Button>

                    <p className="text-sm text-muted-foreground text-center mt-4">
                      By placing this order, you agree to our terms and conditions. We'll call you to confirm before
                      processing.
                    </p>
                  </CardContent>
                </Card>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
