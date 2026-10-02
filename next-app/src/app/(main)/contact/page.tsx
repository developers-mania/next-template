import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  /**COMPONENT */
  return (
    <article className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-muted-foreground">
        Questions or feedback? Email us at{" "}
        <a href="mailto:hello@example.com" className="font-medium text-foreground underline">
          hello@example.com
        </a>
        .
      </p>
    </article>
  );
};

export default Contact;
