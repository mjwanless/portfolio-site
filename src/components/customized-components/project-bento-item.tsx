import { cn } from "@/lib/utils";
import React from "react";

// BentoGrid component
export function BentoGrid({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto", className)}>{children}</div>;
}

// BentoGridItem component
export function BentoGridItem({
    className,
    title,
    description,
    header,
    icon,
    tags,
}: {
    className?: string;
    title: string;
    description: string;
    header: React.ReactNode;
    icon?: React.ReactNode;
    tags?: string[];
}) {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:bg-neutral-50 dark:hover:bg-neutral-800 transition duration-200 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden cursor-pointer",
                className
            )}>
            <div className="relative w-full h-48 overflow-hidden">{header}</div>
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-base">{title}</h3>
                    {icon && <div className="text-neutral-500">{icon}</div>}
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{description}</p>
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs px-2 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
