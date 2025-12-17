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
      image: "/features/prontuario.png",
      title: "Prontuário Digital",
      desc: "Anamnese, evolução clínica, odontograma interativo e prescrições digitais com validade jurídica.",
    },
    {
      icon: CalendarCheck,
      image: "/features/agenda.png",
      title: "Agenda Inteligente",
      desc: "Controle de salas, encaixes rápidos e visualização por dia, semana ou profissional.",
    },
    {
      icon: MessageCircle,
      image: "/features/whatsapp.png",
      title: "Automação WhatsApp",
      desc: "Mensagens de confirmação, aniversários e retorno preventivo sem intervenção manual.",
    },
    {
      icon: DollarSign,
      image: "/features/financeiro.png",
      title: "Controle Financeiro",
      desc: "Contas a pagar/receber, repasse de comissões para dentistas e integração bancária.",
    },
    {
      icon: Archive,
      image: "/features/estoque.png",
      title: "Estoque e Compras",
      desc: "Alertas de estoque baixo, controle de validade e gestão de fornecedores.",
    },
    {
      icon: ShieldCheck,
      image: "/features/seguranca.png",
      title: "Segurança de Dados",
      desc: "Backups diários automáticos, criptografia de ponta a ponta e níveis de acesso.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-accent/30 to-white">
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
              className="group relative rounded-2xl p-[1px] transition-all duration-300 bg-gray-100 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:shadow-[0_0_20px_rgba(0,139,139,0.3)]"
            >
              <div className="bg-white h-full rounded-[15px] p-8 flex flex-col items-start text-left">
                <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className={`w-20 h-20 ${feature.title === "Automação WhatsApp" ? "object-contain" : "object-cover rounded-2xl"}`}
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center text-primary">
                      <feature.icon size={32} />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-start-2 lg:col-span-2 relative rounded-2xl p-[1px] transition-all duration-300 bg-gray-100 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:shadow-[0_0_20px_rgba(0,139,139,0.3)] group"
          >
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 h-full rounded-[15px] p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <PieChart size={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Relatórios Gerenciais</h3>
                <p className="text-gray-600">
                  Dashboards visuais com indicadores de desempenho (KPIs), taxa de
                  conversão de orçamentos e produtividade da equipe.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
