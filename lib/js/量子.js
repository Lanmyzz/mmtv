var rule = {
	title: '量子',
	host: 'https://www.liangzitva.com',
	url: '/s/fyfilter.html',
	searchUrl: '/vodsearch/**----------fypage---.html',
	headers: {'User-Agent': 'PC_UA'},
	searchable: 1, //是否启用全局搜索,
	quickSearch: 1, //是否启用快速搜索,
	filterable: 1, //是否启用分类筛选,
	filter_url: '{{fl.cateId}}{{fl.area}}{{fl.class}}/page/fypage/{{fl.year}}.html',
        filter: {"dianying":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"dianying"},{"n":"動作","v":"dongzuopian"},{"n":"喜劇","v":"xijupian"},{"n":"愛情","v":"aiqingpian"},{"n":"科幻","v":"kehuanpian"},{"n":"恐怖","v":"kongbupian"},{"n":"劇情","v":"juqingpian"},{"n":"戰爭","v":"zhanzhengpian"},{"n":"🔞言情片","v":"yanqingpian"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"動作","v":"/class/动作"},{"n":"喜劇","v":"/class/喜剧"},{"n":"愛情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"科幻","v":"/class/科幻"},{"n":"劇情","v":"/class/剧情"},{"n":"戰爭","v":"/class/战争"},{"n":"警匪","v":"/class/警匪"},{"n":"犯罪","v":"/class/犯罪"},{"n":"動畫","v":"/class/动画"},{"n":"奇幻","v":"/class/奇幻"},{"n":"武俠","v":"/class/武侠"},{"n":"冒險","v":"/class/冒险"},{"n":"槍戰","v":"/class/枪战"},{"n":"懸疑","v":"/class/悬疑"},{"n":"驚悚","v":"/class/惊悚"},{"n":"古裝","v":"/class/古装"},{"n":"歷史","v":"/class/历史"},{"n":"災難","v":"/class/灾难"},{"n":"🔞倫理","v":"/class/伦理"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/中国台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}],"lianxuju":[{"key":"cateId","name":"分類","value":[{"n":"全部","v":"lianxuju"},{"n":"國產劇","v":"guochanju"},{"n":"港台劇","v":"gangtaiju"},{"n":"日韓劇","v":"rihanju"},{"n":"歐美劇","v":"oumeiju"},{"n":"其他","v":"qitaju"}]},{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"古裝","v":"/class/古装"},{"n":"戰爭","v":"/class/战争"},{"n":"動作","v":"/class/动作"},{"n":"家庭","v":"/class/家庭"},{"n":"犯罪","v":"/class/犯罪"},{"n":"奇幻","v":"/class/奇幻"},{"n":"歷史","v":"/class/历史"},{"n":"劇情","v":"/class/剧情"},{"n":"商戰","v":"/class/商战"},{"n":"網劇","v":"/class/网剧"},{"n":"喜劇","v":"/class/喜剧"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/中国台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}],"zongyi":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"情感","v":"/class/情感"},{"n":"訪談","v":"/class/访谈"},{"n":"播報","v":"/class/播报"},{"n":"旅遊","v":"/class/旅游"},{"n":"音樂","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"選秀","v":"/class/选秀"},{"n":"紀實","v":"/class/纪实"},{"n":"曲藝","v":"/class/曲艺"},{"n":"生活","v":"/class/生活"},{"n":"遊戲","v":"/class/游戏"},{"n":"財經","v":"/class/财经"},{"n":"求職","v":"/class/求职"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/中国台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}],"dongman":[{"key":"class","name":"劇情","value":[{"n":"全部","v":""},{"n":"熱血","v":"/class/热血"},{"n":"推理","v":"/class/推理"},{"n":"搞笑","v":"/class/搞笑"},{"n":"冒險","v":"/class/冒险"},{"n":"校園","v":"/class/校园"},{"n":"動作","v":"/class/动作"},{"n":"機戰","v":"/class/机战"},{"n":"運動","v":"/class/运动"},{"n":"戰爭","v":"/class/战争"},{"n":"親子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"勵志","v":"/class/励志"}]},{"key":"area","name":"地區","value":[{"n":"全部","v":""},{"n":"大陸","v":"/area/中国大陆"},{"n":"香港","v":"/area/中国香港"},{"n":"臺灣","v":"/area/中国台湾"},{"n":"美國","v":"/area/美国"},{"n":"法國","v":"/area/法国"},{"n":"英國","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韓國","v":"/area/韩国"},{"n":"德國","v":"/area/德国"},{"n":"泰國","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"其他","v":"/area/其他"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2014"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"}]}]},
	filter_def: {dianying: {cateId: 'dianying'},lianxuju: {cateId: 'lianxuju'},zongyi: {cateId: 'zongyi'},dongman: {cateId: 'dongman'}},
	class_parse: '.sjmenu.pcyc&&ul&&li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html', //分类的数组，分类的名称
	play_parse: true, //解析
	lazy: `js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4|getm3u8?url=http/.test(url)) {
            input = url
        } else {
            input
        }
    `,
	limit: 6,
	推荐: '.list.clearfix;li;*;*;*;*', //推荐首页列表，数组，名称，副标题，链接
	double: true, //推荐内容是否双层定位
	一级: 'body&&.li_all;body&&.name&&Text;img&&src;.rgba1&&Text;a&&href', //分类的数组，标题，图片，副标题，链接
	二级:
	{
		"title": ".detail_name&&Text;.dl.clearfix&&dd:eq(3)&&Text", //单个二级标题，副标题
		"img": ".module-item-pic&&img&&data-src", //图片
		"desc": ".dl.clearfix&&dd:eq(2)&&Text;.dl.clearfix&&dd:eq(6)&&Text;.dl.clearfix&&dd:eq(4)&&Text;.dl.clearfix&&dd:eq(0)&&Text;.dl.clearfix&&dd:eq(5)&&Text", //描述导演之类
		"content": ".des_xy&&Text", //详情简介
		"tabs": ".tabt3.title span", //线路数组
		"lists": "ul.list_1:eq(#id)&&li" //播放集数数组列表
	},
	搜索: '*',//搜索列表，标题，图片，副标题，链接
	sniffer:1,
	isVideo:`js:
		log(input);
		if(/video\\/tos/.test(input)){
			input = true
		}else if(/\\.m3u8/.test(input)){
			input = true
		}else{
			input = false
		}
	`,
}