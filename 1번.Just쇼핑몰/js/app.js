
var cur_top=0//0,-300,-600,0,-300,-600

$(document).ready(function(){
    popup()
    tab_version2()
    menu()
    slide()
})
function popup(){
    $(".pop").click(function(){
        $("#popup").show()
    })
    $("#closeBtn").click(function(){
        $("#popup").hide()
    })
}

function tab_version1(){
    $(".tab_btn>a").eq(0).click(function(){
        //0번째 앵커 클릭하면
        //탭컨텐츠 밑의 div중에서 0번째는 보여주고 1번째는 숨긴다.
        $(".tab_contents>div").eq(0).show()
        $(".tab_contents>div").eq(1).hide()
    })
    $(".tab_btn>a").eq(1).click(function(){
        //1번째 앵커 클릭하면
        //탭컨텐츠 밑의 div중에서 1번째는 보여주고 0번째는 숨긴다.
        $(".tab_contents>div").eq(1).show()
        $(".tab_contents>div").eq(0).hide()
    })
}

function tab_version2(){
    var idx=0
    $(".tab_btn>a").click(function(){
        idx=$(this).index()//몇번째 인덱스인가?
        //alert(idx)//0,1
        $(".tab_contents>div").hide()
        //tab_contents한칸 하위의 div모두 숨긴다.
        $(".tab_contents>div").eq(idx).show()
        //tab_contents한칸 하위의 div중에서 idx번째만 보여준다.
    })
}

function menu(){
    $(".gnb>li").hover(
        //mouseover시에 실행
        function(){
            $(".lnb").stop().slideDown(500)
        },
        //mouseout시에 실행
        function(){
            $(".lnb").stop().slideUp(500)
        }
    )
}
//기능사 슬라이드는 약간 야메다...
//휘리릭 슬라이드
//제대로된걸 하려면 다른방식,또는 라이브러리
function slide(){
    setInterval(slide_move,3000)
}
function slide_move(){
    cur_top -= 300
    if(cur_top<-600){
        cur_top=0
    }
    $("#slide_contents").animate({"top":cur_top},400,"swing")
    //0,-300,-600, 0,-300,-600
    //가로방향,위아래
    //swing은 어짜피 default니까 넣으나 안넣으나 똑같다.
    //easing default가 swing이니까...
}