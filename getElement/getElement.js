
//选择器函数
function $(str){

    //获取类名的函数
    function getClass(classname){

        //兼容
        if(document.getElementsByClassName){
            return document.getElementsByClassName(classname);
        };

        //不兼容
        var arr = []; //用来存储类名
        var theElement = document.getElementsByTagName("*");  //获取元素

        //遍历所有的元素
        for(var i = 0; i < theElement.length; i++){

            var arrName = theElement[i].className.split(""); //分割类名

            //将类名存入数组
            for(var j = 0; j < arrName.length; j++){
                if(arrName[j] == classname){
                    arr.push( theElement[j] );
                };
            };
        };
        return arr;
    };


    var s = str.charAt(0); //用来存储 选择的符号  # . 标签名
    var ss = str.substr(1); //用来存储选择符后面的内容

    switch (s){
        case "#":
            return document.getElementById(ss);
            break;
        case ".":
            return getClass(ss);
            break;
        default :
            return document.getElementsByTagName(str);
            break;
    };
};
