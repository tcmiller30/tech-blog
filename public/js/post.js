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
    .getElementById('newPostSubmit')
    .addEventListener('submit', newPostHandler);