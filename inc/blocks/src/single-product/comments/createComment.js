export const createComment = (data) => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'wp-block-glimp-comments__comment';
  
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'wp-block-glimp-comments__comment-rating';
  
    const ratingDefaultSpan = document.createElement('span');
    ratingDefaultSpan.className = 'wp-block-glimp-comments__comment-rating-stars';
    ratingDefaultSpan.textContent = '★ ★ ★ ★ ★';
  
    const ratingSpan = document.createElement('span');
    ratingSpan.className = 'wp-block-glimp-comments__comment-rating-stars_active';
    ratingSpan.textContent = '★ '.repeat(parseInt(data.rating));
  
    ratingDiv.appendChild(ratingDefaultSpan);
    ratingDiv.appendChild(ratingSpan);
    commentDiv.appendChild(ratingDiv);
  
    const authorP = document.createElement('p');
    authorP.className = 'wp-block-glimp-comments__comment-author';
    authorP.textContent = data.author;
    commentDiv.appendChild(authorP);
  
    const contentP = document.createElement('p');
    contentP.className = 'wp-block-glimp-comments__comment-content';
    contentP.textContent = data.content;
    commentDiv.appendChild(contentP);
  
    const infoDiv = document.createElement('div');
    infoDiv.className = 'wp-block-glimp-comments__comment-info';
  
    const dateP = document.createElement('p');
    dateP.className = 'wp-block-glimp-comments__comment-date';
    dateP.textContent = data.date;
    infoDiv.appendChild(dateP);
  
    if (data.device) {
      const deviceP = document.createElement('p');
      deviceP.className = 'wp-block-glimp-comments__comment-device';
      deviceP.textContent = data.device;
      infoDiv.appendChild(deviceP);
    }
  
    commentDiv.appendChild(infoDiv);
  
    return commentDiv;
  }