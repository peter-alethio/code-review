new (function() {

    function init() {
        this.todo = new Todo({
            title: "todo 모듈"
        });
    }

    init();
})();

function Todo({title}) {
    console.log(title)
}