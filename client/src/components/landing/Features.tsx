import {
  FileUser,
  CalendarCheck,
  MessageCircle,
  DollarSign,
  Archive,
  ShieldCheck,
  PieChart,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: FileUser,
      title: "Prontuário Digital",
      desc: "Anamnese, evolução clínica, odontograma interativo e prescrições digitais com validade jurídica.",
    },
    {
      icon: CalendarCheck,
      title: "Agenda Inteligente",
      desc: "Controle de salas, encaixes rápidos e visualização por dia, semana ou profissional.",
    },
    {
      icon: MessageCircle,
      title: "Automação WhatsApp",
      desc: "Mensagens de confirmação, aniversários e retorno preventivo sem intervenção manual.",
    },
    {
      icon: DollarSign,
      title: "Controle Financeiro",
      desc: "Contas a pagar/receber, repasse de comissões para dentistas e integração bancária.",
    },
    {
      icon: Archive,
      title: "Estoque e Compras",
      desc: "Alertas de estoque baixo, controle de validade e gestão de fornecedores.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança de Dados",
      desc: "Backups diários automáticos, criptografia de ponta a ponta e níveis de acesso.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tudo o que sua clínica precisa
          </h2>
          <p className="text-xl text-gray-500">
            Ferramentas poderosas para dentistas, secretárias e gestores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-start-2 lg:col-span-2 bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-blue-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0">
              <PieChart size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Relatórios Gerenciais</h3>
              <p className="text-gray-600">
                Dashboards visuais com indicadores de desempenho (KPIs), taxa de
                conversão de orçamentos e produtividade da equipe.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
