const template = document.createElement(‘template’)

template.innerHTML = `<nav>
<div id="site-name"><a href="./index.html">KaleCream</a></div>
<ul>
    <li><a href="html/directory.html">Playground</a></li>
    <li>Rolodex</li>
    <li>Log</li>
    <li><a href="html/blog.html">Blog</a></li>
    <li>Contact</li>
</ul>
</nav>`

class Header extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: ‘open’ })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

document.body.appendChild(template.content)