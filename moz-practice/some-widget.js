var s,
someWidget = {

    settings: {
        numArticles: 5,
        articleList: $("#article-list"),
        moreButton: $("#more-button")
    },

    init: function () {
        s = this.settings;
        this.bindUIActions();
        console.log('init function');
    },
    bindUIActions: function () {
        s.moreButton.on("click", function() {
            // NewsWidget.getMoreArticles(s.numArticles);
            console.log('test');
        });
    },
    getMoreArticles: function () {
        // $.ajax or something
        // using numToGet as param
    }
};
