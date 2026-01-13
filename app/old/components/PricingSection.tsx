import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";

export function PricingSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--background)]">
      <Container size="sm">
        <div className="max-w-xl mx-auto">
          <div className="p-8 sm:p-10 rounded-[var(--radius-xl)] bg-[var(--background-tertiary)] border border-[var(--border)] shadow-[var(--shadow-lg)]">
            <div className="text-center">
              <p className="text-[var(--accent)] text-sm font-medium tracking-wide uppercase mb-2">
                Votre investissement
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-8">
                Le Protocole Revive complet
              </h2>

              {/* Value breakdown */}
              <div className="space-y-3 mb-8 text-left">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--foreground-muted)]">
                    La Cuisine Revive (20 repas + jus, lun-ven)
                  </span>
                  <span className="font-mono text-[var(--foreground-secondary)]">
                    170 000 F
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--foreground-muted)]">
                    12 séances d&apos;entraînement
                  </span>
                  <span className="font-mono text-[var(--foreground-secondary)]">
                    168 000 F
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--foreground-muted)]">
                    Suivi nutritionnel personnalisé
                  </span>
                  <span className="font-mono text-[var(--foreground-secondary)]">
                    50 000 F
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--foreground-muted)]">
                    Suivi biométrique
                  </span>
                  <span className="font-mono text-[var(--foreground-secondary)]">
                    30 000 F
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--foreground-muted)]">
                    Bonus exclusifs
                  </span>
                  <span className="font-mono text-[var(--foreground-secondary)]">
                    85 000 F
                  </span>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border)]">
                  <div className="flex justify-between">
                    <span className="text-[var(--foreground-muted)]">
                      Valeur totale
                    </span>
                    <span className="font-mono text-[var(--foreground-muted)] line-through">
                      503 000 F
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="py-6 border-y border-[var(--border)]">
                <p className="text-sm text-[var(--foreground-muted)] mb-2">
                  Prix du programme
                </p>
                <p className="text-4xl sm:text-5xl font-semibold text-[var(--foreground)]">
                  375 000{" "}
                  <span className="text-lg font-normal text-[var(--foreground-muted)]">
                    FCFA
                  </span>
                </p>
                <p className="mt-2 text-sm text-[var(--accent)] font-medium">
                  Économisez 128 000 F
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button href="/inscription" size="lg" className="w-full">
                  Postuler maintenant
                </Button>
                <p className="mt-4 text-sm text-[var(--foreground-muted)]">
                  Seulement 5 places par cohorte
                </p>
              </div>
            </div>
          </div>

          {/* After program note */}
          <div className="mt-8 p-6 rounded-[var(--radius-lg)] bg-[var(--accent-light)] text-center">
            <p className="text-sm text-[var(--accent)]">
              <strong>Et après ?</strong> Les diplômées du Protocole Revive
              bénéficient d&apos;un tarif privilégié pour poursuivre leur
              transformation avec un abonnement.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
