"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroTextProps = {
  text: string;
  as?: "h1" | "h2" | "p";
  className?: string;
  delay?: number;
};

export function HeroText({
  text,
  as: Tag = "h1",
  className,
  delay = 0.15,
}: HeroTextProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Tag className={cn(className)}>{text}</Tag>
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0.4,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
