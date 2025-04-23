// src/app/events/page.tsx
import React from 'react';
import EventFilters from '@/components/events-ui/event-filters';
import EventCard from '@/components/events-ui/event-cards';

const mockEvents = [
    { id: 1, slug: "weekly-tournament-1", title: "Weekly Tournament", date: "2024-08-15T18:00:00Z", location: "Online", imageUrl: "/images/placeholder-event1.jpg" },
    { id: 2, slug: "community-game-night-2", title: "Community Game Night", date: "2024-08-17T19:00:00Z", location: "Discord", imageUrl: "/images/placeholder-event2.jpg" },
    { id: 3, slug: "lan-party-3", title: "LAN Party Meetup", date: "2024-08-25T12:00:00Z", location: "Addis Ababa", imageUrl: "/images/placeholder-event3.jpg" },
    { id: 4, slug: "workshop-4", title: "Game Dev Workshop", date: "2024-09-05T14:00:00Z", location: "Online", imageUrl: "/images/placeholder-event4.jpg" },
    { id: 5, slug: "casual-meetup-5", title: "Casual Meetup", date: "2024-09-10T19:30:00Z", location: "Coffee Shop X", imageUrl: "/images/placeholder-event5.jpg" },
    { id: 6, slug: "major-league-finals-6", title: "Major League Finals", date: "2024-09-20T10:00:00Z", location: "Stadium Y", imageUrl: "/images/placeholder-event6.jpg" },
];

const EventsPage = () => {
  return (
    <main className="flex-grow">
      <section className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
          Events
        </h1>
      </section>

      <section className="container mx-auto py-8 px-4">
        <EventFilters />
      </section>

      <section className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
          {mockEvents.length === 0 && (
            <p className="text-center text-muted-foreground col-span-full">
              No events found matching your criteria.
            </p>
          )}
        </div>
      </section>

      <section className="container mx-auto py-8 px-4 flex justify-center">
        <div className="p-2 border rounded bg-card text-card-foreground shadow-sm">
          Pagination Placeholder
        </div>
      </section>
    </main>
  );
};

export default EventsPage;
