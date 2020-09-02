import firebase from 'firebase';
import "@firebase/firestore";
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const firebaseConfig = {
    apiKey: "AIzaSyA2yw5LyyRIZpAWc0STrnq_2xkKAxlC_yc",
    authDomain: "todoapp-2e608.firebaseapp.com",
    databaseURL: "https://todoapp-2e608.firebaseio.com",
    projectId: "todoapp-2e608",
    storageBucket: "todoapp-2e608.appspot.com",
    messagingSenderId: "994716259930",
    appId: "1:994716259930:web:96f1ace9f9ad8110b6ea63"
}

class Fire {

    constructor(callback) {
        this.init(callback)
    }

    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user)

            } else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        callback(error);
                    });
            }
        });

    }
    getLists(callback) {
        let ref = this.ref.orderBy('name')

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = []

            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() })
            });

            callback(lists);
        });
    }

    addList(list) {
        let ref = this.ref;

        ref.add(list);
    }
    
    updateList(list) {
        let ref = this.ref;
        ref.doc(list.id).update(list);
    }

    get userId() {
        return firebase.auth().currentUser.uid
    }

    get ref() {
        return firebase
        .firestore()
        .collection('users')
        .doc(this.userId)
        .collection('lists');
    }
    detach() {
        this.unsubscribe();
    }
}
export default Fire;