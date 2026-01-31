import { useEffect, useState } from "react";
import {
  Zap,
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  FileText,
  Search,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Plane,
  CreditCard,
  Heart,
  AlertTriangle,
  Building2,
  Smile,
} from "lucide-react";
import logoImage from "figma:asset/c3408d4161476395e88288123c87a1241a5f5659.png";
import wavesBackground from "figma:asset/9d56a886baf09f279c52089b93b3f337ec4082fb.png";
import wavesBackgroundMobile from "figma:asset/d793548253afe128db41fad53b8090adb576c8c2.png";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import { SuccessCases } from "@/app/components/SuccessCases";
import "@/styles/animations.css";

export default function App() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState("");

  useEffect(() => {
    // Intersection Observer para animações de scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          // Adicionar animação apenas uma vez
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar todos os elementos com classe .animate-on-scroll
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => {
        observer.observe(el);
      });

    // Smooth scroll para links âncora
    document
      .querySelectorAll('a[href^="#"]')
      .forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(
            this.getAttribute("href") || "",
          );
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

    // Parallax suave no background
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const background = document.querySelector(
        ".hero-background",
      ) as HTMLElement;
      if (background) {
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#E5EEF2] relative overflow-hidden">
      {/* Header/Logo */}
      <header className="logo-animation pt-12 pb-8 px-4 md:px-8 flex justify-center">
        <img
          src={logoImage}
          alt="IndenizaAi"
          className="h-12 md:h-16 w-auto object-contain"
        />
      </header>

      {/* Hero Section */}
      <section className="relative">
        {/* Background de ondas 100% largura - Desktop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden hidden md:block">
          <img 
            src={wavesBackground} 
            alt="" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 relative z-10">
          <div className="text-center mb-10 hero-content-animation">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c80b2] mb-6 leading-tight font-archivo">
              Descubra se você tem direito
              <br />
              a indenização
            </h1>
            <div className="text-base md:text-lg text-[#64748b] max-w-2xl mx-auto">
              <span className="font-semibold text-[#1c80b2]">
                IA analisa seu caso em 30 segundos.
              </span>{" "}
              <span>
                Gratuito, seguro e sem burocracia.
                <br />
                Saiba quanto você pode receber.
              </span>
            </div>
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto mb-32 px-4 relative z-10">
            {/* Background de ondas mobile - ATRÁS do card todo */}
            <div className="absolute left-1/2 -translate-x-1/2 w-screen pointer-events-none md:hidden" style={{ top: '-60%', zIndex: -1 }}>
              <img 
                src={wavesBackgroundMobile} 
                alt="" 
                className="w-full opacity-100"
              />
            </div>
            
            {/* Card do formulário */}
            <div className="form-card bg-white rounded-3xl p-6 md:p-8 shadow-xl relative">
              <div className="mb-5">
              <label className="block text-sm md:text-base font-semibold text-[#0f172a] mb-2">
                Conte o que aconteceu com você:
              </label>
              <textarea
                className="form-input w-full min-h-[100px] bg-white border border-[#e2e8f0] rounded-xl px-4 py-3 text-sm md:text-base text-[#0f172a] resize-none transition-all duration-300 focus:outline-none focus:border-[#1c80b2] focus:ring-2 focus:ring-[#1c80b2]/20"
                placeholder="Ex: Meu voo foi cancelado sem aviso prévio, descobri um empréstimo no meu nome que não fiz, fui cobrado por taxas bancárias abusivas..."
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 mb-5 text-xs md:text-sm text-[#a3c852]">
              <Zap className="w-4 h-4" />
              <span className="font-medium">
                Resultado em 30 segundos
              </span>
            </div>

            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className={`btn-primary w-full text-white text-base md:text-lg font-semibold py-3 md:py-4 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 ${
                isCalculating
                  ? "bg-[#10B981] cursor-wait"
                  : "bg-[#1c80b2] hover:bg-[#1567a0] cursor-pointer"
              }`}
            >
              {isCalculating ? (
                <>
                  <span>Analisando...</span>
                  <span className="text-xl animate-pulse">
                    ⚡
                  </span>
                </>
              ) : (
                <>
                  <span>Calcular Probabilidade</span>
                  <Search className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="mt-5 pt-5 border-t border-[#e2e8f0] flex items-center justify-center gap-2 text-xs md:text-sm text-[#64748b]">
              <Shield className="w-4 h-4 text-[#1C80B2]" />
              <span>
                Usamos a base de dados dos tribunais do Paraná
              </span>
            </div>
            </div>
          </div>
        </div>

        {/* Como funciona */}
        <div className="max-w-4xl mx-auto pt-8 pb-12 px-4 md:px-8 relative z-10 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] text-center mb-10 font-archivo">
            Como funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="step bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-[#E8F4F8] w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-6 h-6 text-[#1C80B2]" />
              </div>
              <div className="bg-[#E8F4F8] inline-block px-3 py-1 rounded-full mb-3 mx-auto block text-center">
                <span className="text-sm font-bold text-[#1c80b2]">
                  1. Relate
                </span>
              </div>
              <p className="text-sm text-[#64748b] text-center leading-relaxed">
                Descreva o que aconteceu com você
              </p>
            </div>

            <div className="step bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-[#1c80b2] w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="bg-[#E8F4F8] inline-block px-3 py-1 rounded-full mb-3 mx-auto block text-center">
                <span className="text-sm font-bold text-[#1c80b2]">
                  2. IA Analisa
                </span>
              </div>
              <p className="text-sm text-[#64748b] text-center leading-relaxed">
                Busca em milhares de casos reais
              </p>
            </div>

            <div className="step bg-white rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-[#D8ECC4] w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Smile className="w-6 h-6 text-[#8AB03D]" />
              </div>
              <div className="bg-[#D8ECC4] inline-block px-3 py-1 rounded-full mb-3 mx-auto block text-center">
                <span className="text-sm font-bold text-[#8ab03d]">
                  3. Resultado
                </span>
              </div>
              <p className="text-sm text-[#64748b] text-center leading-relaxed">
                Veja probabilidade e valor estimado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gradient-to-b from-white to-[#eaf2f6] py-20 animate-on-scroll">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="stat-item bg-white rounded-2xl p-8 border-2 border-[#e2e8f0] shadow-lg shadow-[#1c80b2]/10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1c80b2]/15">
              <div className="bg-gradient-to-b from-[#e0ecf3] to-[#c5dae8] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#1C80B2]" />
              </div>
              <p className="text-4xl font-bold text-[#1c80b2] mb-2 font-archivo">
                <AnimatedCounter end={5000} suffix="+" />
              </p>
              <p className="text-base text-[#64748b]">
                Casos analisados
              </p>
            </div>

            <div className="stat-item bg-white rounded-2xl p-8 border-2 border-[#e2e8f0] shadow-lg shadow-[#1c80b2]/10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1c80b2]/15">
              <div className="bg-gradient-to-b from-[#d8ecc4] to-[#b8d99c] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#8AB03D]" />
              </div>
              <p className="text-4xl font-bold text-[#a3c852] mb-2 font-archivo">
                R${" "}
                <AnimatedCounter
                  end={2.5}
                  decimals={1}
                  suffix="M+"
                />
              </p>
              <p className="text-base text-[#64748b]">
                Recuperados
              </p>
            </div>

            <div className="stat-item bg-white rounded-2xl p-8 border-2 border-[#e2e8f0] shadow-lg shadow-[#1c80b2]/10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1c80b2]/15">
              <div className="bg-gradient-to-b from-[#1c80b2] to-[#165f8a] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <p className="text-4xl font-bold text-[#1c80b2] mb-2 font-archivo">
                <AnimatedCounter end={87} suffix="%" />
              </p>
              <p className="text-base text-[#64748b]">
                Taxa de sucesso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <SuccessCases />

      {/* Problemas que Resolvemos */}
      <section className="bg-gradient-to-b from-[#eaf2f6] to-white py-20 animate-on-scroll">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-5xl font-bold text-[#0f172a] text-center mb-4 tracking-tight font-archivo">
            Problemas que resolvemos
          </h2>
          <p className="text-lg text-[#64748b] text-center mb-12">
            Identifique se você tem direito a indenização em
            qualquer uma dessas situações
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="problem-card bg-white rounded-2xl p-10 border-2 border-[#e2e8f0] shadow-lg shadow-[#1c80b2]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#1c80b2]/30 hover:shadow-xl hover:shadow-[#1c80b2]/15">
              <div className="bg-gradient-to-b from-[#fee2e2] to-[#fecaca] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-[#DC2626]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-3 font-archivo">
                Empréstimos não contratados
              </h3>
              <p className="text-base text-[#64748b] leading-relaxed">
                Descobriu um empréstimo no seu nome que você
                nunca fez? Você tem direito à indenização.
              </p>
            </div>

            <div className="problem-card bg-white rounded-2xl p-10 border-2 border-[#e2e8f0] shadow-lg shadow-[#1c80b2]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#1c80b2]/30 hover:shadow-xl hover:shadow-[#1c80b2]/15">
              <div className="bg-gradient-to-b from-[#e0ecf3] to-[#c5dae8] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-[#1C80B2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-3 font-archivo">
                Tarifas bancárias abusivas
              </h3>
              <p className="text-base text-[#64748b] leading-relaxed">
                Cobranças indevidas, taxas escondidas ou pacotes
                não solicitados. Recupere seu dinheiro.
              </p>
            </div>

            <div className="problem-card bg-white rounded-2xl p-10 border-2 border-[#e2e8f0] shadow-lg shadow-[#1c80b2]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#1c80b2]/30 hover:shadow-xl hover:shadow-[#1c80b2]/15">
              <div className="bg-gradient-to-b from-[#e0ecf3] to-[#c5dae8] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-[#1C80B2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-3 font-archivo">
                Atrasos de voo
              </h3>
              <p className="text-base text-[#64748b] leading-relaxed">
                Voo atrasado ou cancelado? Você pode ter direito
                a até R$ 10.000 de indenização.
              </p>
            </div>

            <div className="problem-card bg-white rounded-2xl p-10 border-2 border-[#e2e8f0] shadow-lg shadow-[#1c80b2]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#1c80b2]/30 hover:shadow-xl hover:shadow-[#1c80b2]/15">
              <div className="bg-gradient-to-b from-[#d8ecc4] to-[#b8d99c] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Smile className="w-8 h-8 text-[#8AB03D]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0f172a] mb-3 font-archivo">
                Score de crédito incorreto
              </h3>
              <p className="text-base text-[#64748b] leading-relaxed">
                Score errado impactando suas finanças? Corrija e
                seja indenizado pelos danos.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-secondary bg-gradient-to-b from-[#1c80b2] to-[#2a9dd0] text-white text-lg font-semibold py-4 px-10 rounded-xl shadow-lg shadow-[#1c80b2]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1c80b2]/40 hover:-translate-y-1 active:translate-y-0">
              Analisar Meu Caso Gratuitamente
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer>
        {/* Seção de CTA */}
        <div className="bg-gradient-to-r from-[#1c80b2] to-[#2a9dd0] py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-archivo">
              Analise Seu Caso Gratuitamente
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Leva apenas 30 segundos. Descubra se você tem
              direito e quanto pode receber.
            </p>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="bg-white text-[#1c80b2] text-lg font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              Começar Análise Agora
            </button>
          </div>
        </div>

        {/* Barra de copyright */}
        <div className="bg-[#1e293b] py-6">
          <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
            <p className="text-sm text-[#94a3b8]">
              © 2026 IndenizaAí - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}