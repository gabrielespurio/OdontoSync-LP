import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemSolution() {
  return (
    <section id="solution" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Transforme o caos em controle
          </h2>
          <p className="text-xl text-gray-600">
            Identifique os gargalos que impedem o crescimento da sua clínica e
            veja como resolvemos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border-l-8 border-red-400"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <X size={24} />
              </span>
              Problemas Comuns
            </h3>
            <div className="space-y-8">
              {[
                {
                  title: "Faltas Recorrentes",
                  desc: "Pacientes esquecem consultas, gerando buracos na agenda e prejuízo financeiro.",
                },
                {
                  title: "Prontuários de Papel",
                  desc: "Dificuldade em encontrar histórico, risco de perda de dados e excesso de volume físico.",
                },
                {
                  title: "Descontrole Financeiro",
                  desc: "Mistura de contas pessoais com da clínica e falta de previsibilidade de caixa.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-l-8 border-primary scale-105 relative z-10"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-primary">
                <Check size={24} />
              </span>
              Solução OdontoSync
            </h3>
            <div className="space-y-8">
              {[
                {
                  title: "Confirmação Automática",
                  desc: "Lembretes automáticos via WhatsApp reduzem faltas em até 40%.",
                },
                {
                  title: "Prontuário 100% Digital",
                  desc: "Acesse o histórico completo, odontograma e exames em 1 clique, de onde estiver.",
                },
                {
                  title: "Gestão Financeira Clara",
                  desc: "Fluxo de caixa em tempo real, DRE e emissão de boletos simplificada.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
