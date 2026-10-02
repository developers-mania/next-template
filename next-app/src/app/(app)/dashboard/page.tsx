import type { Metadata } from "next";
import ProjectList from "./_components/ProjectList";
import ProjectStats from "./_components/ProjectStats";

export const metadata: Metadata = {
  title: "Dashboard",
};

/**
 * The page stays a Server Component (so it can export metadata).
 * The interactive, data-fetching parts are Client Components in ./_components.
 */
const DashboardPage = () => {
  /**COMPONENT */
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">An overview of your projects.</p>
      </div>
      <ProjectStats />
      <ProjectList />
    </div>
  );
};

export default DashboardPage;
