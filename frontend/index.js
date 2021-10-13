function Todo ({title, tag}) {

    const CLICK_EVENT = 'click';
    const INPUT_ELEMENT = "input";

    const init = () => {
        this.title = title;
        this.$tag = tag;

        render();
    }

    const render = () => {
        this.$todo = document.querySelector(this.$tag);
        this.$todo.appendChild(document.createTextNode(this.title))
        this.$todo.addEventListener(CLICK_EVENT, () => alert(this.title))

        this.$todo.appendChild(document.createElement(INPUT_ELEMENT))
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

