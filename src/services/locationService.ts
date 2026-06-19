const getLocation = () => {
  return new Promise((resolve, reject) => {
    console.log('Getting location...');
    resolve({
      latitude: 37.7749,
      longitude: -122.4194,
      accuracy: 5,
      timestamp: Date.now()
    });
  });
};

const watchLocation = (callback, onError) => {
  console.log('Watching location...');
  return setInterval(() => {
    callback({
      latitude: 37.7749 + Math.random() * 0.01,
      longitude: -122.4194 + Math.random() * 0.01,
      accuracy: 5,
      timestamp: Date.now()
    });
  }, 5000);
};

export { getLocation, watchLocation };
