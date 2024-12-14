# Gestion des Profils - Application React

Ce projet est une application web développée avec React et Redux qui permet de gérer des profils. Les utilisateurs peuvent ajouter, modifier et supprimer des profils.

## Fonctionnalités
- **Affichage des profils** : Consultez la liste des profils existants avec leur nom, photo et description.
- **Ajout de profils** : Ajoutez de nouveaux profils via un formulaire dédié.
- **Modification de profils** : Modifiez les informations d'un profil existant via un formulaire pré-rempli.
- **Suppression de profils** : Supprimez un profil de la liste.
- **Gestion de l'état avec Redux** : L'état des profils est centralisé et mis à jour en temps réel.

## Installation
1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/tom512000/test-mately.git
   ```
2. Accédez au dossier du projet :

   ```bash
   cd profiles-app
   ```
3. Installez les dépendances :

   ```bash
   npm install
   ```

## Démarrage
1. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
2. Ensuite, votre navigateur s'ouvrira avec l'adresse `http://localhost:5173/`.

## Structure du Projet
- *public* :
  - *images* : Contient les image statiques.
  - *styles* : Contient les feuilles de style CSS.
- *src* :
  - *components* : Regroupe tous les composants React réutilisables.
    - `AddProfileForm.jsx` : Formulaire pour ajouter un profil.
    - `ProfileForm.jsx` : Composant partagé pour gérer les formulaires de profil.
    - `ProfileList.jsx` : Liste des profils affichés avec les boutons de modification et suppression.
    - `UpdateProfileForm.jsx` : Formulaire pour modifier un profil existant.
  - *store* : Configuration Redux pour gérer l'état global de l'application.
    - *slices* : Regroupe les slices Redux pour les profils.
      - `profiles.js` : Logique Redux pour la gestion des profils.
    - `index.js` : Combine et exporte les slices Redux.
  - `App.jsx` : Composant principal de l'application.
  - `main.jsx` : Point d'entrée de l'application qui intègre Redux.
- `eslint.config.js` : Configuration ESLint.
- `index.html` : Fichier HTML principal utilisé par Vite.
- `tailwind.config.js` : Configuration de Tailwind CSS.
- `vite.config.js` : Configuration de Vite.

## Fonctionnement
### Ajouter un Profil
1. Cliquez sur le bouton **+ Créer un Profil**
2. Remplissez le formulaire dans la fenêtre qui s'ouvre.
3. Cliquez sur le bouton **Ajouter**.
4. Le profil sera automatiquement ajouté à la liste des profils.

### Modifier un Profil
1. Cliquez sur le bouton **...** du profil.
2. Cliquez sur le bouton **Modifier**.
3. Adaptez les informations dans le formulaire pré-rempli.
4. Cliquez sur **Enregistrer** pour appliquer les modifications. 
5. Le profil sera automatiquement modifié dans la liste des profils.

### Supprimer un Profil
1. Cliquez sur le bouton **...** du profil.
2. Cliquez sur le bouton **Supprimer**.
3. Le profil sera automatiquement supprimé de la liste.
