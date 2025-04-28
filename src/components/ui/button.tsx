import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define button variants using Class Variance Authority (CVA)
// This creates a flexible system for generating button styles
const buttonVariants = cva(
    // Base styles that apply to all buttons
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        // Define different visual variants for the button
        variants: {
            variant: {
                // Different color schemes and styles for buttons
                default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                destructive:
                    "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            // Define different sizes for the button
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9", // Special size for icon-only buttons
            },
        },
        // Set default variant and size if not specified
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

// Button component with flexible rendering and styling
function Button({
    className, // Additional CSS classes
    variant, // Button style variant
    size, // Button size
    asChild = false, // Option to render as a child component (useful for custom elements)
    ...props // Spread remaining button props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    // Use Radix UI's Slot if asChild is true, otherwise use standard button
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            // Combine variants with any additional className using the cn (class names) utility
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

// Export both the Button component and its variant generator
export { Button, buttonVariants };
