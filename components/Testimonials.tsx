"use client";

import { motion } from "motion/react";

const testimonials = [
	{
		body: "خبرة طارق في قانون الشركات أنقذت شركتنا من كارثة محتملة. تفكيره الاستراتيجي واهتمامه بالتفاصيل لا مثيل لهما.",
		author: {
			name: "سارة أحمد",
			handle: "صاحبة عمل",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "كنت أواجه تهماً خطيرة ولم أكن أعرف إلى أين أتجه. حارب طارق من أجلي في كل خطوة وتم رفض القضية. أنا ممتن له إلى الأبد.",
		author: {
			name: "محمد علي",
			handle: "عميل سابق",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "التعامل مع الطلاق ليس سهلاً أبداً، لكن طارق جعل العملية سلسة قدر الإمكان. كان رحيماً ولكنه حازم في حماية مصالحي.",
		author: {
			name: "ليلى محمود",
			handle: "عميلة قانون الأسرة",
			imageUrl:
				"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "ساعدني طارق في فهم قوانين العقارات المعقدة. خبرته لا تقدر بثمن وأنقذتني من خسائر كبيرة.",
		author: {
			name: "خالد عمر",
			handle: "مستثمر عقاري",
			imageUrl:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "مهنية عالية وتفاني في العمل. الفريق القانوني كان متواجداً دائماً للإجابة على استفساراتنا.",
		author: {
			name: "فاطمة يوسف",
			handle: "مديرة شركة",
			imageUrl:
				"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "نصائح واضحة ودعم كبير طوال فترة القضية. لم أشعر أبداً أنني وحدي في هذه المعركة.",
		author: {
			name: "عمر حسن",
			handle: "عميل استشارة",
			imageUrl:
				"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
];

export default function Testimonials() {
	return (
		<div id="testimonials" className="bg-background py-24 sm:py-32 relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-50"></div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
				<div className="mx-auto max-w-xl text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-lg font-semibold leading-8 tracking-tight text-primary"
					>
						آراء العملاء
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif"
					>
						لقد عملنا مع آلاف الأشخاص المذهلين
					</motion.p>
				</div>
				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
					<div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={testimonial.author.handle}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="pt-8 sm:inline-block sm:w-full sm:px-4"
							>
								<figure className="rounded-2xl bg-card/50 backdrop-blur-md p-8 text-sm leading-6 border border-white/5 hover:border-primary/30 transition-colors duration-300">
									<blockquote className="text-gray-300 relative">
										<span className="absolute -top-4 -right-2 text-4xl text-primary/20 font-serif">"</span>
										<p className="relative z-10 italic">{`"${testimonial.body}"`}</p>
									</blockquote>
									<figcaption className="mt-6 flex items-center gap-x-4">
										<img
											className="h-10 w-10 rounded-full bg-gray-800 ring-2 ring-primary/20"
											src={testimonial.author.imageUrl}
											alt=""
										/>
										<div>
											<div className="font-semibold text-white">
												{testimonial.author.name}
											</div>
											<div className="text-primary/60">{`@${testimonial.author.handle}`}</div>
										</div>
									</figcaption>
								</figure>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
