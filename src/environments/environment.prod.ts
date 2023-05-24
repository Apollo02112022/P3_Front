// Définit les variables d'environnement pour l'environnement de production
export const environment = {
    // Indicateur booléen pour savoir si l'application est en production
    production: true,
  
    // Les URL de l'API utilisée par l'application en production
    apiUrl: 'http://localhost:8080/',
    apiUrlBarters: 'http://localhost:8080/barters',
    apiUrlNotification:"http://localhost:8080/notifications/",
    apiUrlNotificationMessage: `http://localhost:8080/streamMessages?userId=`,
    apiUrlLogin:"http://localhost:8080/login",
    apiUrlLogout:"http://localhost:8080/custumLogout",
    apiUrlAddMessage:"http://localhost:8080/postMessage?userAnnounceId=",
    apiUrlAddOffer:'http://localhost:8080/offer-a-barter?userid=',
    apiUrlUser:"http://localhost:8080/users/",
    apiUrlSignup : 'http://localhost:8080/signup',


    userBarters:"/barters",
    userProfil:"/profil",

    apiUrlBartersImage(id:number) : string{
        return `${this.apiUrl}barters/${id}/image`;
    },

    // Configuration Firebase pour l'environnement de production
    firebaseConfig: {
      // Clé API Firebase
      apiKey: 'ma-clé-d-api-firebase',
  
      // Domaine Firebase auth
      authDomain: 'mon-projet.firebaseapp.com',
  
      // ID du projet Firebase
      projectId: 'mon-projet',
  
      // Bucket de stockage Firebase
      storageBucket: 'mon-projet.appspot.com',
  
      // ID de l'expéditeur Firebase Cloud Messaging
      messagingSenderId: '123456789',
  
      // ID de l'application Firebase
      appId: 'mon-id-d-application'
    }
  };
  