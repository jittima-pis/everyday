'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function EverydayMarketplace() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Sample product data (8 products as in Figma)
  const products = Array(8).fill({
    title: 'Classic Denim Jacket',
    price: '฿800',
    image: '/placeholder-product.jpg'
  })

  return (
    <div className="min-h-screen bg-[#FCF9F6]">
      {/* Navigation Header */}
      <header
        className="sticky top-0 z-50 w-full border-b backdrop-blur"
        style={{
          backgroundColor: '#F0E4D9',
          borderColor: '#E4CDB7'
        }}
      >
        <div className="mx-auto flex h-20 lg:h-24 max-w-[1360px] items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/logo.png" />
              <AvatarFallback style={{ backgroundColor: '#3E332E', color: '#FAFAFA' }}>
                E
              </AvatarFallback>
            </Avatar>
            <span className="text-lg md:text-xl font-bold" style={{ color: '#3E332E' }}>
              Everyday
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="relative hidden lg:block flex-1 max-w-md mx-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#815E46' }} />
            <Input
              type="search"
              placeholder="Search for items..."
              className="pl-10 rounded-full border-[#E4CDB7] bg-[#FCF9F6] text-[#3E332E]"
            />
          </div>

          {/* Right Icons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" style={{ color: '#3E332E' }} />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <User className="h-5 w-5 md:h-6 md:w-6" style={{ color: '#3E332E' }} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" style={{ color: '#3E332E' }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: '#3E332E' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: '#E4CDB7', backgroundColor: '#F0E4D9' }}>
            <div className="p-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#815E46' }} />
                <Input
                  type="search"
                  placeholder="Search for items..."
                  className="pl-10 rounded-full border-[#E4CDB7] bg-[#FCF9F6] text-[#3E332E]"
                />
              </div>
              {/* Mobile Icons */}
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1 rounded-full">
                  <ShoppingCart className="h-5 w-5 mr-2" style={{ color: '#3E332E' }} />
                  Cart
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 rounded-full">
                  <User className="h-5 w-5 mr-2" style={{ color: '#3E332E' }} />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-[1360px] px-6 md:px-10 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 max-w-[534px]">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-2 text-sm md:text-base font-normal inline-block"
            >
              Sustainable Fashion, Beautifully Curated
            </Badge>

            {/* Main Heading */}
            <h1
              className="font-semibold tracking-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              style={{
                color: '#3E332E',
                lineHeight: '1.1'
              }}
            >
              Give your pre-loved pieces a new story
            </h1>

            {/* Description */}
            <p
              className="text-base md:text-lg lg:text-xl"
              style={{
                color: '#815E46',
                lineHeight: '1.6'
              }}
            >
              Join our community of conscious fashion lovers. Share what you no longer wear and discover unique treasures that deserve a second chance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full h-11 md:h-12 px-6 text-sm font-medium"
                style={{
                  backgroundColor: '#3E332E',
                  color: '#FAFAFA'
                }}
              >
                Start Sharing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-11 md:h-12 px-6 text-sm font-medium border-[#3E332E] text-[#3E332E]"
              >
                Browse Items
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative rounded-2xl overflow-hidden w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
              style={{ backgroundColor: '#E4CDB7' }}
            >
              {/* Placeholder for hero image */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-5xl md:text-6xl lg:text-7xl">👗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-loved Treasures Section */}
      <section className="mx-auto max-w-[1360px] px-6 md:px-10 py-12 md:py-16">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            style={{
              color: '#3E332E',
              lineHeight: '1.2'
            }}
          >
            Pre-loved Treasures
          </h2>
          <p
            className="text-base md:text-lg mx-auto max-w-2xl"
            style={{
              color: '#815E46',
              lineHeight: '1.6'
            }}
          >
            Each piece has been carefully selected and loved. Find your next favorite item.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 rounded-xl hover:shadow-lg transition-shadow"
              style={{ backgroundColor: '#FCF9F6' }}
            >
              {/* Product Image */}
              <div
                className="relative w-full aspect-square overflow-hidden"
                style={{ backgroundColor: '#E4CDB7' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl md:text-6xl">👕</span>
                </div>
              </div>

              {/* Product Info */}
              <div
                className="p-5 md:p-6 space-y-2"
                style={{ backgroundColor: '#FCF9F6' }}
              >
                <h3
                  className="text-base md:text-lg font-semibold line-clamp-1"
                  style={{
                    color: '#3E332E',
                    lineHeight: '1.5'
                  }}
                >
                  {product.title}
                </h3>
                <p
                  className="text-base md:text-lg font-medium"
                  style={{
                    color: '#543E2E',
                    lineHeight: '1.5'
                  }}
                >
                  {product.price}
                </p>
                <Button
                  variant="outline"
                  className="w-full rounded-full h-11 md:h-12 mt-2 text-sm font-medium border-[#3E332E] text-[#3E332E]"
                >
                  Add to cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Button
            variant="outline"
            className="rounded-full h-11 md:h-12 px-8 text-sm font-medium border-[#3E332E] text-[#3E332E]"
          >
            Load More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="mt-12 md:mt-20"
        style={{ backgroundColor: '#3E332E' }}
      >
        <div className="mx-auto max-w-[1360px] px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback style={{ backgroundColor: '#FAFAFA', color: '#3E332E' }}>
                    E
                  </AvatarFallback>
                </Avatar>
                <span className="text-base md:text-lg font-bold" style={{ color: '#FAFAFA' }}>
                  Everyday
                </span>
              </div>
              <p
                className="text-sm md:text-base"
                style={{ color: '#E4CDB7' }}
              >
                Sustainable fashion marketplace connecting conscious buyers and sellers.
              </p>
            </div>

            {/* Shop Column */}
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base" style={{ color: '#FAFAFA' }}>
                Shop
              </h4>
              <ul className="space-y-2">
                {['All Items', 'Clothing', 'Accessories', 'Shoes'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm md:text-base hover:underline"
                      style={{ color: '#E4CDB7' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base" style={{ color: '#FAFAFA' }}>
                Support
              </h4>
              <ul className="space-y-2">
                {['Help Center', 'Shipping Info', 'Returns', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm md:text-base hover:underline"
                      style={{ color: '#E4CDB7' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h4 className="font-semibold mb-4 text-sm md:text-base" style={{ color: '#FAFAFA' }}>
                Community
              </h4>
              <ul className="space-y-2">
                {['About Us', 'Sustainability', 'Blog', 'Join Us'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm md:text-base hover:underline"
                      style={{ color: '#E4CDB7' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            className="pt-6 md:pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm"
            style={{ borderColor: '#815E46' }}
          >
            <p style={{ color: '#E4CDB7' }}>
              © 2026 Everyday. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              <Link
                href="#"
                className="hover:underline"
                style={{ color: '#E4CDB7' }}
              >
                Privacy Policy
              </Link>
              <span style={{ color: '#815E46' }}>|</span>
              <Link
                href="#"
                className="hover:underline"
                style={{ color: '#E4CDB7' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
