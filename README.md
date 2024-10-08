# pics_wallet

## Fonctionnalités

pics_wallet est l'implémentation d'une API simple avec deux endpoints visant à:

- Retrouver et récupérer toutes les images associées à un site web et à les mettre à disposition du client

- Permettre de pouvoir retrouver l'ensemble des site qui ont subi l'opération de recherches des images à travers l'API

## Pré-réquis:

- Avoir installé Node JS

- Avoir installé un IDE (VS Code, PHP Storm, IntelliJ, etc.)

- Potentiellement avoir installé Docker

## Documentation de l'API

L'API possède deux endpoints:

- `/getimages` qui permet de récupérer les images présentes sur une page web. Elle prend en paramètre de requête une url comme suit:
    - `/getimages?url=https://lidl.fr`

- `/researches` qui permet d'avoir un historique des url recherchées sur la route précédente.

## Lancement du projet

### En local

- Cloner le dépôt en faisant `git clone https://github.com/Joel-Henri-NGOUBE/pics_wallet.git`.

- Télécharger les dépendances avec la commande `npm install`.

- Lancer le projet en réalisant `npm start` depuis le répertoire qui contient le fichier `api.js`.

- Rendez-vous  à l'adresse http://localhost:3000/ en choisissant l'une des routes de l'API. Vous pouvez dès à présent tester l'interface.

### En local avec Docker Compose

- Cloner le dépôt en faisant `git clone https://github.com/Joel-Henri-NGOUBE/pics_wallet.git`.

- Exécuter la commande `docker compose up -d` qui préparera toute la configuration nécessaire au lancement du projet

- Rendez-vous  à l'adresse http://localhost:3000/ en choisissant l'une des routes de l'API. Vous pouvez dès à présent tester l'interface.


