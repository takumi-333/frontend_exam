import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardTitle } from "../ui/card";

const ContainerSkeleton = () => {
  return (
    <Card>
        <Skeleton className="w-full h-screen"/>
    </Card>
  );
};

export default ContainerSkeleton;