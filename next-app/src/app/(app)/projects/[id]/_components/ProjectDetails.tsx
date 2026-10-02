"use client";

import Link from "next/link";
import StatusBadge from "@/components/shared/StatusBadge";
import Card from "@/components/ui/Card";
import Spinner from "@/components/ui/Spinner";
import { ROUTES } from "@/constants";
import { formatDate } from "@/lib/utils";
import { useGetProjectQuery } from "@/store/api/projectsApi";

const ProjectDetails = ({ id }: { id: string }) => {
  /**VARIABLES */
  const { data: project, isLoading, isError } = useGetProjectQuery(id);

  /**COMPONENT */
  return (
    <div className="max-w-2xl space-y-6">
      <Link href={ROUTES.dashboard} className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to dashboard
      </Link>

      {isLoading && (
        <div className="flex justify-center py-12">
          <Spinner />
        </div>
      )}

      {isError && <Card className="text-muted-foreground">Project not found.</Card>}

      {project && (
        <Card className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-semibold">{project.name}</h1>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-muted-foreground">{project.description}</p>
          <p className="text-sm text-muted-foreground">Last updated {formatDate(project.updatedAt)}</p>
        </Card>
      )}
    </div>
  );
};

export default ProjectDetails;
