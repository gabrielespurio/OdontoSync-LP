import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle, PieChart, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Novo: Integração total com WhatsApp
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Sincronize sua clínica
          <br />
          <span className="text-gradient-brand">com o futuro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-500 max-w-2xl mx-auto mb-10"
        >
          Sistema completo de gestão odontológica na nuvem. Organização,
          controle financeiro e fidelização de pacientes em uma única plataforma.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Button
            size="lg"
            className="bg-gradient-brand hover:opacity-90 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-blue-500/20 transition-transform hover:-translate-y-1"
          >
            Comece Grátis por 14 Dias <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary/5 rounded-full px-8 h-14 text-lg"
          >
            Agendar Demonstração
          </Button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto bg-white rounded-t-3xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          <div className="bg-gray-50 border-b px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          
          <div className="bg-slate-50 p-6 md:p-8 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 min-h-[500px]">
            {/* Sidebar Mock */}
            <div className="hidden md:block bg-white rounded-xl p-6 shadow-sm">
              <div className="w-8 h-8 bg-primary rounded-lg mb-8" />
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-3 bg-slate-100 rounded w-3/4" />
                ))}
              </div>
            </div>

            {/* Content Mock */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div className="h-8 w-48 bg-slate-200 rounded-lg" />
                <div className="h-10 w-32 bg-blue-500/10 rounded-lg" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { color: "bg-teal-50", icon: Users },
                  { color: "bg-blue-50", icon: Calendar },
                  { color: "bg-red-50", icon: PieChart },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <div className={`w-10 h-10 ${item.color} rounded-lg mb-4 flex items-center justify-center`}>
                        <item.icon className="w-5 h-5 opacity-50" />
                    </div>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-2" />
                    <div className="h-6 w-24 bg-slate-800 rounded" />
                  </div>
                ))}
              </div>

              <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-end justify-between gap-4">
                  {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                      <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group">
                          <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            className="absolute bottom-0 left-0 right-0 rounded-t-lg bg-gradient-to-t from-primary to-teal-400 opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
