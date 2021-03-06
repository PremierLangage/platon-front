# Platon Front

Projet pour créer des applications et [web composants](https://developer.mozilla.org/en/docs/Web/Web_Components) pour [PLaTon](https://github.com/PremierLangage).

## Developpement

### 📦 Installation

Ouvrez un terminal et clonez ce repo.

```shell
git clone https://github.com/premierlangage/platon-front
```

Allez dans le dossier platon-front

```shell
cd platon-front
```

Lancez le script d'installation pour générer le dossier `node_modules`

```shell
./scripts/install.sh
```

### 🔨 Architecture

Le projet est basé sur une architecture mono-repo utilisant l'outil [Nx](https://nx.dev/angular). Il est découpé en une application Angular placées dans le dossier `apps`:

* `apps/platon`

  Application qui contient les pages (éditeur, ask...) du site du serveur platon.
  Cette application se lance à l'aide du script

  ```shell
  ./scripts/serve
  ```

Le code en commun entre les différentes pages de cette application (web-components, styles, assets, services...) est placé dans les libraries du dossier `libs`.

Une fois les applications lancées, ouvrez votre navigateur
à l'adresse <http://localhost:4200/>

## 🚀 Documentation

La documentation complète de ce projet est disponible à l'adresse suivante: <https://premierlangage.github.io/platon-front>

### Angular

[Tutoriel Fr](https://guide-angular.wishtack.io)

[Tutoriel En](https://angular-templates.io/tutorials/about/learn-angular-from-scratch-step-by-step)

[References](https://ngrefs.com)

### Nx

[Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Nx Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## 🤝 Contribuer

Votre contribution est la bienvenue. Merci de lire le fichier [CONTRIBUTING.md](https://github.com/PremierLangage/platon-front/blob/master/CONTRIBUTING.md) en premier avant de vous lancer. Vous pouvez soumettre vos idées en ouvrant des [pulls requests](https://github.com/PremierLangage/platon-front/pulls) ou des [issues](PremierLangage/platon-front/issues).
