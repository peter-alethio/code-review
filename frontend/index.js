function Todo ({title, tag}) {

    const init = () => {
        this.title = title;
        this.$tag = tag;

        render();
    }

    const render = () => {
        this.$todo = document.querySelector(this.$tag);
        this.$todo.appendChild(document.createTextNode(this.title))
    }

    init();
}

new (function() {

    const init = () => {
        this.todo = new Todo({
            title: "todo 모듈",
            tag: '#todo'
        });
    }

    init();
})();

