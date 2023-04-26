//jquery
$(document).ready(function () {
    $(".sidenav").sidenav({
        edge: "left",
    });
});

//headerのbreakpointの調整（layout）
window.addEventListener("DOMContentLoaded", function () {


        const getMenuRight = document.getElementsByClassName(
          "hide-on-med-and-down"
        )[0];
        //一時的なlayoutのcssの修正
        getMenuRight.style.cssText = "height: 64px; align-items: center;";

    
    window.addEventListener("resize", function () {
        //headerのresponsive対応
        if (window.matchMedia("screen and (max-width:994px)").matches) {
            //frameworkのここが原因
            let getHamMin = this.document.getElementsByClassName("sidenav-trigger")[0];
            getHamMin.style.display = 'block';
        }
        //994px以上だった時のheaderの対応
        if (window.matchMedia("screen and (min-width:994px)").matches) {
            //frameworkのここが原因
            let getHamMax = this.document.getElementsByClassName("sidenav-trigger")[0];
            console.log()
            getHamMax.style.display = 'block';
        }
        

  });
});
