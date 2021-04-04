<h1> EXAMEN JAVASCRIPT B1 Info </h1>
=======

# Les objectifs :
Créer un site web qui regroupe les données de tous les super héros connus à ce jour. </br>
Il faudra inclure une barre de recherche ainsi que plusieurs pages web et utiliser une **api** en **json** fournie. </br>
Le projet doit être rendu sur un repository github. </br>

# L'organisation :

Pour notre groupe nous avons choisi les outils suivants:</br>
    **Outil git:** GitHub Desktop </br>
    **Miro:** White board et Kanban pour les tâches </br>
    **IDE:** Visual Studio Code </br>

## Organigram github (fait sur mermaid) :

>**mermaid** graph LR</br>A[branche Arnaud] -- push --> D((/dev))</br>D((/dev)) -- pull --> A[branche Arnaud]</br>B[branche Yasser] -- // --> D((/dev))</br>C[branche Noé] -- // --> D((/dev))</br>D -- Review avant push final --> E{{main}}</br>

 ![Alt text](https://i.imgur.com/OK8ltmW.png "Fait sur mermaid") </br>

## Étapes

N'étend pas des vilains expérimentés dans la création de **site web** et découvrant tout juste les **API** il nous a fallu comprendre ce que sont les api et comment les faire interagir avec du javascript pour arriver à un site interactif. Pour apprendre rien de mieux que de s'inspirer de projets existant et décortiquer leur code.

>Comprendre comment et où placer le lien de l'**API**, s'inspirer des **exercices passés** pour utiliser la **base de données** en **JSON**,
>même le **CSS** nous a aidé a comprendre comment bien **filtrer** les informations comme nous le désirions.

- La première chose que nous avons fait une fois le fichier **HTML** créé c'est appliquer l'**API** et afficher toute la **base de donnée** d'une traite pour avoir un bon début.
- Nous voulions ensuite **manipuler** les informations comme nous le souhaitions, la prochaine étape était donc de regrouper chaque caractéristique des héros dans des variables individuelles et de regroupées chaque variable d'un même héro ensembles.
- Une fois toute les données **triées** et **séparées/filtrées**, il ne nous restait plus qu'à rajouter de l'**interactivité** au site en faisant une **barre de recherche** pour que les vilains puissent trouver leur(s) héro(s) cible(s) plus rapidement ainsi qu'un **second template** qui affichera cette fois toute les infos du **héro sélectionné**.
- Maintenant que les héros sont bien organisés et faciles d'accès il nous fallait plus d'esthétisme ainsi qu'un site **responsive** pour s'adapter à tous les **types de navigateurs**, nous ne savons que trop bien que tous les vilains ne sont pas aussi riches que Pingouin.