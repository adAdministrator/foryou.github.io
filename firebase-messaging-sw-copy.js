
importScripts(
  'https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyB8**********","appId":"1:6*******:web:205a422f*********","authDomain":"adAdministrator-github.firebaseapp.com","messagingSenderId":"69********5","projectId":"adAdministrator-github","storageBucket":"adAdministrator-github.appspot.com"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"****","url":"https:\u002F\u002F****.github.io"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
