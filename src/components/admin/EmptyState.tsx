import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="py-16 flex flex-col items-center justify-center text-center">

      <div className="text-7xl mb-6">
    
      </div>

      <h2 className="text-2xl font-bold text-gray-700">
        {title}
      </h2>

      <p className="mt-3 text-gray-500 max-w-md">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}

    </div>
  );
}