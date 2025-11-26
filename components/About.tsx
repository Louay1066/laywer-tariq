"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function About() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-base font-semibold leading-7 text-primary"
              >
                من أنا
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif"
              >
                ملتزمون بالعدالة، مكرسون لنجاحك
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-gray-300"
              >
                مع أكثر من 15 عاماً من الخبرة في المجال القانوني، كرست مسيرتي المهنية لحماية حقوق عملائي. يجمع نهجي بين التمثيل القوي والمشورة الرحيمة، مما يضمن لك وجود مدافع قوي بجانبك.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8"
              >
                <Link href="#experience" className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                  اقرأ المزيد عن خبرتي <span aria-hidden="true">&larr;</span>
                </Link>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="المحامي طارق في مكتبه"
              className="relative w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-500"
              width={2432}
              height={1442}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
