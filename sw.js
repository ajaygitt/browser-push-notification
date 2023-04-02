self.addEventListener('push', event => {
    const data = event.data.json();
    const title = data.title;
    const options = {
      body: data.message,
      icon: 'path/to/icon.png'
    };
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  });
  