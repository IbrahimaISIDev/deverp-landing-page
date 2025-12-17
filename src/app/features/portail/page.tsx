import { Users, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PortailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header simplifié */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-slate-200/50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
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
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
              Portail Étudiant & Tuteur
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Offrez un accès centralisé aux notes, emplois du temps, documents et communications en temps réel.
            </p>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Étudiants */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Portail Étudiant
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Tout ce dont vos étudiants ont besoin, accessible 24/7
            </p>
            
            <div className="space-y-8">
              {[
                {
                  title: "Consultation des notes et relevés",
                  description: "Accès instantané aux notes par matière, moyennes et classements avec historique complet."
                },
                {
                  title: "Emploi du temps interactif",
                  description: "Visualisation de l'emploi du temps avec notifications pour les changements de salle ou d'horaire."
                },
                {
                  title: "Bibliothèque de documents",
                  description: "Téléchargement des cours, supports pédagogiques, attestations et certificats."
                },
                {
                  title: "Messagerie intégrée",
                  description: "Communication directe avec les professeurs et l'administration sans email externe."
                },
                {
                  title: "Suivi des absences",
                  description: "Visualisation en temps réel des présences et absences avec justificatifs en ligne."
                },
                {
                  title: "Paiement des frais",
                  description: "Consultation du solde, paiement en ligne et téléchargement des reçus automatique."
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
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

      {/* Fonctionnalités Tuteurs */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Espace Tuteur/Parent
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Suivi complet de la scolarité de vos enfants
            </p>
            
            <div className="space-y-8">
              {[
                {
                  title: "Tableau de bord des performances",
                  description: "Vue d'ensemble des résultats scolaires avec évolution graphique et comparaisons."
                },
                {
                  title: "Notifications en temps réel",
                  description: "Alertes SMS/email pour les absences, nouvelles notes, retards de paiement."
                },
                {
                  title: "Historique financier",
                  description: "Accès complet aux paiements effectués et échéances à venir."
                },
                {
                  title: "Communication école-famille",
                  description: "Messagerie sécurisée avec l'administration et les enseignants."
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
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

      {/* Application Mobile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Application Mobile Native
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Disponible sur iOS et Android
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold text-slate-900 mb-2">Interface native</h3>
                <p className="text-slate-600 text-sm">Application fluide et performante</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🔔</div>
                <h3 className="font-bold text-slate-900 mb-2">Push notifications</h3>
                <p className="text-slate-600 text-sm">Alertes instantanées</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-bold text-slate-900 mb-2">Accès sécurisé</h3>
                <p className="text-slate-600 text-sm">Biométrie et 2FA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Offrez une expérience digitale moderne
            </h2>
            <p className="text-lg text-indigo-100 mb-8">
              Découvrez comment notre portail peut transformer l'engagement de vos étudiants et parents.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 rounded-full px-10 py-4 hover:bg-indigo-50 transition-all font-bold text-lg"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}