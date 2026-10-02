"use client";

import Link from "next/link";
import StatusBadge from "@/components/shared/StatusBadge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Spinner from "@/components/ui/Spinner";
import { ROUTES } from "@/constants";
import { useGetProjectsQuery } from "@/store/api/projectsApi";

const ProjectList = () => {
  /**VARIABLES */
  const { data: projects, isLoading, isError, refetch } = useGetProjectsQuery();

  /**COMPONENT */
  if (isLoading) {
    return (
      <Card className="flex justify-center">
        <Spinner />
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">Could not load projects.</p>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </Card>
    );
  }

  if (!projects?.length) {
    return <Card className="text-sm text-muted-foreground">No projects yet.</Card>;
  }

  return (
    <Card className="p-0">
      <ul className="divide-y divide-border">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={ROUTES.project(project.id)}
              className="flex items-center justify-between gap-4 p-4 hover:bg-muted"
            >
              <div className="min-w-0">
                <p className="font-medium">{project.name}</p>
                <p className="truncate text-sm text-muted-foreground">{project.description}</p>
              </div>
              <StatusBadge status={project.status} />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProjectList;
