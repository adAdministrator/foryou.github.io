importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyB8XJ************U","appId":"1:6963*********65:web:205a422**********78","authDomain":"adAdministrator-github.firebaseapp.com","messagingSenderId":"69*******65","projectId":"adAdministrator-github","storageBucket":"adAdministrator-github.appspot.com"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"adAdministrator","url":"https:\u002F\u002FadAdministrator.github.io"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
