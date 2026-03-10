import { Mail, Phone, ArrowRight, BarChart3, TrendingUp, Truck, Target, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-foreground">Perfovia</span>
          <a
            href="#kontakt"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Kontakt
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground animate-fade-up">
            Vidíte skutečný zisk
            <br />
            svého e-shopu?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Jednoduchý měsíční přehled, který ukáže, kolik vám po nákladech a reklamě skutečně zůstane.
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Chci ukázku
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-28 px-6 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Obrat roste, ale kolik vám skutečně zůstane?
          </h2>
          <div className="space-y-4">
            {[
              { icon: TrendingUp, text: "Obrat roste" },
              { icon: Target, text: "Reklama stojí víc" },
              { icon: BarChart3, text: "Zisk není přehledný" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">
            Většina malých e-shopů sleduje tržby, ale nemá jasný přehled o skutečné ziskovosti po odečtení všech nákladů.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Přehled, který dává smysl
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Jednoduchý dashboard, ve kterém na první pohled vidíte, co je důležité. Žádné složité nástroje.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: DollarSign, label: "Tržby" },
              { icon: BarChart3, label: "Náklady na zboží" },
              { icon: Target, label: "Reklama" },
              { icon: Truck, label: "Doprava" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-lg border-2 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-foreground text-lg">Skutečný čistý zisk</span>
                <p className="text-sm text-muted-foreground">To, na čem skutečně záleží</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 px-6 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            Jak to funguje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Pošlete základní data", desc: "Tržby, náklady, výdaje za reklamu – nic složitého." },
              { step: "2", title: "Nastavím přehled", desc: "Připravím přehledný dashboard na míru." },
              { step: "3", title: "Vidíte skutečný zisk", desc: "Každý měsíc jasná čísla bez hádání." },
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto md:mx-0 mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Pro koho to je
          </h2>
          <div className="space-y-3">
            {[
              "Menší niche e-shopy",
              "Majitelé, kteří chtějí jasná čísla",
              "E-shopy investující do reklamy",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="kontakt" className="py-20 md:py-28 px-6 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Chcete mít jasno ve skutečné marži?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Napište mi a pošlu vám krátkou ukázku.
          </p>
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-xl bg-card border border-border">
            <p className="text-foreground font-semibold text-lg">Norbert Šťastný</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:norb.stastny@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                norb.stastny@gmail.com
              </a>
              <a
                href="tel:+420602720291"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +420 602 720 291
              </a>
            </div>
            <a
              href="mailto:hello@perfovia.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors mt-2"
            >
              Chci ukázku
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          © 2026 Perfovia. Všechna práva vyhrazena.
        </div>
      </footer>
    </div>
  );
};

export default Index;
