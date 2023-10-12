# ExpressFood - Documentation de Démarrage

Ce README vous guide à travers les étapes pour lancer l'application ExpressFood sur votre propre environnement.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre système avant de continuer :

Node.js : Vous pouvez vérifier l'installation de Node.js en exécutant 'node -v' dans votre terminal.
npm : Normalement installé automatiquement avec Node.js, vérifiez en exécutant 'npm -v'.

## Installation 

1. Clonez le repository ExpressFood sur votre machine locale : 
    ` git clone https://github.com/Kali07/ExpressFood.git `
2. Accédez au repertoire de l'application : 
    `cd ExpressFood` 
3. Installez les dépendances requises à l'aide de npm : 
    `npm install`

## Configuration

1. Créez un fichier `.env` à la racine de votre projet avec votre chaîne de connexion à la base de données MongoDB :
    `DB_CONNECT=VOTRE_CHEMIN_DE_CONNEXION`

## Lancement de l'Application

1. Pour lancer l'application, utilisez la commande suivante :
    `node server.js`

## Déploiement sur Heroku

Si vous souhaitez déployer votre application sur Heroku, vous pouvez suivre ces étapes :

1. Créez un compte Heroku (si vous n'en avez pas déjà un) : Heroku Signup.

2. Installez l'interface en ligne de commande Heroku (CLI) : Heroku CLI.

3. Connectez-vous à Heroku en utilisant la commande `heroku login` et suivez les instructions.

4. Créez une nouvelle application Heroku en utilisant la commande :
    `heroku create expressfood`

5. Déployez votre application sur Heroku en utilisant la commande :
    `git push heroku main ou master` 

6. Ouvrez votre application dans le navigateur avec :
    `heroku open`

Cela ouvrira l'application déployée sur Heroku dans votre navigateur.