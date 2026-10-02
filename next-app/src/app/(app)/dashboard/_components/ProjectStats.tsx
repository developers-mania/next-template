"use client";

import { useGetProjectsQuery } from "@/store/api/projectsApi";
import { getProjectStats } from "../_lib/stats";
import StatCard from "./StatCard";

const ProjectStats = () => {
  /**VARIABLES */
  // ProjectList calls the same query: RTK Query sends just one request and shares the result.
  const { data: projects = [], isLoading } = useGetProjectsQuery();
  const stats = getProjectStats(projects);

  /**COMPONENT */
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <StatCard label="Total projects" value={stats.total} isLoading={isLoading} />
      <StatCard label="Active" value={stats.active} isLoading={isLoading} />
      <StatCard label="Completed" value={stats.done} isLoading={isLoading} />
    </div>
  );
};

export default ProjectStats;
