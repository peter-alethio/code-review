new (function() {

    function init() {
        this.todo = new Todo({
            title: "todo 모듈",
            tag: '#todo'
        });
    }

    init();
})();

function Todo({title, tag}) {

    function init() {
        this.title = title;
        this.$tag = tag;

        console.log(this.title, this.$tag)
    }

    init();
}