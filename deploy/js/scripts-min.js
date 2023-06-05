var thumbsUpCount = 0;
    var thumbsDownCount = 0;
    
    function increaseCount(type) {
      if (type === 'thumbs-up') {
        thumbsUpCount++;
        document.getElementById('thumbs-up-count').innerText = thumbsUpCount;
      } else if (type === 'thumbs-down') {
        thumbsDownCount++;
        document.getElementById('thumbs-down-count').innerText = thumbsDownCount;
      }
    }