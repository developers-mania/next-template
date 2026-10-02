import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ROUTES, SITE } from "@/constants";

const FEATURES = [
  {
    title: "Feature folders",
    description: "Each route keeps its own components and helpers next to its page.",
  },
  {
    title: "Redux Toolkit + RTK Query",
    description: "Global state and cached API calls to your backend, fully typed.",
  },
  {
    title: "Ready to run",
    description: "A mock API, auth flow and dashboard so every piece has a working example.",
  },
];

const Home = () => {
  /**COMPONENT */
  return (
    <div className="space-y-16">
      <section className="space-y-6 py-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{SITE.name}</h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">{SITE.description}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={ROUTES.signup} className={buttonStyles()}>
            Get started
          </Link>
          <Link href={ROUTES.about} className={buttonStyles({ variant: "outline" })}>
            How it&apos;s organised
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {FEATURES.map((feature) => (
          <Card key={feature.title}>
            <h2 className="font-semibold">{feature.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Home;
