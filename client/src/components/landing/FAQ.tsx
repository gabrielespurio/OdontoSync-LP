import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "Preciso instalar algo no computador?",
      a: "Não! O OdontoSync é 100% na nuvem. Você acessa pelo navegador de qualquer computador, tablet ou celular, sem ocupar espaço no seu dispositivo.",
    },
    {
      q: "Meus dados estão seguros?",
      a: "Sim, utilizamos criptografia de ponta a ponta (a mesma dos bancos) e realizamos backups automáticos diários. Seus dados são seus e você pode exportá-los quando quiser.",
    },
    {
      q: "Como funciona a migração de dados?",
      a: "Nossa equipe auxilia na importação dos dados do seu sistema antigo ou planilhas. Temos um time dedicado para garantir que você comece com tudo organizado.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b-gray-100 mb-4">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
