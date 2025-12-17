import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-brand text-white text-center relative overflow-hidden">
      {/* Abstract circles */}
      <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para modernizar sua clínica?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Experimente todas as funcionalidades gratuitamente por 14 dias. Sem
          cartão de crédito.
        </p>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <Button size="lg" className="rounded-full py-6 px-8 bg-[#002D5C] hover:bg-[#001f40] text-white font-bold text-lg">
            Começar Agora
          </Button>
        </form>
      </div>
    </section>
  );
}
