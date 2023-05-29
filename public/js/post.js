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
    .querySelector('#newPostForm')
    .addEventListener('submit', newPostHandler);
    
// Delete the current post using the delete route
const delButtonHandler = async (event) => {
    event.preventDefault();
    const id = document.location.pathname.split('/')[2];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
};

  document
    .querySelector('#deletePostBtn')
    .addEventListener('click', delButtonHandler);

// Update the current post using the update route