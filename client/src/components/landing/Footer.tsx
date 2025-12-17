import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#1A202C] text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
                <span className="text-secondary text-2xl">🦷</span> OdontoSync
              </a>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              A plataforma mais completa para gestão de clínicas odontológicas.
              Tecnologia e simplicidade para você focar no que importa: seus
              pacientes.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Produto</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Novidades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} OdontoSync. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
