import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dra. Ana Paula",
      role: "Ortodontista",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "O OdontoSync mudou minha vida. Antes eu perdia horas organizando papelada, agora tenho tudo no celular. A confirmação por WhatsApp reduziu minhas faltas a quase zero.",
    },
    {
      name: "Dr. Ricardo Silva",
      role: "Implantodontista",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "A gestão financeira é impecável. Consigo ver exatamente quanto lucrei no mês e pagar as comissões dos outros dentistas sem dor de cabeça.",
    },
    {
      name: "Clínica Sorriso",
      role: "Equipe Gestora",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Gerenciar 3 unidades era um caos. O OdontoSync centralizou tudo. O suporte deles é sensacional, sempre resolvem tudo muito rápido.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Quem usa, recomenda</h2>
          <p className="text-xl text-gray-500">
            Junte-se a mais de 2.000 dentistas que transformaram suas clínicas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 flex-1 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-bold text-gray-900">{t.name}</h5>
                  <span className="text-sm text-primary font-medium">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
