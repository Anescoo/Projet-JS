=======
<h1> EXAMEN JAVASCRIPT B1 Info </h1>
=======

# Usage :

Pour pouvoir utiliser le site il vous faudra télécharger le contenu du répository dans son intégralité
et ouvrir le fichier '**index.html**'. Vous pouvez faire des recherches avec les noms des héros en haut à gauche dans la barre de recherché prévue à cet effet.
Il est possible de cliquer sur les entête de tableau (en noir) pour lancer un tri automatique selon la colonne sélectionnée !

- // W I P //
    Les fonctions d'affichage d'un certain nombre de héro sur la page, ainsi que naviguer entre ces pages ne sont pas encore complètes, veuiller nous excuser pour ce désagrément !
 


# Les objectifs :
Créer un site web qui regroupe les **données** de tous les super héros connus à ce jour. </br>
Il faudra inclure une **barre de recherche** ainsi que **plusieurs pages web** et utiliser une **api** en **json** fournie. </br>
Le projet doit être rendu dans un repository github. </br>

# L'organisation :

Pour notre groupe nous avons choisi les outils suivants:</br>
    **Outil git:** GitHub Desktop </br>
    **Miro:** White board et Kanban pour les tâches </br>
    **IDE:** Visual Studio Code </br>

## Organigram github (fait sur mermaid) :

>**mermaid** graph LR</br>A[branche Arnaud] -- push --> D((/dev))</br>D((/dev)) -- pull --> A[branche Arnaud]</br>B[branche Yasser] -- // --> D((/dev))</br>C[branche Noé] -- // --> D((/dev))</br>D -- Review avant push final --> E{{main}}</br>

 ![Alt text](https://i.imgur.com/OK8ltmW.png "Fait sur mermaid, open source markdown editor project") </br>

## Étapes

N'étend pas des vilains expérimentés dans la création de **site web** et découvrant tout juste les **API** il nous a fallu comprendre ce que sont les api et comment les faire interagir avec du javascript pour arriver à un site interactif. Pour apprendre rien de mieux que de s'inspirer de projets existant et décortiquer leur code.

>Comprendre comment et où placer le lien de l'**API**, s'inspirer des **exercices passés** pour utiliser la **base de données** en **JSON**,
>même le **CSS** nous a aidé a comprendre comment bien **filtrer** les informations comme nous le désirions.

- La première chose que nous avons fait une fois le fichier **HTML** créé c'est appliquer l'**API** et afficher toute la **base de donnée** d'une traite pour avoir un bon début.

- Nous voulions ensuite **manipuler** les informations comme nous le souhaitions, la prochaine étape était donc de regrouper chaque caractéristique des héros dans des variables individuelles et de regroupées chaque variable individuelles d'un même héro ensembles.

- Une fois toute les données **séparées** et **filtrées**, il ne nous restait plus qu'à rajouter de l'**interactivité** au site en faisant une **barre de recherche** pour que les vilains puissent trouver leur(s) héro(s) cible(s) plus rapidement ainsi qu'une **fonctione de tri** pour arranger les héros dans l'ordre désiré: Par poid, taille, ordre alphabetique etc..

- Maintenant que ces fichus héros sont bien organisés et faciles d'accès il nous fallait plus d'esthétisme ainsi qu'un site **responsive** pour s'adapter à tous les **types de navigateurs**, nous ne savons que trop bien que tous les vilains ne sont pas aussi riches que Pingouin, ainsi le site comprendra du **multi-page!**, la première page n'affichera qu'un certain nombre de héro, pour avoir accès aux autres il faudra changer de page en cliquant sur un **boutton**.

