import firebase from 'firebase/app';

import 'firebase/auth';

import util from '../../helpers/util';

import googleImage from './googlebutton.png';


const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '<button id="google-auth" class="btn btn gogle">';
  domString += `<image src="${googleImage}" />`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authStringBuilder };
