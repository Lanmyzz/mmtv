var rule = {
    title: '⭐️次元城⭐️',
    host: 'https://www.cycdm01.top',
    url: '/show/fyclass.html',
    headers: {
        'User-Agent': 'PC_UA'
    },
    searchable: 1, //是否启用全局搜索,
	quickSearch: 1, //是否启用快速搜索,
    filterable: 0, //是否启用分类筛选,
    class_name: '4K专区&TV动画&剧场版',
    class_url: '26&20&21',
    lazy: `js: var html = JSON.parse(request(input)
        .match(/r player_.*?=(.*?)</)[1]);
    var url = html.url;
    if (html.encrypt == '1') {
        url = unescape(url)
    } else if (html.encrypt == '2') {
        url = unescape(base64Decode(url))
    }
    if (/m3u8|mp4/.test(url)) {
        input = url
    } else {
        input
    }`,
    limit: 6,
    推荐: 'body&&.public-list-box;body&&.public-list-div;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href;bangumi/(\\d+?).html',
    double: true, // 推荐内容是否双层定位
    一级: "js:(" + (() => {
        var Uid = "DCC147D11943AF75";
        var time = String(parseInt(new Date()
            .getTime() / 1000))
        var md5 = CryptoJS.MD5("DS" + time + Uid)
            .toString();

        var json = JSON.parse(request(" https://www.cycdm01.top/index.php/api/vod", {
            method: "POST",
            body: `type=${MY_CATE}&page=${MY_PAGE}&time=${time}&key=${md5}`
        })).list;
        VODS = json;
    }).toString() + ")()",
    detailUrl: "bangumi/fyid.html",
    二级: {
        "title": "h3&&Text;body&&.slide-info-remarks:eq(0)&&Text",
        "img": ".lazy&&data-original",
        "desc": "body&&.slide-info.hide:eq(0)&&Text;body&&.slide-info.hide:eq(1)&&Text;body&&.slide-info.hide:eq(2)&&Text;body&&.slide-info.hide:eq(3)&&Text;body&&.slide-info.hide:eq(4)&&Text",
        "content": "body&&.check.text&&Text",
        "tabs": "body&&.anthology-tab&&a",
        "lists": "body&&.anthology-list-box&&ul&&li"
    },
    searchUrl: 'search.html?wd=**',
    搜索: 'body&&.search-box;.thumb-txt&&Text;.lazy&&data-original;.public-list-prb&&Text;a&&href',
}