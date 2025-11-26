"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
}

export default function Stats() {
  return (
    <div className="bg-background py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 p-8 rounded-2xl bg-card/30 border border-white/5 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 w-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 group">
            <dt className="text-base/7 text-gray-400 font-medium group-hover:text-gray-300 transition-colors">سنوات من الخبرة</dt>
            <dd className="order-first text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif text-primary">
              <Counter value={15} suffix="+" />
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 p-8 rounded-2xl bg-card/30 border border-white/5 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 w-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 group">
            <dt className="text-base/7 text-gray-400 font-medium group-hover:text-gray-300 transition-colors">قضايا ناجحة</dt>
            <dd className="order-first text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif text-primary">
              <Counter value={500} suffix="+" />
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 p-8 rounded-2xl bg-card/30 border border-white/5 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 w-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 group">
            <dt className="text-base/7 text-gray-400 font-medium group-hover:text-gray-300 transition-colors">نسبة نجاح</dt>
            <dd className="order-first text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif text-primary">
              <Counter value={95} suffix="%" />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
