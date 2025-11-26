import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white group">
            <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
              <span className="text-primary font-bold text-xl font-serif">ط</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-wide group-hover:text-primary transition-colors">
              المحامي طارق<span className="text-primary">.</span>
            </span>
          </div>

          <div className="text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} مكتب طارق للمحاماة. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4 justify-center md:justify-end mt-4">
              <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-primary transition-colors">شروط الخدمة</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
