import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin } from 'lucide-react';

interface EventCardProps {
    event: {
        id: number | string;
        slug?: string;
        title: string;
        date: string;
        location: string;
        imageUrl: string;
    };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    const eventUrl = `/events/${event.slug ?? event.id}`;

    return (
        <Card className="overflow-hidden transition-shadow hover:shadow-lg group">
            <Link href={eventUrl} aria-label={`View details for ${event.title}`}>
                <div className="aspect-video relative w-full overflow-hidden">
                    <Image
                        src={event.imageUrl || '/images/event-placeholder.png'}
                        alt={`Image for ${event.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground leading-tight hover:text-primary">
                        {event.title}
                    </h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center"></div>
                            <CalendarDays className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span>{event.location}</span>
                        </div>

                </CardContent>
            </Link>
        </Card>
    );
};

export default EventCard;
