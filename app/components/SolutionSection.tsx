import { Container } from "./ui/Container";

export function SolutionSection() {
  return (
    <section id="programme" className="py-20 sm:py-28 bg-[var(--background)]">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase mb-4">
            La solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--foreground)]">
            Et si quelqu&apos;un s&apos;occupait de tout pour vous ?
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-secondary)]">
            Le Protocole Revive est le premier programme 100% clés en main à Dakar.
            Vous n&apos;avez qu&apos;une chose à faire : vous présenter.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              Repas livrés
            </h3>
            <p className="text-[var(--foreground-muted)] text-sm">
              Un déjeuner sain et un jus détox livrés chaque jour. Zéro courses,
              zéro cuisine.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              Entraînements guidés
            </h3>
            <p className="text-[var(--foreground-muted)] text-sm">
              12 séances encadrées par nos coachs. Reformer, Mat Pilates et
              Cardio pour sculpter votre silhouette.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              Suivi personnalisé
            </h3>
            <p className="text-[var(--foreground-muted)] text-sm">
              Nutritionniste dédiée, pesées hebdomadaires et analyses pour
              suivre votre progression en temps réel.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
