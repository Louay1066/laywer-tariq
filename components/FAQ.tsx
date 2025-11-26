"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "كم تكلفة الاستشارة القانونية؟",
    answer: "تختلف تكلفة الاستشارة حسب نوع القضية وتعقيدها. نقدم استشارة أولية مجانية لتقييم قضيتك وتحديد الخطوات التالية.",
  },
  {
    question: "ما هي المستندات المطلوبة لرفع دعوى؟",
    answer: "يعتمد ذلك على نوع القضية. بشكل عام، ستحتاج إلى إثبات الهوية، وأي عقود أو مستندات ذات صلة بالنزاع. سنزودك بقائمة مفصلة بعد الاستشارة الأولى.",
  },
  {
    question: "كم تستغرق القضية في المحكمة؟",
    answer: "يختلف الجدول الزمني بشكل كبير بناءً على نوع القضية وازدحام المحاكم. نسعى جاهدين لحل القضايا بأسرع وقت ممكن مع ضمان أفضل النتائج.",
  },
  {
    question: "هل تترافعون في قضايا خارج المدينة؟",
    answer: "نعم، مكتبنا يقدم خدماته القانونية في جميع أنحاء المملكة، ولدينا شبكة من الشركاء في مدن مختلفة.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="bg-background py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl font-serif mb-10 text-center"
          >
            الأسئلة الشائعة
          </motion.h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-white/5 rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-right"
                >
                  <span className="text-lg font-semibold text-white font-serif">{faq.question}</span>
                  <span className="mr-6 flex-shrink-0 text-primary">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6" />
                    ) : (
                      <Plus className="h-6 w-6" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
