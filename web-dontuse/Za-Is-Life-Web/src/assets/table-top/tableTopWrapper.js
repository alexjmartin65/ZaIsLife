var tableTopWrapper = (function () {

    return {
        init: function (url) {
            init({
                key: url,
                callback: function (data, tabletop) {
                    alert('Successfully processed!')
                    console.log(data);
                  },
                simpleSheet: true
            });
        }
    };

})(tableTopWrapper || {})