import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton component

const CardSkeleton = () => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Skeleton className="h-10 w-10 rounded-full bg-gray-600" />{" "}
          {/* Avatar Skeleton */}
          <div className="flex flex-col">
            <Skeleton className="h-4 w-32 rounded bg-gray-600" />{" "}
            {/* Username Skeleton */}
            <Skeleton className="h-4 w-24 rounded mt-1 bg-gray-600" />{" "}
            {/* Email Skeleton */}
          </div>
        </div>
        <Skeleton className="h-4 w-8 rounded bg-gray-600" />{" "}
        {/* Copy button Skeleton */}
      </div>
      <Skeleton className="h-4 w-full rounded mt-4 bg-gray-600" />{" "}
      {/* Post content Skeleton */}
      <Skeleton className="h-4 w-24 rounded mt-2 bg-gray-600" />{" "}
      {/* Tag Skeleton */}
      <div className="mt-5 flex flex-row gap-4 border-t border-gray-100 pt-3">
        <Skeleton className="h-4 w-16 rounded bg-gray-600" />{" "}
        {/* Edit Skeleton */}
        <Skeleton className="h-4 w-16 rounded bg-gray-600" />{" "}
        {/* Delete Skeleton */}
      </div>
    </div>
  );
};

export default CardSkeleton;
