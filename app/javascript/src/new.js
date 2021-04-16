export default function(){
    const html = createForm({action: '/posts', method: 'POST', id: 'post_create'})
    document.querySelector('#post-content').innerHTML = html
}

export function createForm(form, post = {}){
    const title = post.title || ''
    const content = post.content || ''
    const submit = form.action === '/posts'? 'Create Post' : 'Update Post'

    return `<form action="${form.action}" method="${form.method}" id="${form.id}">
    <div class="field">
        <label for="post_title">Title</label><br />
        <input type="text" name="post_title" value="${title}">
    </div>
    <div class="field">
        <label for="post_content">Content</label><br />
        <textarea name="post_content" cols="30" rows="10">${content}</textarea>
    </div>
    <input type="submit" value="${submit}">
    </form>`
}