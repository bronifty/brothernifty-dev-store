// Function to mimic gtag() for Google Analytics
function gtag(event, action, params) {
  console.log(`Event: ${event}, Action: ${action}, Params:`, params);
  // Implement actual Google Analytics tracking code here
}

let halfPlayed = false;

document.addEventListener('videoLoaded', function(event) {
  console.log('Video has started playing:', event.detail.videoElement);

  gtag('event', 'play', {
      'event_category': 'Videos',
      'event_label': 'Bike Summer Campaign'
  });

  const video = event.detail.videoElement;

  // Check video progress
  video.addEventListener('timeupdate', function() {
    const percentage = (video.currentTime / video.duration) * 100;
    if (percentage >= 50 && !halfPlayed) {
      halfPlayed = true;
      gtag('event', 'watched50', {
        'event_category': 'Videos',
        'event_label': 'Bike Summer Campaign'
      });
    }
  });
});