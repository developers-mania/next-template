import Card from "@/components/ui/Card";

type StatCardProps = {
  label: string;
  value: number;
  isLoading?: boolean;
};

const StatCard = ({ label, value, isLoading }: StatCardProps) => {
  /**COMPONENT */
  return (
    <Card>
      <p className="text-sm text-muted-foreground">{label}</p>
      {isLoading ? (
        <div className="mt-2 h-8 w-12 animate-pulse rounded bg-muted" />
      ) : (
        <p className="mt-1 text-3xl font-semibold">{value}</p>
      )}
    </Card>
  );
};

export default StatCard;
