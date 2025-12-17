import { BookOpen, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function InscriptionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header simplifié */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-slate-200/50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              devERP
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
              Inscriptions en Ligne
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Simplifiez et automatisez le processus d'admission pour vos futurs étudiants avec un système intuitif et sécurisé.
            </p>
          </div>
        </div>
      </section>

      {/* Fonctionnalités principales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Ce que vous pouvez faire
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Formulaires en ligne personnalisables",
                  description: "Créez des formulaires d'inscription adaptés à vos besoins spécifiques avec un éditeur visuel intuitif."
                },
                {
                  title: "Paiement en ligne sécurisé",
                  description: "Acceptez les frais d'inscription via Mobile Money, cartes bancaires et virements, avec confirmation automatique."
                },
                {
                  title: "Gestion des documents",
                  description: "Les candidats peuvent télécharger leurs documents (diplômes, photos, pièces d'identité) directement depuis leur portail."
                },
                {
                  title: "Suivi en temps réel",
                  description: "Les candidats reçoivent des notifications à chaque étape et peuvent suivre l'avancement de leur dossier."
                },
                {
                  title: "Validation automatique",
                  description: "Le système vérifie automatiquement les critères d'éligibilité et valide les dossiers complets."
                },
                {
                  title: "Tableau de bord administrateur",
                  description: "Visualisez toutes les candidatures, filtrez, exportez et gérez les inscriptions depuis une interface centralisée."
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Les avantages pour vous
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Gain de temps massif</h3>
                <p className="text-slate-600">Réduisez de 80% le temps consacré au traitement manuel des candidatures.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Zéro papier</h3>
                <p className="text-slate-600">Éliminez les dossiers physiques et centralisez tout dans le cloud.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Expérience candidat moderne</h3>
                <p className="text-slate-600">Offrez une inscription fluide et professionnelle qui valorise votre établissement.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Données structurées</h3>
                <p className="text-slate-600">Toutes les informations sont organisées et exploitables pour vos analyses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Prêt à simplifier vos inscriptions ?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Contactez-nous pour une démonstration personnalisée de notre module d'inscriptions en ligne.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-10 py-4 hover:shadow-2xl hover:shadow-blue-500/40 transition-all font-bold text-lg"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}