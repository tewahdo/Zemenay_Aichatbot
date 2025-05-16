// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Home Page Specific UI Components
import HeroSection from '@/components/home-ui/hero';
import ServicesOverview from '@/components/home-ui/services-overview';
import FeaturedEvents from '@/components/home-ui/featured-events';
import CommunityHighlights from '@/components/home-ui/community-highlights';
import NewsHighlights from '@/components/home-ui/news-highlights';
import Testimonials from '@/components/home-ui/testimonials';
import ClientLogos from '@/components/home-ui/client-logos';

// Mock Data
// --- Mock Data for Featured Events ---
const mockFeaturedEvents = [
	{
		id: 1,
		slug: 'mobile-legends-championship',
		title: 'Mobile Legends Championship',
		date: 'March 20, 2024',
		location: 'Addis Ababa',
		imageUrl: '/images/events/event-placeholder-1.webp',
		prize: '50,000 ETB',
		participants: '32 Teams',
		type: 'tournament',
	},
	{
		id: 2,
		slug: 'cs2-national-finals',
		title: 'CS2 National Finals',
		date: 'April 5, 2024',
		location: 'Online',
		imageUrl: '/images/events/event-placeholder-2.webp',
		prize: '75,000 ETB',
		participants: '16 Teams',
		type: 'tournament',
	},
	{
		id: 3,
		slug: 'ethiopian-game-jam-2024',
		title: 'Ethiopian Game Jam 2024',
		date: 'May 10, 2024',
		location: 'Hybrid Event',
		imageUrl: '/images/events/event-placeholder-3.webp',
		prize: '25,000 ETB',
		participants: '100 Developers',
		type: 'game-jam',
	},
];
export type HomePageEventType = (typeof mockFeaturedEvents)[0];

// --- Mock Data for News Highlights ---
const mockNewsItems = [
	{
		id: 1,
		slug: 'ega-launches-new-developer-grant',
		title: 'EGA Launches New Developer Grant Program',
		date: 'July 15, 2024',
		excerpt:
			'Supporting upcoming Ethiopian game developers with funding and mentorship...',
		imageUrl: '/images/news/news-placeholder-1.webp',
		category: 'Announcement',
	},
	{
		id: 2,
		slug: 'interview-with-rising-star-gamer',
		title: 'Interview with Rising Star Pro Gamer: AlphaWolf',
		date: 'July 10, 2024',
		excerpt:
			'Get to know AlphaWolf, the recent winner of the National CS2 League...',
		imageUrl: '/images/news/news-placeholder-2.webp',
		category: 'Interview',
	},
	{
		id: 3,
		slug: 'game-dev-workshop-recap',
		title: 'Recap: Successful Game Development Workshop',
		date: 'July 5, 2024',
		excerpt:
			'Over 50 aspiring developers attended our latest workshop on Unity basics...',
		imageUrl: '/images/news/news-placeholder-3.webp',
		category: 'Event Recap',
	},
];
export type NewsItemType = (typeof mockNewsItems)[0];

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
			<FeaturedEvents events={mockFeaturedEvents} />
			<CommunityHighlights />
			<NewsHighlights newsItems={mockNewsItems} />
			<Testimonials testimonials={mockTestimonials} />
			<ClientLogos logos={mockClientLogos} />
		</main>
	);
};

export default HomePage;