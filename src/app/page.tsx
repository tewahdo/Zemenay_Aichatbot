// src/app/page.tsx
import React from 'react';

// Home Page Specific UI Components
import HeroSection from '@/components/home-ui/hero';
import ServicesOverview from '@/components/home-ui/services-overview';
import { FeaturedEvents } from '@/components/home-ui/featured-events';
import CommunityHighlights from '@/components/home-ui/community-highlights';
import { NewsHighlights } from '@/components/home-ui/news-highlights';
import Testimonials from '@/components/home-ui/testimonials';
import ClientLogos from '@/components/home-ui/client-logos';

// Mock Data
// --- Mock Data for Testimonials ---
const mockTestimonials = [
	{
		id: 1,
		quote:
			"EGA has been instrumental in connecting me with other developers and providing resources I wouldn't have found otherwise.",
		name: 'Abebe B.',
		role: 'Indie Game Developer',
		avatarUrl: '/images/avatars/avatar-1.webp',
	},
	{
		id: 2,
		quote:
			"The tournaments organized by EGA are top-notch! It's a great platform for competitive gamers in Ethiopia.",
		name: 'Sara G.',
		role: 'Pro Gamer',
		avatarUrl: '/images/avatars/avatar-2.webp',
	},
	{
		id: 3,
		quote:
			"As a partner, we've seen firsthand the passion and growth within the Ethiopian gaming community thanks to EGA's efforts.",
		name: 'Ethio Telecom Gaming',
		role: 'Sponsor',
		avatarUrl: '/images/avatars/avatar-3.webp',
	},
];
export type TestimonialType = (typeof mockTestimonials)[0];

// --- Mock Data for Client/Partner Logos ---
const mockClientLogos = [
	{
		id: 1,
		name: 'Ethio Telecom',
		logoUrl: '/images/partners/ethio-telecom-logo-dark.webp',
	},
	{
		id: 2,
		name: 'Dashen Bank',
		logoUrl: '/images/partners/dashen-bank-logo-dark.webp',
	},
	{
		id: 3,
		name: 'Awash Bank',
		logoUrl: '/images/partners/awash-bank-logo-dark.webp',
	},
	{
		id: 4,
		name: 'Habesha Breweries',
		logoUrl: '/images/partners/habesha-breweries-logo-dark.webp',
	},
	{
		id: 5,
		name: 'Microsoft Africa',
		logoUrl: '/images/partners/microsoft-africa-logo-dark.webp',
	},
	{
		id: 6,
		name: 'Unity',
		logoUrl: '/images/partners/unity-logo-dark.webp',
	},
];
export type ClientLogoType = (typeof mockClientLogos)[0];

const HomePage = () => {
	return (
		<main className="flex-grow">
			<HeroSection />
			<ServicesOverview />
			<FeaturedEvents />
			<CommunityHighlights />
			<NewsHighlights />
			<Testimonials testimonials={mockTestimonials} />
			<ClientLogos logos={mockClientLogos} />
		</main>
	);
};

export default HomePage;