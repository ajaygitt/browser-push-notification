var push = require("web-push");

// let vapidKeys= push.generateVAPIDKeys();

// console.log('vapidKeys',vapidKeys)

let vapidKeys = {
  publicKey:
    "BBS37FdSvWlWtgPPcg96okvf3-aukld6epbq3Ufyfvhb54jx_m-QH07Hh-rcZEnrc6zoniftmIxuQIBS3Fu3Itk",
  privateKey: "oyrIPrA3VGiphLSTWhBQRHny2SzpGmRSpkLs4n1DpeY",
};

push.setVapidDetails(
  "mailto:testtttt",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d6kQgJnu15w:APA91bFaJ-LxhM_nADTG38E8O8DftJ1ERXYJ_pBP-UX-Dupu-UftmyucKmQr44oydoDHePwZTOjLOmK8KrNMa6QhXVDcCZZw7q0vW3FpgvZQOJbnR3_tgGzP9R8uzC4KgXwfsVTqG6Y_",
  expirationTime: null,
  keys: {
    p256dh:
      "BA45JsavlJZGpCWuF9PiyLOAeahg6OIeY3Qk5sI_RbGAGY0LWXk9RDjAg2vd6I-iWcheNjGP0NGJf6TZs1yiFBM",
    auth: "ukXesoZtrNXmKlAnCtYXsw",
  },
};



// Set up the notification options
   var options = {
      body: "sample notification generated fom push msg",
      icon: "https://images.unsplash.com/photo-1612177241462-d254edf4e823?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDQxODAyMg&ixlib=rb-4.0.3&q=80&w=1900",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
      actions: [
        {
          action: "explore",
          title: "Explore this new world",
          icon: "https://images.unsplash.com/photo-1612177241462-d254edf4e823?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDQxODAyMg&ixlib=rb-4.0.3&q=80&w=1900",
        },
      ],
    };



// Send the notification
let pushtest = push.sendNotification(sub, JSON.stringify(options));
console.log("push scuces",pushtest)