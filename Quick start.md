# 🚀 Guide d'Installation Rapide - devERP Landing Page

## Installation en 5 minutes

### 1. Prérequis
- Node.js 18+ installé
- npm ou yarn
- Projet Next.js 14+ existant

### 2. Installation des dépendances
```bash
npm install framer-motion lucide-react
```

### 3. Copier les fichiers

#### Structure à créer :
```
votre-projet/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # ← Remplacer
│   │   ├── page.tsx         # ← Remplacer
│   │   └── globals.css      # ← Remplacer
│   └── components/          # ← Créer ce dossier
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── ProblemSolution.tsx
│       ├── Features.tsx
│       ├── Benefits.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── index.ts
└── tailwind.config.ts       # ← Remplacer
```

### 4. Configuration TypeScript

Ajouter dans `tsconfig.json` :
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components": ["./src/components"],
      "@/app": ["./src/app"]
    }
  }
}
```

### 5. Lancer le projet
```bash
npm run dev
```

Ouvrez http://localhost:3000 🎉

---

## 🎯 Vérification Rapide

### Checklist
- [ ] Dependencies installées (`framer-motion`, `lucide-react`)
- [ ] Tous les fichiers copiés
- [ ] `tsconfig.json` configuré avec les paths
- [ ] `npm run dev` fonctionne sans erreur
- [ ] La page s'affiche correctement
- [ ] Les animations fonctionnent
- [ ] Le formulaire s'affiche

### Problèmes Courants

#### Erreur : "Cannot find module '@/components'"
**Solution** : Vérifier les paths dans `tsconfig.json`

#### Erreur : "motion is not defined"
**Solution** : `npm install framer-motion`

#### Erreur : "BookOpen is not defined"
**Solution** : `npm install lucide-react`

#### Les fonts ne s'affichent pas correctement
**Solution** : Vérifier que `layout.tsx` importe bien `Plus_Jakarta_Sans` et `Inter`

---

## 📝 Personnalisation Rapide

### Changer les couleurs
Dans chaque composant, remplacer :
- `from-blue-600` → votre couleur primaire
- `to-indigo-600` → votre couleur secondaire

### Modifier le contenu
Ouvrir le composant concerné et modifier le contenu directement :
```tsx
// Dans Features.tsx
const features = [
  {
    title: "Votre titre ici",
    description: "Votre description ici",
    // ...
  }
];
```

### Changer les statistiques
Dans `Hero.tsx`, ligne ~80 :
```tsx
<div className="text-4xl font-bold ...">50+</div>
<div className="text-slate-600 mt-2">Établissements</div>
```

---

## 🔧 Configuration Avancée

### Ajouter le menu mobile
Dans `Header.tsx`, ajouter :
```tsx
import { Menu, X } from 'lucide-react';
const [isOpen, setIsOpen] = useState(false);

// Dans le JSX
<button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
  {isOpen ? <X /> : <Menu />}
</button>
```

### Connecter le formulaire
Dans `Contact.tsx`, modifier `handleSubmit` :
```tsx
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      // ...
    })
  });
  
  // Gérer la réponse
};
```

### Ajouter Google Analytics
Dans `app/layout.tsx` :
```tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

---

## 📚 Documentation Complète

Pour plus de détails :
- **Architecture** : Voir `README_MODULAR.md`
- **Structure** : Voir `PROJECT_STRUCTURE.md`
- **Améliorations** : Voir `README_IMPROVEMENTS.md`

---

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifier la checklist ci-dessus
2. Consulter les problèmes courants
3. Lire la documentation complète
4. Ouvrir une issue GitHub

---

**Version** : 3.0  
**Temps d'installation** : ~5 minutes  
**Difficulté** : ⭐⭐☆☆☆ (Facile)