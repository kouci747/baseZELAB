// Front end : Page profil : 
  - Au clique du bouton "modifier", affichage d'une pop up / modal
  - Créer modal en composant, avec les props: 
    - children : contenu de la modal <Modal></Modal> NOK -> <Modal/>
    - fonction close modal
  - À l'intérieur de la modal : 
    3 inputs : firstName, lastName, email 
    Dans chaque input, valeur actuel de l'user tel qu'il est en base de données
  - Créer un service updateUser
  - Si on clique sur modifier fetch route rattaché au controller "update user" 
  pour modifier l'utilisateur
  - Si l'utilisateur est modifié, fermer la modal
  - Si erreur, on affiche l' erreur dans la modal


// Backend :
  - protéger la route updateUser
  - Enlever params de cette route, et utiliser l'id qui récupéré dans le token
