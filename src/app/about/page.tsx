// src/app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/about-ui/stat-card';
import ExecutiveMemberCard, { ExecutiveMemberCardProps } from '@/components/about-ui/executive-member-card';
import PartnerCard, { PartnerCardProps } from '@/components/about-ui/partner-card';

const AboutPage = () => {
  const executiveMembers: ExecutiveMemberCardProps[] = [
    { imageUrl: '/images/team/abebe-kebede.webp', name: 'Abebe Kebede', title: 'Executive Director', twitterUrl: '#', linkedinUrl: '#' },
    { imageUrl: '/images/team/sara-tekle.webp', name: 'Sara Tekle', title: 'Community Manager', twitterUrl: '#', linkedinUrl: '#' },
    { imageUrl: '/images/team/daniel-haile.webp', name: 'Daniel Haile', title: 'Events Coordinator', twitterUrl: '#', linkedinUrl: '#' },
    { imageUrl: '/images/team/bethel-assefa.webp', name: 'Bethel Assefa', title: 'Game Dev Lead', twitterUrl: '#', linkedinUrl: '#' },
  ];

  const partners: PartnerCardProps[] = [
    { logoUrl: '/images/partners/ethio-telecom.webp', name: 'Ethio Telecom', description: 'Official Telecommunications Partner' },
    { logoUrl: '/images/partners/dashen-brewery.webp', name: 'Dashen Brewery', description: 'Event Sponsor' },
    { logoUrl: '/images/partners/unity-technologies.webp', name: 'Unity Technologies', description: 'Development Partner' },
    { logoUrl: '/images/partners/ethiopian-airlines.webp', name: 'Ethiopian Airlines', description: 'Travel Partner' },
  ];

  return (
    <main className="flex-grow">
       {/* Section 1: Hero / Intro */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            About EGA
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Building and nurturing Ethiopia&apos;s gaming community since 2020. We&apos;re dedicated to promoting local talent and creating opportunities for gamers nationwide.
          </p>
        </div>
      </section>

      {/* Section 2: Our Mission & Stats */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              To foster a vibrant gaming ecosystem in Ethiopia by supporting players, developers, and content creators. We believe in the power of games to unite, educate, and inspire.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <StatCard value="50K+" label="Active Members" />
              <StatCard value="100+" label="Events Hosted" />
            </div>
          </div>
          <div className="relative aspect-[3/2] bg-muted rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/about/mission-image.webp" alt="EGA community event" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>


      {/* Section 3: Executive Members */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-left">
          Executive Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {executiveMembers.map(member => <ExecutiveMemberCard key={member.name} {...member} />)}
        </div>
      </section>

       {/* Section 4: Our Partners */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-left">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {partners.map(partner => <PartnerCard key={partner.name} {...partner} />)}
        </div>
      </section>

      {/* Section 5: Join Our Mission (CTA) */}
      <section className="bg-card rounded-xl container mx-auto my-16 md:my-24 p-8 md:p-16 text-center shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
          Join Our Mission
        </h2>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
          Help us shape the future of gaming in Ethiopia. Whether you&apos;re a player, developer, or enthusiast, there&apos;s a place for you in our community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/membership" passHref legacyBehavior>
            <Button size="lg" variant="default">
              Become a Member
            </Button>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Button
              size="lg"
              variant="outline"
              className="border-muted-foreground/50 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-muted-foreground"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;