// Create a new comment
const post_id = document.location.pathname.split('/')[2];

const newCommentHandler = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#commentInput').value.trim();
    if (!content) {
        alert('Comment cannot be empty. Share your thoughts!');
        return;
    }else{
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        })
        console.log(response)
        if (response.ok) {
            document.location.replace('/posts/' + post_id);
        }else{
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#commentForm')
    .addEventListener('submit', newCommentHandler);