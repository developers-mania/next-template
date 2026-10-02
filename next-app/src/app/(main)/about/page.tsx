import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  /**COMPONENT */
  return (
    <article className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-muted-foreground">
        Pages are grouped by layout. <code>(main)</code> holds public pages like this one, <code>(auth)</code>{" "}
        holds login and sign-up, and <code>(app)</code> holds the signed-in dashboard. The brackets keep the
        group names out of the URL.
      </p>
      <p className="text-muted-foreground">
        Code used by only one feature lives inside that feature&apos;s folder. Code used in several places
        moves up to <code>src/components</code>, <code>src/hooks</code> or <code>src/lib</code>.
      </p>
    </article>
  );
};

export default About;
