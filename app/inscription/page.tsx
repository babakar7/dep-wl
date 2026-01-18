"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

type FormFields = {
  prenom: string;
  phone: string;
  email: string;
  source: string;
  engagement: string;
};

const initialFormData: FormFields = {
  prenom: "",
  phone: "",
  email: "",
  source: "",
  engagement: "",
};

export default function InscriptionPage() {
  const [formData, setFormData] = useState<FormFields>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("prenom", formData.prenom);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("source", formData.source);
      form.append("engagement", formData.engagement);

      const response = await fetch("https://formbold.com/s/9gDZM", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      alert("Erreur de connexion. Vérifiez votre connexion internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-[var(--accent)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-4">
            Candidature envoyée !
          </h1>
          <p className="text-[var(--foreground-secondary)] mb-8">
            Merci pour votre intérêt pour le Protocole Revive. Notre équipe va
            examiner votre candidature et vous contactera très bientôt.
          </p>
          <Link
            href="/"
            className="text-[var(--accent)] hover:underline font-medium"
          >
            &larr; Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="py-6 border-b border-[var(--border)]">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-[var(--foreground)]"
            >
              REVIVE
            </Link>
            <Link
              href="/"
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            >
              &larr; Retour
            </Link>
          </div>
        </Container>
      </header>

      {/* Form */}
      <main className="py-12 sm:py-20">
        <Container size="sm">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] mb-3">
                Postuler pour le Protocole Revive
              </h1>
              <p className="text-[var(--foreground-secondary)]">
                Remplissez ce formulaire pour rejoindre la prochaine cohorte.
                Nous vous contacterons sous 24h.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Prénom */}
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] placeholder:text-[var(--foreground-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  placeholder="Votre prénom"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] placeholder:text-[var(--foreground-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  placeholder="+221 7X XXX XX XX"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] placeholder:text-[var(--foreground-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Source */}
              <div>
                <label
                  htmlFor="source"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Comment avez-vous entendu parler de Revive ?
                </label>
                <select
                  id="source"
                  name="source"
                  required
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-tertiary)] text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2378716C'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "20px",
                  }}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="instagram">Instagram</option>
                  <option value="amie">Recommandation d&apos;une amie</option>
                  <option value="google">Google</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Engagement */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-3">
                  Êtes-vous prête à vous engager sur 21 jours ?
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="engagement"
                      value="oui"
                      required
                      checked={formData.engagement === "oui"}
                      onChange={handleChange}
                      className="w-5 h-5 text-[var(--accent)] border-[var(--border)] focus:ring-[var(--accent)] cursor-pointer"
                    />
                    <span className="text-[var(--foreground)]">
                      Oui, je suis prête à m&apos;engager
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="engagement"
                      value="questions"
                      checked={formData.engagement === "questions"}
                      onChange={handleChange}
                      className="w-5 h-5 text-[var(--accent)] border-[var(--border)] focus:ring-[var(--accent)] cursor-pointer"
                    />
                    <span className="text-[var(--foreground)]">
                      J&apos;ai encore des questions
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
                </Button>
                <p className="mt-4 text-center text-sm text-[var(--foreground-muted)]">
                  Nous vous contacterons sous 24h
                </p>
              </div>
            </form>
          </div>
        </Container>
      </main>
    </div>
  );
}
