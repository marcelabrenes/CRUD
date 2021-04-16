export default function index() {
    fetch('/posts', {
        method: 'GET',
        headers: {'Accept': 'application/json'}
    })
        .then(response => response.json())
        .then(posts => renderPosts(posts))
        .then(posts =>document.querySelector('#posts tbody').innerHTML = posts.join(''))
}

function renderPosts(posts){
  return posts.map(post => createHTML(post))
}

export function createHTML(post){
    return `<tr id="post-${post.id}">
       <td>${post.title}</td>
       <td> <a class="post_show" href="/posts/${post.id}">Show</a></td>
       <td><a class="post_edit" href="/posts/${post.id}/edit">Edit</a></td>
       <td><a class="post_destroy" href="/posts/${post.id}">Destroy</a></td>
    </tr>`
}
