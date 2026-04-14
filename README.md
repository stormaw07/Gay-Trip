# Adventure Site – Setup Guide

## Folder structure
```
adventure-site/
├── pages/
│   ├── login.html        ← start here
│   ├── dashboard.html    ← trip list
│   └── trip.html         ← memories, todos, logs, calendar
├── css/
│   └── style.css
└── js/
    └── firebase.js       ← put your config here
```

---

## Step 1 – Create a Firebase project

1. Go to https://console.firebase.google.com
2. Click **Add project** → give it a name (e.g. `adventure-site`)
3. Disable Google Analytics (not needed) → **Create project**

---

## Step 2 – Enable Google Sign-In

1. In Firebase Console → **Authentication** → **Get started**
2. Click **Google** provider → Enable it → Save
3. Add your support email

---

## Step 3 – Create Firestore database

1. In Firebase Console → **Firestore Database** → **Create database**
2. Choose **Start in test mode** (we'll add rules later)
3. Pick a region close to you (e.g. `europe-west1` for Norway)

---

## Step 4 – Get your config

1. Go to **Project Settings** (gear icon) → **Your apps** → click **</>** (Web)
2. Register the app (any name)
3. Copy the `firebaseConfig` object

---

## Step 5 – Paste config into js/firebase.js

Open `js/firebase.js` and replace the placeholder values:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc123"
};
```

---

## Step 6 – Add your friends' emails

In **three places** (login.html, dashboard.html, trip.html), update:

```js
const ALLOWED_EMAILS = [
  "yourmail@gmail.com",
  "friend1@gmail.com",
  "friend2@gmail.com"
];
```

---

## Step 7 – Secure Firestore (before going live)

In Firebase Console → Firestore → **Rules**, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null
        && request.auth.token.email in [
          'yourmail@gmail.com',
          'friend1@gmail.com',
          'friend2@gmail.com'
        ];
    }
  }
}
```

---

## Step 8 – Deploy to Firebase Hosting (free)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Public directory: . (dot, the root folder)
# Single page app: No
# Overwrite index.html: No
firebase deploy
```

Your site will be live at: `https://your-project.web.app`

---

## Step 9 – Add authorized domain for Google Auth

1. Firebase Console → Authentication → **Settings** → **Authorized domains**
2. Add `your-project.web.app` (already there by default)
3. If using a custom domain, add that too

---

## Done!
Open `pages/login.html` locally or visit your deployed URL.
Sign in with Google → you're in!
