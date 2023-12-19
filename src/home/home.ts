import { loadMorePosts } from '../helpers/api';
import { startLoading, endLoading } from '../helpers/loading';

const loadingTrigger = document.querySelector('.wp-block-glimp-loader');
const cardLoader = document.querySelector('.wp-block-glimp-loader__card');
const postsContainer = document.querySelector('.wp-block-glimp-all-posts');

let currentPage = 1;
let isLoading = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadNewPosts();
    }
  });
}, {
  rootMargin: '200px 0px',
  threshold: 1.0
});
if (loadingTrigger) observer.observe(loadingTrigger);


const loadNewPosts = () => {
  if (isLoading) return;
  isLoading = true;
  if (cardLoader && postsContainer) startLoading(cardLoader, postsContainer);
  loadMorePosts(currentPage + 1)
    .then(response => {
      if (response.success) {
        postsContainer?.insertAdjacentHTML('beforeend', response.data.posts);
        currentPage = response.data.page;
      } else {
        if (loadingTrigger) observer.unobserve(loadingTrigger);
      }
    })
    .catch(() => {
      if (loadingTrigger) observer.unobserve(loadingTrigger);
    })
    .finally(() => {
      if (postsContainer) endLoading(postsContainer);
      isLoading = false;
    })
}