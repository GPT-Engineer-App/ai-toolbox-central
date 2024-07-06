import React, { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "CLI Tools",
    items: [
      {
        name: "GPT-3 CLI",
        releaseDate: "January 2023",
        description: "A command-line interface for interacting with OpenAI's GPT-3 model.",
        images: ["/images/gpt3-cli-1.png", "/images/gpt3-cli-2.png"],
        downloadLink: "https://github.com/openai/gpt-3/releases",
        cliInstructions: "pip install gpt3-cli",
        tags: ["Python", "API"],
      },
      {
        name: "AI Image Enhancer CLI",
        releaseDate: "March 2023",
        description: "Enhance image quality using AI from the command line.",
        images: ["/images/ai-image-enhancer-1.png", "/images/ai-image-enhancer-2.png"],
        downloadLink: "https://github.com/ai-image-enhancer/releases",
        cliInstructions: "cargo install ai-image-enhancer",
        tags: ["Rust", "Image Processing"],
      },
      // Add more CLI tools here
    ],
  },
  {
    title: "Executable Utilities",
    items: [
      {
        name: "AI Video Enhancer",
        releaseDate: "February 2023",
        description: "A desktop utility to enhance video quality using AI.",
        images: ["/images/ai-video-enhancer-1.png", "/images/ai-video-enhancer-2.png"],
        downloadLink: "https://github.com/ai-video-enhancer/releases",
        cliInstructions: "apt-get install ai-video-enhancer",
        tags: ["Linux", "Video Processing"],
      },
      // Add more executable utilities here
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
        <h1 className="text-4xl font-bold">Best AI CLI Tools and Executable Utilities</h1>
        <p className="text-lg text-muted-foreground">Explore a curated list of the best AI CLI tools and executable utilities.</p>
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
                          <p className="text-muted-foreground">{item.releaseDate}</p>
                          <p className="text-muted-foreground">{item.description}</p>
                          <div className="mt-2 flex space-x-4">
                            <Button variant="link" as="a" href={item.downloadLink}>
                              Download
                            </Button>
                          </div>
                          <div className="mt-2">
                            <code className="block bg-muted p-2 rounded">{item.cliInstructions}</code>
                          </div>
                          <div className="mt-2 space-x-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="inline-block bg-muted px-2 py-1 rounded-full text-xs font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            {item.images.map((src, index) => (
                              <img key={index} src={src} alt={`${item.name} screenshot ${index + 1}`} className="rounded-lg" />
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