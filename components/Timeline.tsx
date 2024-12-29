"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Como cumprir as normas de apresentação escrita das teses e dissertações da UA",
    date: "October 2024",
    location: "University of Aveiro / Online",
    type: "Webinar",
    description: "This webinar covered the norms for theses and dissertations at the University of Aveiro. I attended and found it very helpful for formatting and organization.",
    highlights: ["Norms", "Dissertation", "SBIDM"],
  },
  {
    id: 2,
    title: "Seleção de Fontes de Informação científica",
    date: "October 2024",
    location: "University of Aveiro",
    type: "Presentation",
    description: "This presentation focused on selecting scientific information sources, offering valuable insights for dissertations and academic research, including how to take advantage of AI to select scientific information.",
    highlights: ["Dissertation", "SBDIM", "Scientific"],
  },
  {
    id: 3,
    title: "Gerir referências bibliográficas com o Mendeley RM",
    date: "October 2024",
    location: "University of Aveiro",
    type: "Presentation",
    description: "This presentation explored managing bibliographic references using Mendeley Reference Manager. Despite using Zotero this presentation provide essential tools for organizing and citing sources in dissertations.",
    highlights: ["Dissertation", "SBDIM", "References", "Mendeley"],
  },
  {
    id: 4,
    title: "Github Universe",
    date: "October 2024",
    location: "San Francisco, CA / Online",
    type: "Conference",
    description: "GitHub Universe is a premier conference showcasing advancements in AI, developer experience, and security, offering insights and innovations for the developer community. I attended and found it incredibly insightful and engaging, providing valuable ideas to stay on the cutting edge of technology.",
    highlights: ["AI", "Developer Experience", "Security"],
  },
  {
    id: 5,
    title: "IA... vamos conversar?",
    date: "November 2024",
    location: "SALT, University of Aveiro",
    type: "Workshop",
    description: "This workshop had 3 parts: in the first one there was a presentation to introduce the theme and provide examples on how AI can help teachers, then 2 groups of teachers were made and in the second phase each group wrote in post-its the use cases where AI could help them and in the last part they prioritize the use cases. In the first phase I presented the examples to the teachers and in the following phases helped them brainstorming use cases.",
    highlights: ["AI", "EduAI", "Dissertation"],
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20" />
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {event.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}