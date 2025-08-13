"use client";

import React, { useEffect, useState } from "react";
import ServicesOverview from "@/components/home-ui/services-overview";
import { FeaturedEvents } from "@/components/home-ui/featured-events";
import CommunityHighlights from "@/components/home-ui/community-highlights";
import NewsHighlights from "@/components/home-ui/news-highlights";
import Testimonials from "@/components/home-ui/testimonials";
import PartnerLogos from "@/components/home-ui/partner-logos";
import HeroSection from "@/components/home-ui/hero";
import Chatbot from "@/components/Chatbot";
import { supabase } from "@/lib/supabaseClient";

// Mock Data
import { mockNewsItems, mockTestimonials, mockPartnerLogos } from "./mockData";

const HomePage = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user);

        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .single();

        setIsAdmin(!error && profile?.role === "admin");
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    }

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
          setIsAdmin(false);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <main className="flex-grow min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 text-gray-800">
      {/* Hero Section with admin login/dashboard */}
      <HeroSection user={user} isAdmin={isAdmin} />

      {/* Core Sections */}
      <ServicesOverview />
      <FeaturedEvents />
      <CommunityHighlights />
      <NewsHighlights newsItems={mockNewsItems} />
      <Testimonials testimonials={mockTestimonials} />
      <PartnerLogos logos={mockPartnerLogos} />

      {/* Floating Chatbot */}
      <Chatbot />
    </main>
  );
};

export default HomePage;
