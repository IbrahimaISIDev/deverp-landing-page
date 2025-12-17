# Landing Page - devERP

Ce projet contient le code source du site vitrine (landing page) pour le projet `devERP`, une plateforme SaaS de gestion pour les établissements d'enseignement supérieur.

## 1. Stack Technique

- **Framework** : [Next.js](https://nextjs.org/) (utilisant React 18)
- **Langage** : TypeScript
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)

## 2. Prérequis

- Node.js (version 18 ou supérieure)
- npm

## 3. Installation et Lancement

Suivez ces étapes pour lancer le projet en local.

1.  **Cloner le dépôt** (si ce n'est pas déjà fait) :
    ```bash
    git clone git@github.com:IbrahimaISIDev/deverp-landing-page.git
    ```

2.  **Naviguer dans le répertoire** :
    ```bash
    cd deverp-landing-page
    ```

3.  **Installer les dépendances** :
    ```bash
    npm install
    ```

4.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

L'application sera alors accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## 4. Structure du Projet

Le code source principal se trouve dans le dossier `src/`.

- **`src/app/`** : Contient les pages et les layouts de l'application, suivant le App Router de Next.js.
- **`src/components/`** : Contient les composants React réutilisables.
  - **`src/components/landing/`** : Composants spécifiques aux différentes sections de la landing page (Header, Hero, Features, etc.).
- **`public/`** : Contient les assets statiques (images, icônes).
