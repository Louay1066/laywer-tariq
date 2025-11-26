"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    year: "2018 - الحاضر",
    title: "شريك أول",
    company: "مكتب طارق وشركاه للمحاماة",
    description: "قيادة أقسام الدفاع الجنائي والتقاضي التجاري. التعامل بنجاح مع قضايا رفيعة المستوى بنسبة نجاح 95%.",
    icon: Briefcase,
  },
  {
    year: "2012 - 2018",
    title: "محامٍ مشارك",
    company: "مجموعة سميث وويسون القانونية",
    description: "تخصص في قانون الأسرة والتقاضي المدني. توجيه المحامين المبتدئين وتطوير علاقات رئيسية مع العملاء.",
    icon: Briefcase,
  },
  {
    year: "2012",
    title: "دكتوراه في القانون",
    company: "كلية الحقوق بجامعة هارفارد",
    description: "تخرج بامتياز مع مرتبة الشرف. محرر في مجلة القانون. تخصص في القانون الدستوري.",
    icon: GraduationCap,
  },
  {
    year: "2015",
    title: "أفضل 40 تحت سن 40",
    company: "المحامون الوطنيون للمحاكمات",
    description: "تكريم للتميز في التقاضي للدفاع الجنائي.",
    icon: Award,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "var(--primary)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "var(--secondary)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-primary font-bold uppercase tracking-wider mb-3">مسيرتي المهنية</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">الخبرة المهنية</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute right-0 md:right-1/2 transform md:translate-x-1/2 top-0 h-full w-0.5 bg-white/10" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-center md:items-start gap-8`}
              >
                {/* Icon */}
                <div className="absolute right-0 md:right-1/2 transform translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pr-16 md:pr-0 md:pl-16 md:text-left">
                  <div className={`bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4 border border-primary/20">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">{exp.title}</h3>
                    <h4 className="text-primary/80 font-medium mb-4 text-lg">{exp.company}</h4>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Empty half for layout balance */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
