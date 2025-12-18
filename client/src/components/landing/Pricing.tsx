import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Planos flexíveis para cada fase
          </h2>
          <p className="text-xl text-gray-500">
            Sem fidelidade. Mude de plano quando quiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
          {/* Starter */}
          <div className="bg-white border rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">Starter</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-gray-900">R$ 99</span>
              <span className="text-gray-500 font-medium">/mês</span>
            </div>
            <p className="text-gray-500 text-sm mb-8">
              Para dentistas autônomos iniciando a digitalização.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "1 Usuário (Dentista)",
                "Agenda Básica",
                "Prontuário Digital",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full rounded-xl py-6 font-bold border-secondary text-secondary hover:bg-secondary/5">
              Começar Agora
            </Button>
          </div>

          {/* Professional */}
          <div className="bg-blue-50/50 rounded-3xl p-[2px] relative shadow-xl transform scale-105 z-10 bg-gradient-to-b from-primary to-secondary">
            <div className="bg-white h-full w-full rounded-[22px] p-8 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-b-xl text-sm font-bold z-20">
                  Mais Popular
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2 mt-4">Professional</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-gray-900">R$ 199</span>
                  <span className="text-gray-500 font-medium">/mês</span>
                </div>
                <p className="text-gray-500 text-sm mb-8">
                  Ideal para clínicas em crescimento com secretária.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "3 Usuários",
                    "Confirmação WhatsApp",
                    "Controle Financeiro Completo",
                    "Emissão de Boletos",
                    "Gestão de Estoque",
                    "Suporte Prioritário",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 font-bold text-lg shadow-lg shadow-teal-500/20">
                  Começar Agora
                </Button>
            </div>
          </div>

          {/* Business */}
          <div className="bg-white border rounded-3xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">Personalizado</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-gray-900">R$ 449</span>
              <span className="text-gray-500 font-medium">/mês</span>
            </div>
            <p className="text-gray-500 text-sm mb-8">
              Gestão avançada para redes e grandes clínicas.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Usuários Ilimitados",
                "Multi-unidades",
                "Relatórios Avançados (BI)",
                "Gerente de Conta Dedicado",
                "Assistente Virtual",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full rounded-xl py-6 font-bold border-secondary text-secondary hover:bg-secondary/5">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
