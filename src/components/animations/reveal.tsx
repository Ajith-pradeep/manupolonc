"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const easeOut = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={cn(className)}>{children}</div>;
  return (
    <motion.div className={cn(className)} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/**
 * Safe headline reveal — fades the full line (no overflow clip),
 * so text cannot get stuck invisible.
 */
export function TextReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  animateOnView = true,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  animateOnView?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      {...(animateOnView
        ? {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
          }
        : {
            animate: { opacity: 1, y: 0 },
          })}
      transition={{ duration: 0.7, delay, ease: easeOut }}
    >
      <Tag className={className}>{text}</Tag>
    </motion.div>
  );
}

export function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={cn("overflow-hidden", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ opacity: 0.6, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({
  children,
  className,
  speed = 36,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [speed, -speed],
  );

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
