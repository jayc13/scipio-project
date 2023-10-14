import dotenv from 'dotenv';

import * as firebaseAdmin from 'firebase-admin';
import {ServiceAccount} from 'firebase-admin';

dotenv.config();

const serviceAccount: ServiceAccount = {
	'projectId': process.env.FIREBASE_PROJECT_ID,
	'privateKey': process.env.FIREBASE_PRIVATE_KEY,
	'clientEmail': process.env.FIREBASE_CLIENT_EMAIL,
}
;

const firebaseApp = firebaseAdmin.initializeApp({
	credential: firebaseAdmin.credential.cert(serviceAccount)
});

export default firebaseApp;
