
var rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

hljs.configure({
    tabReplace: '  ',
    classPrefix: 'hljs-',
    languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
})
hljs.initHighlightingOnLoad();
hljs.initHighlighting();

marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});

// hljs.initHighlightingOnLoad();

window.onload = load;

function load() {
    var initData = document.getElementById('initialData').innerHTML;
    document.getElementById('markdownRender').innerHTML =
        marked(initData);
}


/*
document.getElementById('markdownRender').innerHTML =
    marked('{{markdownFile}}');
*/
