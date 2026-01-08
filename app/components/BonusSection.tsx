import { Container } from "./ui/Container";

const bonuses = [
  {
    title: "1 séance de Drainage Lymphatique",
    description:
      "Éliminez les toxines et réduisez la rétention d'eau pour des résultats visibles plus rapidement.",
    value: "45 000 F",
  },
  {
    title: "Accès illimité à la piscine",
    description:
      "Profitez de la piscine pendant toute la durée du programme pour compléter votre récupération.",
    value: "40 000 F",
  },
];

export function BonusSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--foreground)]">
      <Container size="md">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/20 text-[var(--gold-light)] text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Bonus exclusifs
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Réservez maintenant et recevez en plus
          </h2>
          <p className="text-white/60">
            Ces bonus sont offerts uniquement pour les inscriptions anticipées.
          </p>
        </div>

        <div className="space-y-4 max-w-xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="p-6 rounded-[var(--radius-lg)] bg-white/5 border border-[var(--gold)]/30"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-medium text-white">{bonus.title}</h3>
                <span className="text-sm font-mono text-[var(--gold-light)] whitespace-nowrap">
                  {bonus.value}
                </span>
              </div>
              <p className="text-white/60 text-sm">{bonus.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/40">
            Valeur totale des bonus :{" "}
            <span className="text-[var(--gold-light)] font-medium">85 000 F</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
