# Structure du Projet devERP

## 📂 Arborescence Complète

```
deverp_front_gestion_ecole/
│
├── public/
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout avec fonts et metadata
│   │   ├── page.tsx                # Home page (composition)
│   │   ├── globals.css             # Styles globaux
│   │   └── (autres pages)/
│   │
│   ├── components/
│   │   ├── landing/                # Composants de la landing page
│   │   │   ├── Header.tsx          # 50 lignes - Navigation
│   │   │   ├── Hero.tsx            # 95 lignes - Hero avec parallaxe
│   │   │   ├── ProblemSolution.tsx # 40 lignes - Problème/Solution
│   │   │   ├── Features.tsx        # 90 lignes - Cards de fonctionnalités
│   │   │   ├── Benefits.tsx        # 75 lignes - Avantages
│   │   │   ├── Testimonials.tsx    # 80 lignes - Témoignages
│   │   │   ├── Contact.tsx         # 85 lignes - Formulaire
│   │   │   ├── Footer.tsx          # 70 lignes - Footer
│   │   │   └── index.ts            # Export centralisé
│   │   │
│   │   ├── ui/                     # Composants UI réutilisables
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Badge.tsx
│   │   │
│   │   └── shared/                 # Composants partagés
│   │       ├── AnimatedSection.tsx
│   │       └── GradientText.tsx
│   │
│   ├── data/                       # Données statiques
│   │   ├── features.ts
│   │   ├── testimonials.ts
│   │   └── navigation.ts
│   │
│   ├── hooks/                      # Custom hooks
│   │   ├── useScrollPosition.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── lib/                        # Utilitaires
│   │   ├── utils.ts
│   │   └── animations.ts
│   │
│   ├── types/                      # Types TypeScript
│   │   ├── index.ts
│   │   ├── components.ts
│   │   └── api.ts
│   │
│   └── styles/                     # Styles additionnels
│       └── animations.css
│
├── .env.local                      # Variables d'environnement
├── .eslintrc.json                  # Configuration ESLint
├── .gitignore
├── next.config.js                  # Configuration Next.js
├── package.json
├── postcss.config.js               # Configuration PostCSS
├── tailwind.config.ts              # Configuration Tailwind
├── tsconfig.json                   # Configuration TypeScript
└── README.md
```

## 📋 Détail des Composants

### Landing Page Components (`src/components/landing/`)

#### Header.tsx (50 lignes)
```tsx
- Navigation principale
- Logo + Branding
- Menu desktop/mobile
- CTA "Espace Client"
- Sticky behavior
- Glassmorphism effect
```

#### Hero.tsx (95 lignes)
```tsx
- Badge "nouvelle génération"
- Titre avec gradient
- Sous-titre
- Double CTA
- Statistiques (3 items)
- Parallaxe scroll effect
- Background patterns
```

#### ProblemSolution.tsx (40 lignes)
```tsx
- Card "Défi actuel" (rouge/orange)
- Card "Notre solution" (bleu/indigo)
- Animations au scroll
```

#### Features.tsx (90 lignes)
```tsx
- Sous-composant: FeatureCard
- 3 fonctionnalités principales
- Icônes colorées
- Hover effects
- Lien "En savoir plus"
```

#### Benefits.tsx (75 lignes)
```tsx
- Sous-composant: BenefitItem
- Grille 4 colonnes
- 4 avantages
- Icônes dans conteneurs colorés
```

#### Testimonials.tsx (80 lignes)
```tsx
- Sous-composant: TestimonialCard
- 3 témoignages
- Étoiles de notation
- Fond sombre avec gradient
- Glass effect
```

#### Contact.tsx (85 lignes)
```tsx
- Formulaire 4 champs
- Validation
- Badges de confiance
- Fond gradient
- Glass effect
```

#### Footer.tsx (70 lignes)
```tsx
- 4 colonnes de navigation
- Liens organisés
- Copyright dynamique
- Logo + Description
```

## 🔄 Flux de Données

```
app/page.tsx (Orchestration)
    │
    ├─→ Header
    │   └─→ Navigation Links
    │
    ├─→ Hero
    │   ├─→ Badge
    │   ├─→ Title
    │   ├─→ CTAs
    │   └─→ Stats
    │
    ├─→ ProblemSolution
    │   ├─→ Problem Card
    │   └─→ Solution Card
    │
    ├─→ Features
    │   └─→ FeatureCard × 3
    │       ├─→ Icon
    │       ├─→ Title
    │       ├─→ Description
    │       └─→ Link
    │
    ├─→ Benefits
    │   └─→ BenefitItem × 4
    │
    ├─→ Testimonials
    │   └─→ TestimonialCard × 3
    │
    ├─→ Contact
    │   ├─→ Form
    │   └─→ Trust Badges
    │
    └─→ Footer
        ├─→ Brand
        └─→ Navigation Sections × 3
```

## 📦 Dépendances

### Production
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.294.0"
  }
}
```

### Development
```json
{
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.50.0"
  }
}
```

## 🎨 Conventions de Code

### Nommage
- **Composants** : PascalCase (Header.tsx, FeatureCard.tsx)
- **Hooks** : camelCase avec préfixe "use" (useScrollPosition.ts)
- **Utilitaires** : camelCase (formatDate.ts)
- **Types** : PascalCase avec suffixe "Props" ou "Type" (FeatureCardProps)
- **Constantes** : UPPER_SNAKE_CASE (MAX_FEATURES)

### Structure des Composants
```tsx
// 1. Imports
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
}

// 3. Sous-composants (si privés)
const SubComponent = () => { ... };

// 4. Composant principal
export const MainComponent = ({ title }: ComponentProps) => {
  // 4.1 Hooks
  // 4.2 State
  // 4.3 Effects
  // 4.4 Handlers
  // 4.5 Render
  return ( ... );
};

// 5. Export par défaut (si nécessaire)
export default MainComponent;
```

### Props
```tsx
// ✅ Bon : Interface définie
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

// ❌ Mauvais : Props inline
const Button = ({ label, onClick }: { label: string, onClick: () => void }) => { ... };
```

## 🔐 Sécurité et Performance

### Optimisations Next.js
- ✅ Server Components par défaut
- ✅ 'use client' seulement quand nécessaire
- ✅ Dynamic imports pour code splitting
- ✅ Image optimization avec next/image
- ✅ Font optimization avec next/font

### Performance
- ✅ Lazy loading des composants
- ✅ Memoization avec React.memo si nécessaire
- ✅ useCallback pour les handlers
- ✅ CSS-in-Tailwind (pas de runtime CSS-in-JS)

### Sécurité
- ✅ Validation côté client ET serveur
- ✅ Sanitization des inputs
- ✅ CSP headers
- ✅ HTTPS only
- ✅ Env variables sécurisées

## 📊 Métriques

### Taille des Composants
| Composant | Lignes | Complexité | Réutilisable |
|-----------|--------|------------|--------------|
| Header | 50 | Faible | ✅ |
| Hero | 95 | Moyenne | ⚠️ Spécifique |
| ProblemSolution | 40 | Faible | ✅ |
| Features | 90 | Moyenne | ✅ |
| Benefits | 75 | Faible | ✅ |
| Testimonials | 80 | Faible | ✅ |
| Contact | 85 | Moyenne | ✅ |
| Footer | 70 | Faible | ✅ |

### Bundle Size (estimé)
- Page principale : ~150kb (gzip)
- Framer Motion : ~50kb
- Lucide Icons : ~10kb (tree-shaking)
- Total first load : ~210kb

## 🧪 Tests (à implémenter)

```
src/
├── __tests__/
│   ├── components/
│   │   ├── Header.test.tsx
│   │   ├── Hero.test.tsx
│   │   └── ...
│   └── utils/
│       └── animations.test.ts
```

---

**Documentation** : Version 1.0  
**Dernière mise à jour** : Décembre 2024