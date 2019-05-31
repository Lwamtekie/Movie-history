import firebase from 'firebase/app';

import Auth from './components/auth/auth';

import MyNavbar from './components/MyNavbar/MyNavbar';


import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

//  initialize app makes an asynchronous request to firebase with you credential
const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.error(apiKeys.firebaseKeys);
  MyNavbar.navbarEvents();
  Auth.authStringBuilder();
};

init();
