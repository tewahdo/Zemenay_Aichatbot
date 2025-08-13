// src/components/home-ui/hero.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type HeroSectionProps = {
  user: any;
  isAdmin: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({ user, isAdmin }) => {
  return (
    <section className="relative bg-background text-foreground pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10 md:opacity-20">
        <Image
          src="/images/hero/home-hero-bg.webp"
          alt="Abstract gaming background"
          layout="fill"
          objectFit="cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-down">
          <span className="block">Welcome to the</span>
          <span className="block text-primary mt-1 sm:mt-2">Ethiopian Gamers Association</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground mb-6 animate-fade-in-up animation-delay-300">
          Connecting Ethiopia&apos;s vibrant gaming community. Discover events, join teams,
          and explore the future of gaming in the heart of Africa.
        </p>

        {/* Admin login link always visible */}
        <Link
          href="/admin"
          className="bg-black text-white font-semibold mb-6 px-4 py-2 rounded inline-block animate-fade-in-up animation-delay-400 text-center hover:bg-gray-900 transition-colors"
        >
          Please log in to access admin features.
        </Link>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-600">
          <Link href="/get-involved" passHref legacyBehavior>
            <Button size="lg" className="px-8 py-3 text-lg flex items-center gap-2">
              Join Our Community
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
