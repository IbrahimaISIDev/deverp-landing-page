import { TrendingUp, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FinancierPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header simplifié */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-slate-200/50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
              Suivi Financier Automatisé
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Gérez les frais de scolarité, suivez les paiements et générez des rapports financiers détaillés instantanément.
            </p>
          </div>
        </div>
      </section>

      {/* Fonctionnalités principales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Gestion financière complète
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Facturation automatique",
                  description: "Génération automatique des factures de scolarité avec échéanciers personnalisés par étudiant."
                },
                {
                  title: "Paiements en ligne multiples",
                  description: "Acceptez Mobile Money (Orange Money, Wave, Free Money), cartes bancaires et virements avec confirmation instantanée."
                },
                {
                  title: "Suivi des impayés",
                  description: "Tableau de bord des créances avec relances automatiques par SMS et email selon vos paramètres."
                },
                {
                  title: "Réconciliation bancaire",
                  description: "Rapprochement automatique des paiements avec vos comptes bancaires et exports comptables."
                },
                {
                  title: "Reçus et attestations",
                  description: "Génération et envoi automatique de reçus de paiement et attestations de scolarité."
                },
                {
                  title: "Reporting avancé",
                  description: "Tableaux de bord en temps réel avec graphiques, exports Excel et prévisions de trésorerie."
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
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

      {/* Tableaux de bord */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Tableaux de bord intelligents
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Visualisez vos finances en un coup d'œil
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Vue d'ensemble financière</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Revenus du mois en cours</li>
                  <li>• Créances à recouvrer</li>
                  <li>• Taux de recouvrement</li>
                  <li>• Prévisions de trésorerie</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Analyses par période</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Évolution mensuelle/annuelle</li>
                  <li>• Comparaisons inter-années</li>
                  <li>• Performance par filière</li>
                  <li>• Statistiques de paiement</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Gestion des bourses</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Suivi des boursiers</li>
                  <li>• Réductions appliquées</li>
                  <li>• Impact sur le CA</li>
                  <li>• Exports pour bailleurs</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Exports comptables</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Format Excel/CSV/PDF</li>
                  <li>• Intégration logiciels comptables</li>
                  <li>• Journal des écritures</li>
                  <li>• Grand livre automatique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité et conformité */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Sécurité et conformité
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="font-bold text-slate-900 mb-2">Cryptage bancaire</h3>
                <p className="text-slate-600 text-sm">Transactions sécurisées PCI-DSS</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold text-slate-900 mb-2">Conformité fiscale</h3>
                <p className="text-slate-600 text-sm">Respect des normes sénégalaises</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-bold text-slate-900 mb-2">Audit trail</h3>
                <p className="text-slate-600 text-sm">Traçabilité complète</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Retour sur investissement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-600">
                <div className="text-3xl font-bold text-purple-600 mb-2">+35%</div>
                <p className="text-slate-900 font-semibold mb-2">Taux de recouvrement</p>
                <p className="text-slate-600 text-sm">Grâce aux relances automatiques et paiements facilités</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">-60%</div>
                <p className="text-slate-900 font-semibold mb-2">Temps de gestion</p>
                <p className="text-slate-600 text-sm">Automatisation des tâches répétitives</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-600">
                <div className="text-3xl font-bold text-indigo-600 mb-2">-90%</div>
                <p className="text-slate-900 font-semibold mb-2">Erreurs de saisie</p>
                <p className="text-slate-600 text-sm">Avec la réconciliation automatique</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-600">
                <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                <p className="text-slate-900 font-semibold mb-2">Visibilité financière</p>
                <p className="text-slate-600 text-sm">Tableaux de bord en temps réel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Optimisez votre gestion financière dès aujourd'hui
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Découvrez comment notre module financier peut améliorer votre trésorerie et simplifier votre comptabilité.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 rounded-full px-10 py-4 hover:bg-purple-50 transition-all font-bold text-lg"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}