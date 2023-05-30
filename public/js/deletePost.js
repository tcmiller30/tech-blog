// Delete Post Handler, deletes Post and all associated Comments
const deletePostHandler = async (event) => {
    event.preventDefault();
    const post_id = document.location.pathname.split('/')[2];
    const response = await fetch('/api/posts/' + post_id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(response)
    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
}
document
    .querySelector('#deletePostBtn')
    .addEventListener('click', deletePostHandler);