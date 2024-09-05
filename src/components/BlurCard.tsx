import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface BlurCardProps {
  children: React.ReactNode;
  className?: string;
}

const BlurCard: React.FC<BlurCardProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [5, -5]);
  const rotateY = useTransform(x, [-20, 20], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;
      x.set(offsetX / 5);
      y.set(offsetY / 5);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-80 h-60 p-6 bg-white/5 backdrop-blur-3xl rounded-lg shadow-lg border border-white/20 hover:shadow-[0px_10px_50px_rgba(0,0,0,0.7)] transition-shadow duration-1000 ease-in-out ${className}`}
      style={{
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ rotateY: 0, rotateX: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default BlurCard;
