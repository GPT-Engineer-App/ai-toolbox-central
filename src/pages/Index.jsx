import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const categories = [
  {
    title: "AI Tools",
    items: [
      {
        name: "GPT-3",
        description: "A powerful language model developed by OpenAI.",
        downloadLink: "#",
        tutorialLink: "#",
        tags: ["Free", "API"],
      },
      // Add more tools here
    ],
  },
  {
    title: "Utilities",
    items: [
      {
        name: "AI Image Enhancer",
        description: "Enhance image quality using AI.",
        downloadLink: "#",
        tutorialLink: "#",
        tags: ["Free", "Desktop"],
      },
      // Add more utilities here
    ],
  },
  // Add more categories here
];

const Index = () => {
  const refs = useRef(categories.reduce((acc, value) => {
    acc[value.title] = React.createRef();
    return acc;
  }, {}));

  const scrollToCategory = (category) => {
    refs.current[category].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Best AI Tools and Resources</h1>
        <p className="text-lg text-muted-foreground">Explore a curated list of the best AI tools, utilities, programs, and more.</p>
      </header>
      <div className="flex">
        <aside className="w-1/4 pr-4">
          <nav className="sticky top-4">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.title}>
                  <Button variant="link" onClick={() => scrollToCategory(category.title)}>
                    {category.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="w-3/4">
          {categories.map((category) => (
            <section key={category.title} ref={refs.current[category.title]} className="mb-8">
              <Accordion type="single" collapsible>
                <AccordionItem value={category.title}>
                  <AccordionTrigger>
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4">
                      {category.items.map((item) => (
                        <li key={item.name} className="border p-4 rounded-lg">
                          <h3 className="text-xl font-bold">{item.name}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                          <div className="mt-2 flex space-x-4">
                            <Button variant="link" as="a" href={item.downloadLink}>
                              Download
                            </Button>
                            <Button variant="link" as="a" href={item.tutorialLink}>
                              Tutorial
                            </Button>
                          </div>
                          <div className="mt-2 space-x-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="inline-block bg-muted px-2 py-1 rounded-full text-xs font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Button variant="link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="mt-4">
                Back to Top
              </Button>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Index;