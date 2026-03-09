import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ChevronDown, ChevronUp, Play, ArrowRight } from 'lucide-react';

// --- Components ---

const Logo = () => (
  <img 
    src="https://life360parceiros.com.br/wp-content/uploads/2026/02/versao-1-dourada.png" 
    alt="Life 360 Parceiros" 
    className="h-12 md:h-16 object-contain"
  />
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, onClick, className = "", type = "button" }: { children: React.ReactNode; onClick?: () => void; className?: string; type?: "button" | "submit" }) => (
  <button
    type={type}
    onClick={onClick}
    className={`bg-[#D4AF37] hover:bg-[#b5952f] text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2 text-lg ${className}`}
  >
    {children}
  </button>
);

// --- Hero Section ---

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_50%)] pointer-events-none" />
      
      <header className="pt-8 pb-4 px-4 flex justify-center relative z-10">
        <Logo />
      </header>

      <main className="flex-grow flex items-center justify-center relative z-10 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
          >
            Tenha um <span className="text-[#D4AF37]">ecossistema pronto</span> para operar reabilitação de crédito com plataforma, método e suporte.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Para quem quer vender e operar reabilitação de crédito com processo, entrega e organização, sem prometer milagre e sem improviso.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl mx-auto mb-12 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 bg-black relative z-20"
          >
            <iframe 
              src="https://drive.google.com/file/d/1FYOdGH59KkQbhbZrgXuCoPlwJUFR-6_O/preview" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              className="w-full h-full"
              title="Live Life 360 Parceiros"
            ></iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12"
          >
            {[
              "Plataforma com esteira completa de reabilitação de crédito",
              "Operação guiada com metodologia validada você não fica sozinho",
              "Suporte diário para destravar casos e acelerar a execução",
              "Ideal para quem já atende clientes e quer aumentar conversão e ticket com uma solução séria"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="mt-1 bg-[#D4AF37]/20 p-1 rounded-full">
                  <Check size={16} className="text-[#D4AF37]" />
                </div>
                <span className="text-gray-200 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button onClick={scrollToForm} className="w-full md:w-auto mx-auto text-xl px-12 py-5">
              👉 Quero acesso ao ecossistema
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

// --- Live Content Section ---

const LiveContentSection = () => {
  return (
    <Section className="bg-zinc-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Assista à live e entenda como funciona o ecossistema <span className="text-[#D4AF37]">Life 360 Parceiros</span> na prática
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Nesta live você vai ver como a plataforma organiza a operação, como o parceiro vende com segurança e como escolher o melhor caminho para começar.
        </p>
        
        <div className="bg-black/40 p-8 rounded-2xl border border-white/5 text-left">
          <h3 className="text-white font-semibold text-xl mb-6 text-center">Você vai aprender:</h3>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              "Como posicionar reabilitação de crédito sem soar golpe",
              "Como a plataforma cria uma esteira de entrega sem bagunça e sem retrabalho",
              "Como funciona o processo e o suporte para você operar com confiança",
              "Quando faz sentido começar com marca Life360 ou ir de White Label"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Play size={20} className="text-[#D4AF37] mt-1 shrink-0 fill-current" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

// --- Target Audience Section ---

const TargetAudience = () => {
  return (
    <Section className="bg-black">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-[#D4AF37]/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="bg-green-500/20 p-2 rounded-lg">
              <Check className="text-green-500" />
            </div>
            Esse ecossistema é para você que
          </h3>
          <ul className="space-y-4">
            {[
              "Já atende pessoas no WhatsApp ou Instagram e quer uma nova linha de receita",
              "Quer organizar a operação e padronizar atendimento e entrega",
              "Quer vender com transparência e processo sem promessas absolutas"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <Check size={18} className="text-green-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-red-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="bg-red-500/20 p-2 rounded-lg">
              <X className="text-red-500" />
            </div>
            Não é para você se
          </h3>
          <ul className="space-y-4">
            {[
              "Você procura renda fácil ou quer vender com promessa garantida"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <X size={18} className="text-red-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

// --- Form Section ---

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    profile: '',
    hasClients: '',
    objective: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Lead Life 360 Parceiros*
    
*Nome:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Perfil:* ${formData.profile}
*Já atende clientes:* ${formData.hasClients}
*Objetivo:* ${formData.objective}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/557991590436?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="form-section" className="bg-zinc-900 border-y border-white/5">
      <div className="max-w-2xl mx-auto bg-black p-8 md:p-12 rounded-3xl border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/5">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">
            Preencha para receber acesso e os próximos passos
          </h2>
          <p className="text-gray-400 text-sm">
            Leva menos de 1 minuto. Usamos suas respostas para liberar o acesso e orientar o próximo passo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp com DDD</label>
            <input
              type="tel"
              name="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Seu perfil de atuação</label>
            <select
              name="profile"
              required
              value={formData.profile}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors appearance-none"
            >
              <option value="">Selecione uma opção</option>
              <option value="Correspondente ou Promotor">Correspondente ou Promotor</option>
              <option value="Contador ou Escritório Contábil">Contador ou Escritório Contábil</option>
              <option value="Consultor de crédito ou score">Consultor de crédito ou score</option>
              <option value="Agência ou Infoprodutor">Agência ou Infoprodutor</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Qual seu principal objetivo?</label>
            <select
              name="objective"
              required
              value={formData.objective}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors appearance-none"
            >
              <option value="">Selecione uma opção</option>
              <option value="Ter uma nova fonte de renda">Ter uma nova fonte de renda</option>
              <option value="Organizar minha operação atual">Organizar minha operação atual</option>
              <option value="Aumentar conversão e ticket">Aumentar conversão e ticket</option>
              <option value="Começar do zero">Começar do zero</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Você já atende clientes hoje?</label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`cursor-pointer border rounded-xl px-4 py-3 flex items-center justify-center transition-all ${formData.hasClients === 'Sim' ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'bg-zinc-900 border-zinc-700 text-gray-400 hover:border-gray-500'}`}>
                <input
                  type="radio"
                  name="hasClients"
                  value="Sim"
                  checked={formData.hasClients === 'Sim'}
                  onChange={handleChange}
                  className="hidden"
                />
                Sim
              </label>
              <label className={`cursor-pointer border rounded-xl px-4 py-3 flex items-center justify-center transition-all ${formData.hasClients === 'Não' ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'bg-zinc-900 border-zinc-700 text-gray-400 hover:border-gray-500'}`}>
                <input
                  type="radio"
                  name="hasClients"
                  value="Não"
                  checked={formData.hasClients === 'Não'}
                  onChange={handleChange}
                  className="hidden"
                />
                Não
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full">
            ✅ Quero acesso ao ecossistema
          </Button>

          <p className="text-center text-xs text-gray-500 mt-4">
            Sem spam. Contato apenas para onboarding e direcionamento do próximo passo.
          </p>
        </form>
      </div>
    </Section>
  );
};

// --- FAQ Section ---

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Vocês estão vendendo crédito?",
      answer: "Não. Aqui é plataforma e ecossistema para o parceiro operar reabilitação de crédito com processo, método e suporte."
    },
    {
      question: "O que exatamente eu vendo?",
      answer: "Você vende a solução e a esteira de reabilitação operada através do ecossistema com organização e entrega."
    },
    {
      question: "Preciso prometer resultado?",
      answer: "Não. A venda é de processo, execução e suporte com alinhamento de expectativa e transparência."
    }
  ];

  return (
    <Section className="bg-black">
      <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ Rápido</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/50 transition-colors"
            >
              <span className="font-semibold text-white text-lg">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-[#D4AF37]" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-6 pt-0 text-gray-400 border-t border-zinc-800/50 mt-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Footer ---

const Footer = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 py-16 px-4 border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Se você quer uma operação séria e pronta para rodar reabilitação de crédito, assista à live e preencha o formulário.
        </h2>
        <Button onClick={scrollToForm} className="mx-auto">
          👉 Quero acesso agora
        </Button>
        <div className="mt-12 opacity-50">
          <Logo />
        </div>
        <p className="text-gray-600 text-sm mt-8">
          © {new Date().getFullYear()} Life 360 Parceiros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="font-sans antialiased bg-black min-h-screen text-white selection:bg-[#D4AF37] selection:text-black">
      <Hero />
      <LiveContentSection />
      <TargetAudience />
      <FormSection />
      <FAQ />
      <Footer />
    </div>
  );
}
