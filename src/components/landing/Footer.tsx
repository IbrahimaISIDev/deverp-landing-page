'use client';

import { BookOpen } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Produit",
      links: [
        { label: "Fonctionnalités", href: "#features" },
        { label: "Tarifs", href: "#" },
        { label: "Documentation", href: "#" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#" },
        { label: "Contact", href: "#contact" },
        { label: "Carrières", href: "#" }
      ]
    },
    {
      title: "Légal",
      links: [
        { label: "Confidentialité", href: "#" },
        { label: "CGU", href: "#" },
        { label: "Mentions légales", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">devERP</span>
            </div>
            <p className="text-sm">
              La solution ERP complète pour l'enseignement supérieur au Sénégal.
            </p>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} devERP. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};