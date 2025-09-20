import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { hoverVariants, buttonVariants as motionButtonVariants, rippleEffect } from "@/lib/animations";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-black dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:text-white",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-black dark:hover:bg-accent/50 dark:hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/25",
        gradient: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      animation: {
        none: "",
        scale: "hover:scale-105",
        lift: "hover:-translate-y-1",
        glow: "hover:shadow-lg hover:shadow-primary/25",
        ripple: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "scale",
    },
  }
);

const MotionButton = motion.button;

function Button({
  className,
  variant,
  size,
  animation = "scale",
  asChild = false,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : MotionButton;
  const [ripples, setRipples] = React.useState([]);

  const handleClick = (e) => {
    if (animation === "ripple" && !asChild) {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple = { id: Date.now(), x, y, size };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    }

    if (props.onClick) props.onClick(e);
  };

  const motionProps = !asChild
    ? {
        variants: motionButtonVariants,
        whileHover: animation !== "none" ? hoverVariants[animation === "ripple" ? "scale" : animation] : undefined,
        whileTap: { scale: 0.98, transition: { duration: 0.1 } },
      }
    : {};

  return (
    <Comp
      data-slot="button"
      {...props}
      {...motionProps}
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size, animation, className }))}
    >
      <span className="relative flex items-center justify-center w-full h-full">
        {children}
        {animation === "ripple" &&
          ripples.map((r) => (
            <motion.div
              key={r.id}
              className="absolute rounded-full bg-white/30 pointer-events-none"
              style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
              {...rippleEffect}
            />
          ))}
      </span>
    </Comp>
  );
}

export { Button, buttonVariants };
