import React from "react";
import { Skeleton } from "../ui/skeleton";

const UserInfoSkeleton = () => {
    return (
        <div className="flex flex-raw gap-2 items-center">
            <Skeleton className="rounded-full w-[32px] h-[32px]"/>
            <Skeleton className="h-4 w-[80px]"/>
        </div>
    );
};

export default UserInfoSkeleton;