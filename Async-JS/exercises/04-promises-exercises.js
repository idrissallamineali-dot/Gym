/**
 * =======================================================
 * 🏋️ GYM ASYNC-JS : KATAS - LEÇON 04 (PROMISES)
 * =======================================================
 * 
 * Instructions : 
 * Voici une série de 4 katas indépendants. Prends ton temps, 
 * lis bien les consignes et utilise console.log pour tester.
 */

// ---------------------------------------------------
// KATA 1 : L'extraction en série
// ---------------------------------------------------
const database = {
    users: [{ id: 1, name: "Idriss" }],
    carts: [{ userId: 1, item: "Clavier Mécanique", price: 150 }]
};

const getUser = (id) => new Promise((resolve, reject) => {
    const user = database.users.find(u => u.id === id);
    user ? setTimeout(() => resolve(user), 500) : reject("User introuvable");
});

const getCart = (userId) => new Promise((resolve) => {
    const cart = database.carts.filter(c => c.userId === userId);
    setTimeout(() => resolve(cart), 500);
});

// Objectif :
// 1. Récupère l'utilisateur avec l'ID 1 via la fonction getUser.
// 2. Passe son ID à getCart pour récupérer son panier.
// 3. Affiche dans la console : "Idriss a acheté un Clavier Mécanique pour 150€".
// Règle : Ton code doit être plat (pas de .then() imbriqués).

// TON CODE ICI



// ---------------------------------------------------
// KATA 2 : Le cuisinier asynchrone
// ---------------------------------------------------
// Objectif : Crée une fonction `bakeCake(flavor)` qui retourne une Promise.
// 1. Elle doit utiliser setTimeout pour attendre 1 seconde (1000ms).
// 2. Si le flavor est "chocolat", elle resolve avec le message "Gâteau au chocolat prêt ! 🎂".
// 3. Si le flavor est "boue", elle reject avec l'erreur "On ne cuisine pas de la boue ! 🤢".

function bakeCake(flavor) {
    // TON CODE ICI
}

// Appelle bakeCake avec "chocolat" puis avec "boue" pour tester.
// TON CODE ICI



// ---------------------------------------------------
// KATA 3 : Le plan de secours
// ---------------------------------------------------
const fetchMainAPI = () => Promise.reject(new Error("L'API principale est morte ☠️"));
const fetchBackupAPI = () => Promise.resolve({ data: "Données de secours sauvées ! 🛟" });

// Objectif :
// 1. Appelle fetchMainAPI().
// 2. Intercepte l'échec avec un .catch().
// 3. À L'INTÉRIEUR de ce .catch(), retourne l'appel à fetchBackupAPI().
// 4. Ajoute un .then() final qui affichera la donnée de secours.

// TON CODE ICI



// ---------------------------------------------------
// KATA 4 : Gestion de trafic
// ---------------------------------------------------
const serverEurope = new Promise((resolve) => setTimeout(() => resolve("Data Europe"), 2000));
const serverUSA = new Promise((resolve, reject) => setTimeout(() => reject("Serveur USA Crash"), 1000));
const serverAsia = new Promise((resolve) => setTimeout(() => resolve("Data Asia"), 500));

// Défi A : Tu as besoin des données de TOUS les serveurs pour continuer.
// Utilise la bonne méthode globale (Promise.xxx) pour attendre les 3. 
// Affiche le résultat ou l'erreur.

// TON CODE ICI


// Défi B : Tu as besoin d'une seule donnée, la plus rapide qui réussit !
// Utilise la méthode (Promise.xxx) qui ignorera le crash du serveur USA et te donnera la réponse de l'Asie.

// TON CODE ICI
