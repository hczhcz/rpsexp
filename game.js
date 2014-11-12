$(function () {
    var step = 0;

    function stepupd(newstep) {
        if (step < 5) {
            step = newstep;
        }

        function lmr(target, tostep) {
            var l = {
                left: "-50%",
                right: "100%",
                top: "0%",
                bottom: "0%",
                opacity: "0"
            }
            var m = {
                left: "0%",
                right: "0%",
                top: "0%",
                bottom: "0%",
                opacity: "1"
            }
            var r = {
                left: "100%",
                right: "-50%",
                top: "0%",
                bottom: "0%",
                opacity: "0"
            }

            if (step < tostep) {
                target.animate(r);
            } else if (step > tostep) {
                target.animate(l);
            } else {
                target.animate(m);
            }
        }

        lmr($("#page1"), 0);
        lmr($("#page2"), 1);
        lmr($("#page3"), 2);
        lmr($("#page4"), 3);
        lmr($("#page5"), 4);
        lmr($("#page6"), 5);
    }

    stepupd(0);

    $(".intro").click(function () {
        stepupd(step + 1);
    });

    $(".question").click(function () {
        stepupd(step + 1);
    });

    var totalcomp = 30;
    var comp = 10;
    var round = 5;
    var win = 4;

    var gameinfo;
    var nowcomp = comp;
    var nowround = 0;
    var compwin = 0;
    var youwin = 0;

    $("#xcomp").text(comp);
    $("#xround").text(round);
    $("#xwin").text(win);

    function gameupd(winmode) {
        nowround += 1;

        if (winmode == "you") {
            youwin += 1;
        } else if (winmode == "comp") {
            compwin += 1;
        }

        if (nowwin == win) {
            // TODO delete comp
            // TODO update
            nowcomp -= 1;
            nowround = 0;
            youwin = 0;
        } else if (nowround == round) {
            // TODO update
            nowround = 0;
            youwin = 0;
        }

        if (nowcomp == 0) {
            stepupd(step + 1);
        }

        $("#xcomp1").text(comp);
        $("#xcomp2").text(nowcomp);
        $("#compinfo #xname").text("");
        $("#compinfo #xwin").text(compwin);
        $("#yourinfo #xname").text("");
        $("#yourinfo #xwin").text(youwin);
    }
});
