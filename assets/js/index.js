
  const videos = document.querySelectorAll(".project-video");

  videos.forEach(video => {
    video.playbackRate = 5.0; 
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.6 
  });

  videos.forEach(video => observer.observe(video));

