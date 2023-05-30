const newPostHandler = async (event) => {
    console.log('Button clicked');
    event.preventDefault();
    const title = document.querySelector('#newPostTitle').value.trim();
    const content = document.querySelector('#newPostContent').value.trim();
    if (!title || !content) {
        alert('Title and Content cannot be empty. Please fill out both fields.');
        return;
    }
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
    