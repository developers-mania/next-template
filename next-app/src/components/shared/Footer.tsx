import { SITE } from "@/constants";

const Footer = () => {
  /**COMPONENT */
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
};

export default Footer;
