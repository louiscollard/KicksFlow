# ⚡ KicksFlow — Premium Sneaker Marketplace & Dashboard

**KicksFlow** est un SaaS de gestion de stock et une marketplace de sneakers au design minimaliste et moderne. Ce projet démontre la maîtrise d'une stack Front-End moderne, la gestion d'états globaux complexes et l'intégration d'une base de données NoSQL en temps réel.

---

## 🚀 Fonctionnalités Clés

- **E-Space Client :** Catalogue fluide de sneakers et panier d'achat avancé (calculs et modification des quantités en direct).
- **Dashboard Admin :** Système de CRUD complet avec un formulaire d'édition "Live" (les modifications se répercutent instantanément sur le catalogue).
- **Persistance :** Synchronisation immédiate des produits et des paniers via une base de données.

---

## 🛠️ Stack Technique

- **Framework :** React 19 (Vite)
- **Langage :** TypeScript (Typage strict des flux de données)
- **Design System :** Tailwind CSS (Intégration sur mesure, look épuré)
- **Routing :** React Router v7
- **Base de données :** Firebase Firestore (Temps réel)

---

## 💻 Démarrage Local

Suivez ces étapes pour lancer le projet sur votre machine :

1. **Cloner le dépôt**
```bash
   git clone [https://github.com/VOTRE_PSEUDO/kicksflow.git](https://github.com/VOTRE_PSEUDO/kicksflow.git)
   cd kicksflow
   ```
   
2. Installer les dépendances

```bash
   npm install
   ```
   
3. Configurer l'environnement
   Créer un fichier .env.local à la racine et ajouter les clés Firebase :

```env
  VITE_FIREBASE_API_KEY=votre_cle_api
  VITE_FIREBASE_AUTH_DOMAIN=votre_domaine
  VITE_FIREBASE_PROJECT_ID=votre_id_projet
  VITE_FIREBASE_STORAGE_BUCKET=votre_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
  VITE_FIREBASE_APP_ID=votre_app_id
  ```
  
4. Lancer le serveur de développement

```bash
   npm run dev
   ```
