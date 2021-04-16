export default function show(e) {
    const url = e.target.href

    fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' }
        }).then(data => data.json())
        .then(post => renderHTML(post))
        .then(post => document.querySelector('#post-content').innerHTML = post)
}

function renderHTML(post) {
    return `<p>${post.title}</p>
    <p>${post.content}</p>
    <p><time datetime="time">${post.created_at}</time></p>`
}
