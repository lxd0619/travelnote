$(function () {                                                                                                              
    $('#head').load('head.html')
    $('#foot').load('foot.html')
    $('#outer a').mouseover(function () {
        $('#outer a').css({ 'background-color': 'rgba(50,50,50,0.1)' })
    })
    $('#outer a').mouseout(function () {
        $('#outer a').css({ 'background-color': 'rgba(300,300,300,0.1)' })
    })
    $('#weather').load('weather.html')
    //整体修改card组件样式
    $('#middle .card-deck').addClass('flex-column')
    $('#nav-hotScenery .card').addClass('d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded')
    $('#nav-hotFoods .card').addClass('d-flex flex-row mb-2 shadow-sm p-3 bg-white rounded')
    $('#nav-hotlines .card').addClass('mb-2 shadow-sm p-3 bg-white rounded')
    $('#middle .card-link').css('color','#000')
    $('#middle .card-text').css('color','#333')
    $('#middle .card-body i').addClass('mr-2')
    $('#middle .fa-thumbs-o-up').css('color','#ff9d00').addClass('float-right')
    $('#middle .card-body>p>i>img').css({'width':'25px','height':'25px'}).addClass('rounded-circle')

    // $('.nav-item').css('color','#ff9d00!important')
    // $('.nav-item').mouseover(function(){
    //     $(this).css('color','#ff9d00!important')
    // })
    // $('.nav-item').mouseout(function(){
    //     $(this).css('color','#000')
    // })
    $('#middle .card').mouseover(function(){
        $(this).children().css({'color':'#ff9d00'})
        $(this).find('a').css({'color':'#ff9d00'})
    })
    $('#middle .card').mouseout(function(){
        $(this).children().css({'color':'#000'})
        $(this).find('a').css({'color':'#000'})
    })

    //地图加载
    day01();

    var map = new AMap.Map('map01', {
        zoom: 13,//级别
        center: [120.6597518921, 31.3135349296],//中心点坐标
        viewMode: '3D'//使用3D视图
    });
    // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
    var path = [
        new AMap.LngLat(120.6290290000, 31.3241590000),
        new AMap.LngLat(120.6276280000, 31.3231430000),      
        new AMap.LngLat(120.6337237358, 31.3139015701),
        new AMap.LngLat(120.7009506226, 31.3031217420)
    ];
    // 创建点标记
    var marker1 = new AMap.Marker({
        position: [120.6290290000, 31.3241590000],
        size: new AMap.Size(40, 50)    // 图标尺寸
    })
    var marker2 = new AMap.Marker({
        position: [120.6276280000, 31.3231430000]
    })
    var marker3 = new AMap.Marker({
        position: [120.6337237358, 31.3139015701]
    })
    var marker4 = new AMap.Marker({
        position: [120.7009506226, 31.3031217420]
    })
    // 多个点实例组成的数组
    var markerList = [marker1, marker2, marker3, marker4];
    map.add(markerList);
    
    // 创建折线实例
    var polyline = new AMap.Polyline({
        path: path,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: 'rgb(255, 123, 0)', // 线条颜色
        lineJoin: 'round' // 折线拐点连接处样式
    });
    // 将折线添加至地图实例
    map.add(polyline);
});

function day01() {
    var map = new AMap.Map('map02', {
        zoom: 13,//级别
        center: [120.6597518921, 31.3135349296],//中心点坐标
        viewMode: '3D'//使用3D视图
    });

    // 创建点标记
    var marker1 = new AMap.Marker({
        position: [120.6290290000, 31.3241590000],
        size: new AMap.Size(40, 50)    // 图标尺寸
    })
    var marker2 = new AMap.Marker({
        position: [120.6276280000, 31.3231430000]
    })
    var marker3 = new AMap.Marker({
        position: [120.6337237358, 31.3139015701]
    })
    var marker4 = new AMap.Marker({
        position: [120.7009506226, 31.3031217420]
    })
    // 多个点实例组成的数组
    var markerList = [marker1, marker2, marker3, marker4];
    map.add(markerList);

    // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
    var path = [
        new AMap.LngLat(120.6290290000, 31.3241590000),
        new AMap.LngLat(120.6276280000, 31.3231430000),
        new AMap.LngLat(120.6337237358, 31.3139015701),
        new AMap.LngLat(120.7009506226, 31.3031217420)
    ];

    // 创建折线实例
    var polyline = new AMap.Polyline({
        path: path,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: 'rgb(255, 123, 0)', // 线条颜色
        lineJoin: 'round' // 折线拐点连接处样式
    });

    // 将折线添加至地图实例
    map.add(polyline);
}

function day02() {
    var map = new AMap.Map('map02', {
        zoom: 13,//级别
        center: [120.5854225146, 31.3225538729],//中心点坐标
        viewMode: '3D'//使用3D视图
    });
    // 创建点标记
    var marker1 = new AMap.Marker({
        position: [120.5682900000, 31.3102100000],
        size: new AMap.Size(40, 50)    // 图标尺寸
    })
    var marker2 = new AMap.Marker({
        position: [120.5806100000, 31.3353700000]
    })
    var marker3 = new AMap.Marker({
        position: [120.6021165848, 31.3170912827]
    })
    var marker4 = new AMap.Marker({
        position: [120.6011000000, 31.3181000000]
    })
    // 多个点实例组成的数组
    var markerList2 = [marker1, marker2, marker3, marker4];
    map.add(markerList2);

    // 折线的节点坐标数组，每个元素为 AMap.LngLat 对象
    var path2 = [
        new AMap.LngLat(120.5682900000, 31.3102100000),
        new AMap.LngLat(120.5806100000, 31.3353700000),
        new AMap.LngLat(120.6021165848, 31.3170912827),
        new AMap.LngLat(120.6011000000, 31.3181000000)
    ];

    // 创建折线实例
    var polyline2 = new AMap.Polyline({
        path: path2,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: 'rgb(255, 123, 0)', // 线条颜色
        lineJoin: 'round' // 折线拐点连接处样式
    });
    // 将折线添加至地图实例
    map.add(polyline2);
}