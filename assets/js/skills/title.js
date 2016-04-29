var INITAL_TITLE = "Core Skills"
title = {
    setIntial: function () {
        this.title
            .text(INITAL_TITLE)
    },
    getTitle: function () {

        this.title = d3.select('.skill-title')


    },
    updateTitle: function (node) {

        this.title
            .text(function () {
                return node.__data__.text
            })
    }
}
