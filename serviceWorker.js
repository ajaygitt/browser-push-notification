self.addEventListener("push", function (e) {
  console.log("eee", e);
  //   var options = {
  //     body: "sample notification generated fom push msg",
  //     icon: "https://images.unsplash.com/photo-1612177241462-d254edf4e823?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDQxODAyMg&ixlib=rb-4.0.3&q=80&w=1900",
  //     vibrate: [100, 50, 100],
  //     data: {
  //       dateOfArrival: Date.now(),
  //       primaryKey: "2",
  //     },
  //     actions: [
  //       {
  //         action: "explore",
  //         title: "Explore this new world",
  //         icon: "https://images.unsplash.com/photo-1612177241462-d254edf4e823?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDQxODAyMg&ixlib=rb-4.0.3&q=80&w=1900",
  //       },
  //     ],
  //   };
  var newC
  var options = {};
  if (e.data) {
    console.log("Push data payload:", JSON.stringify(e.data));

    let non=e.data.text()

    // newC = JSON.parse(non)

    console.log("this is new",non)
    options = {
      body: e.data.text(),
      icon: "path/to/icon.png",
      actions: [
        { action: "view", title: "View" },
        { action: "dismiss", title: "Dismiss" },
      ],
    };
  } else {
    console.log("Push data payload is empty.");
  }

  e.waitUntil(self.registration.showNotification("Hey world", options));
});
