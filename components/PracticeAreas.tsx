"use client";

import { motion } from "motion/react";
import { Gavel, Users, Building2, Scale, Shield, FileText } from "lucide-react";

const practices = [
  {
    title: "الدفاع الجنائي",
    description: "تمثيل قوي لجميع أنواع التهم الجنائية، وحماية حقوقك وحريتك.",
    icon: Shield,
  },
  {
    title: "قانون الأسرة",
    description: "توجيه رحيم خلال الطلاق، ونزاعات الحضانة، وغيرها من القضايا الأسرية الحساسة.",
    icon: Users,
  },
  {
    title: "قانون الشركات",
    description: "مشورة قانونية استراتيجية للشركات، من التأسيس إلى التقاضي المعقد والاندماجات.",
    icon: Building2,
  },
  {
    title: "التقاضي المدني",
    description: "التعامل بخبرة مع النزاعات المدنية، وضمان حماية مصالحك داخل وخارج المحكمة.",
    icon: Gavel,
  },
  {
    title: "تخطيط التركات",
    description: "مساعدتك في تأمين إرثك من خلال الوصايا الشاملة، والصناديق الاستئمانية، وإدارة التركات.",
    icon: FileText,
  },
  {
    title: "الإصابات الشخصية",
    description: "النضال من أجل تعويض عادل عندما تتعرض للإصابة بسبب إهمال شخص آخر.",
    icon: Scale,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-primary font-bold uppercase tracking-wider mb-3">مجالات الخبرة</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">مجالات الممارسة القانونية</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            نقدم خدمات قانونية شاملة مصممة لتلبية الاحتياجات المتنوعة لعملائنا، مع التركيز على تحقيق أفضل النتائج.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-500 border border-white/10 group-hover:border-primary shadow-lg shadow-black/20">
                  <practice.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-4 text-white group-hover:text-primary transition-colors duration-300">{practice.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {practice.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
