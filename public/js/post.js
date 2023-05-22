const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#newPostTitle').value.trim();
    const content = document.querySelector('#newPostContent').value.trim();
    

        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    
};

document
    .getElementById('newPostForm')
    .addEventListener('submit', newPostHandler);
    
// Delete the current post using the delete route
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('user_id')) {
      const id = event.target.getAttribute('user_id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document
    .getElementById('deletePostBtn')
    .addEventListener('click', delButtonHandler);

// Update the current post using the update route
const newCommentHandler = async (event) => {
    event.preventDefault();
    const content = document.getElementById('commentInput').value.trim();
    console.log(content)
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
}

document
    .getElementById('CommentForm')
    .addEventListener('submit', newCommentHandler);