import Spinner from "@/components/ui/Spinner";

/** Shown automatically by Next.js while the dashboard route loads. */
const DashboardLoading = () => {
  return (
    <div className="flex justify-center py-12">
      <Spinner />
    </div>
  );
};

export default DashboardLoading;
