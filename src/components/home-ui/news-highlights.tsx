import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const news = [
  {
    id: 1,
    title: "Ethiopian Gaming Championship 2025",
    description: "The biggest gaming event in Ethiopia is happening this year!",
    imageUrl: "/images/ethiopian-gaming-championship.jpg",
    link: "/news/ethiopian-gaming-championship-2025",
  },
  {
    id: 2,
    title: "New Gaming Cafe Opens in Addis Ababa",
    description: "A state-of-the-art gaming cafe has opened in the heart of Addis Ababa.",
    imageUrl: "/images/gaming-cafe-addis.jpg",
    link: "/news/new-gaming-cafe-addis-ababa",
  },
  {
    id: 3,
    title: "Ethiopian Esports Team Shines Internationally",
    description: "The Ethiopian esports team has made waves in an international tournament.",
    imageUrl: "/images/ethiopian-esports-team.jpg",
    link: "/news/ethiopian-esports-team-international",
  },
];

export function NewsHighlights() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">News & Highlights</h2>
          <p className="text-muted-foreground max-w-2xl">
            Stay updated with the latest gaming news and highlights from Ethiopia. Explore events, achievements, and more!
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link href={item.link} className="group inline-flex items-center text-primary hover:underline">
                  Read More
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}