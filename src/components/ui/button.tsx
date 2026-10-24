"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "inverse";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-white/90 border border-transparent",
  secondary:
    "bg-white text-black hover:bg-white/90 border border-transparent",
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-transparent",
  outline:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white hover:text-black",
  inverse:
    "bg-white text-black hover:bg-white/90 border border-transparent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.14em] uppercase",
  md: "px-5 py-2.5 text-xs tracking-[0.14em] uppercase",
  lg: "px-8 py-3.5 text-[0.8125rem] tracking-[0.16em] uppercase",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export type ButtonProps =
  | (Common & {
      href: string;
      external?: boolean;
      type?: never;
      disabled?: never;
    })
  | (Common & {
      href?: undefined;
      external?: never;
      type?: "button" | "submit" | "reset";
      disabled?: boolean;
      onClick?: () => void;
    });

export function Button(props: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const { children, variant = "primary", size = "md", className } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const motionProps = reduceMotion
    ? {}
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.span className="inline-flex" {...motionProps}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.span>
    );
  }

  const type = "type" in props ? props.type ?? "button" : "button";
  const disabled = "disabled" in props ? props.disabled : undefined;
  const onClick = "onClick" in props ? props.onClick : undefined;

  return (
    <motion.button
      className={classes}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
