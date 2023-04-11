$(document).ready(function (e) {
    function t(e, t = !1, a = "") {
        var n = "",
            o = "",
            i = "";
        return (
            "manager" === e && (n = '<img class="chat-content-desc-image" src="Hanz.png" alt="" />'),
            t && ((o = "text-" + t), (i = ' class="p' + t + '"')),
            '<div class="chat-content-item ' + e + " " + o + '"><div class="chat-content-desc">' + n + '<div class="chat-content-desc-item ' + e + '"><p' + i + ">" + a + "</p></div></div></div>"
        );
    }
    function a(a) {
        $(".chat-content-buttons-gender").remove(),
            $(".chat-content-list").append(t("user")),
            $(".chat-content-item.user p").html(e.managerDialog[1][a].text),
            $(".chat-content-list").append(t("manager")),
            $(".chat-content-item.manager p").typed({
                strings: [e.managerDialog[2].text],
                showCursor: !1,
                callback: function () {
                    setTimeout(function () {
                        var n, o, r;
                        $(".chat-content-list").append(
                            '<form name="questionForm" class="form"><div class="form-group"><div class="form-group-inline"><select name="day" class="custom-select select-day"><option value="" selected="selected">date</option>' +
                                (function () {
                                    for (i = e.DateBirthday[0].day[0]; i < e.DateBirthday[0].day[1] + 1; i++) n += '<option value="' + i + '">' + i + "</option>";
                                    return n;
                                })() +
                                '</select></div><div class="form-group-inline full-month"><select name="month" class="custom-select select-month"><option value="" selected="selected">month</option>' +
                                ($.each(e.DateBirthday[0].month, function (e, t) {
                                    o += '<option value="' + (e + 1) + '">' + t + "</option>";
                                }),
                                o) +
                                '</select></div><div class="form-group-inline year"><select name="year" class="custom-select select-year"><option value="" selected="selected">year</option>' +
                                (function () {
                                    for (i = e.DateBirthday[0].year[0]; i < e.DateBirthday[0].year[1] + 1; i++) r += '<option value="' + i + '">' + i + "</option>";
                                    return r;
                                })() +
                                "</select></div></div></form>"
                        ),
                            e.Scroll();
                        var c,
                            s = [],
                            d = $('form[name="questionForm"]');
                        d.find("select").addClass("empty_field"),
                            d.find("select").change(function () {
                                if (
                                    (d.find("select").each(function () {
                                        "" != $(this).val() ? $(this).removeClass("empty_field") : $(this).addClass("empty_field"), (s[this.name] = $(this).val());
                                    }),
                                    0 == d.find(".empty_field").size())
                                ) {
                                    d.remove();
                                    var n = e.MonthVariantType[s.month - 1],
                                        o = e.MonthVariant[n][0],
                                        i = e.MonthVariant[n][1],
                                        r = e.MonthVariant[n][2];
                                    (c = [s.year]),
                                        (c = e.getZodiak(c)),
                                        (s.day = s.day.length > 1 ? s.day : "0" + s.day),
                                        (s.month = s.month.length > 1 ? s.month : "0" + s.month),
                                        $(".chat-content-list").append(t("user", "date")),
                                        $(".chat-content-item.user.text-date p").html(s.day + "." + s.month + "." + s.year);
                                    var l = [],
                                        m = [],
                                        p = { zodie: e.ZodiakName[c - 1].name, date: s.day, month1: o, month2: i, month3: r, year: s.year, number: e.randomIntFromInterval(4, 10) };
                                    $(".chat-content-list").append(t("manager", "birthday"));
                                    var u = e.userZodiak[0].text,
                                        h = e.Replace(u, p);
                                    $(".chat-content-item.manager p").typed({
                                        strings: [h],
                                        showCursor: !1,
                                        callback: function () {
                                            var t = [{ text: e.Replace(e.socNumber[0].text, p) }];
                                            (l = $.merge(e.managerVariants[a][0][0], t)),
                                                (l = $.merge(l, e.managerVariants[a][0][1])),
                                                $.each(l, function (t, a) {
                                                    m.push(e.Replace(a.text, p));
                                                }),
                                                e.LoadListMessages(m, p.zodie);
                                        },
                                    });
                                }
                            });
                    }, 1e3);
                },
            });
    }
    var n = document.querySelector(".country_action").innerHTML,
        o = document.querySelector(".new_price_val").innerHTML,
        r = document.querySelector(".new_price_cur").innerHTML;
    console.log(o),
        console.log(r),
        (e.randomIntFromInterval = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e);
        }),
        (e.managerDialog = [
            {
                text:
                    "Hello! I am <b style='color: rgb(134, 144, 254);'>Master Hanz Cua</b>!<br><br>Line 1 " +
                    ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December".split(",")), monthA[p.getMonth()]) +
                    " A<br><br>A.",
            },
            { text: "are you male or female?", m: { text: "Male" }, w: { text: "Female" } },
            { text: "When were you born?" },
        ]),
        (e.userZodiak = [{ text: "B - <p>{zodie}</p>. <p class='hidden-zodie' style='display: none'>{zodie}</p>" }]),
        (e.managerVariants = {
            w: [
                [
                    [
                        {
                            text:
                                "B \"<b>{zodie}</b>\" B",
                        },
                        { text: "C" },
                        { text: "C" },
                        {
                            text:
                                "C" +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December".split(",")), monthA[p.getMonth()]) +
                                " C",
                        },
                        { text: "D \"<b>{zodie}</b>\" D" },
                    ],
                    [
                        { text: "<b>D</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "E" },
                        { text: "E" },
                        { text: "E" },
                        {text: " <br> <img width='200px' src='img/product.jpg'> </br> E "},
                        { text: "E?" },
                        { text: "E"},
                        {
                            text:
                                'F' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December".split(",")), monthA[p.getMonth()]) + ' G <b>' +
                                '1999' +
                                '</b> <b>' +
                                '฿' +
                                " only </b>",
                        },
                        {text: "E<br><br> "}
                    ],
                ],
            ],
            m: [
                [
                    [
                        {
                            text:
                                "F \"<b>{zodie}</b>\" F",
                        },
                        { text: "F" },
                        { text: "F" },
                        {
                            text:
                                "F" +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December".split(",")), monthA[p.getMonth()]) +
                                "F",
                        },
                        { text: "G \"<b>{zodie}</b>\" G" },
                    ],
                    [
                        { text: "<b>G 2566?</b>" },
                        /*{
                            text:
                                "Сразу хочу вас предупредить, что в вашей ситуации обычные заговоры не помогут. Тут нужно действовать наверняка и смотреть в корень проблемы. Простой заговор не сможет решить вашу проблему, а только ухудшит ситуацию.",
                        },*/

                        { text: "H" },
                        { text: "H" },
                        { text: "H" },
                        {text: " <br> <img width='200px' src='img/product.jpg'> </br> H "},
                        { text: "H" },
                        { text: "I"},
                        {
                            text:
                                'I ' + ( new Date().getDate() + 1 ) + ' ' +
                                ((d = new Date()), (p = new Date(d.getTime() - 0)), (monthA = "January, February, March, April, May, June, July, August, September, October, November, December".split(",")), monthA[p.getMonth()]) + ' I <b>' +
                                '1999' +
                                '</b> <b>' +
                                '฿' +
                                " only </b>",
                        },
                        {text: "I<br><br> "}
                    ],
                ],
            ],
        }),
        (e.socNumber = [
            {
                text:
                "J"
            },
        ]),
        (e.Forms = function (t) {
            e.FormsParams = {
                method: "POST",
                action: "",
                inputs: [
                    { name: "name", value: "", placeholder: "Enter your name", type: "text", required: !0 },
                    { name: "phone", value: "", placeholder: "Enter your phone", type: "tel", required: !0 },
                ],
                btn_text: "Order amulet",
                title: "Order form amulet by Rudy Baldwin",
            };
            return function () {
                document.getElementById("cont_form").style.display = "block";
            };
        }),
        (e.getZodiak = function (t) {
            console.log('test', t);
            var a = parseInt(t[0]);
            switch (a) {
                case 1948: case 1960: case 1972: case 1984: case 1996:
                    e.zodiak = 1;
                    break;
                case 1949: case 1961: case 1973: case 1985: case 1997:
                    e.zodiak = 2;
                    break;
                case 1950: case 1962: case 1974: case 1986: case 1998:
                    e.zodiak = 3;
                    break;
                case 1951: case 1963: case 1975: case 1987: case 1999: 
                    e.zodiak = 4;
                    break;
                case 1952: case 1964: case 1976: case 1988: case 2000: 
                    e.zodiak = 5;
                    break;
                case 1953: case 1965: case 1977: case 1989: case 2001: 
                    e.zodiak = 6;
                    break;
                case 1954: case 1966: case 1978: case 1990: case 1942: 
                    e.zodiak = 7;
                    break;
                case 1943: case 1955: case 1967: case 1979: case 1991: 
                    e.zodiak = 8;
                    break;
                case 1944: case 1956: case 1968: case 1980: case 1992:
                    e.zodiak = 9;
                    break;
                case 1945: case 1957: case 1969: case 1981: case 1993: 
                    e.zodiak = 10;
                    break;
                case 1946: case 1958: case 1970: case 1982: case 1994: 
                    e.zodiak = 11;
                    break;
                case 1947: case 1959: case 1971: case 1983: case 1995:
                    e.zodiak = 12;
            }
            return e.zodiak;
        }),
        (e.ZodiakName = [
                      {name: "Rat", id: 1},
                      {name: "Ox", id: 2},
                      {name: "Tiger", id: 3},
                      {name: "Rabbit", id: 4},
                      {name: "Dragon", id: 5},
                      {name: "Snake", id: 6},
                      {name: "Pig", id: 7},
                      {name: "Goat", id: 8},
                      {name: "Monkey", id: 9},
                      {name: "Rooster", id: 10},
                      {name: "Dog", id: 11},
                      {name: "Pig", id: 12},
        ]),
        (e.DateBirthday = [{ day: [1, 31], month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], year: [1943, 2001] }]),
        (e.MonthVariantType = ["january", "fabruary", "march", "april", "may", "june", "august", "august", "september", "october", "november", "december"]),
        (e.MonthVariant = {
            january: ["январь", "января", "январе"],
            fabruary: ["февраль", "февраля", "феврале"],
            march: ["март", "марта", "марте"],
            april: ["апрель", "апреля", "апреле"],
            may: ["май", "мая", "мае"],
            june: ["июнь", "июня", "июне"],
            july: ["июль", "июля", "июле"],
            august: ["август", "августа", "августе"],
            september: ["сентябрь", "сентября", "сентябре"],
            october: ["октябрь", "октября", "октебре"],
            november: ["ноябрь", "ноября", "ноябре"],
            december: ["декабрь", "декабря", "декабре"],
        }),
        (e.Scroll = function () {
            $(document).ready(function () {
                !(function (e, t = function () {}, a = []) {
                    (e = jQuery(e)), (t = t.bind(e));
                    var n = -1,
                        o = -1;
                    setInterval(function () {
                        (e.height() == n && e.width() == o) || ((n = e.height()), (o = e.width()), e.parent().animate({ scrollTop: n }, 50), t.apply(null, a));
                    }, 100);
                })(".chat-content-container .chat-content-list", function (e) {}, []);
            });
        }),
        (e.Replace = function (e, t) {
            var a = e;
            return (
                Object.entries(t).forEach((e) => {
                    var t = "{" + e[0] + "}",
                        n = new RegExp(t, "g");
                    a = a.replace(n, e[1]);
                }),
                a
            );
        }),
        (e.LoadListMessages = function (a, n) {
            var o,
                i = 1,
                r = 1,
                c = { 
                    showCursor: !1,
                };
            for (o = a.length; i < o + 1; i++)
                (c.onStringTyped = function () {
                    ++r < o + 1 && ((c.array_id = r), (c.strings = [a[r - 1]]), $(".chat-content-list").append(t("manager", r)), $(".chat-content-item.manager p.p" + r).typed(c), e.Scroll()),
                        r == o + 1 &&
                            setTimeout(function () {
                                $(".chat-content-list").append(e.Forms(n)), e.Scroll();
                            }, 1500); // 1500
                }),
                    1 == i && ((c.array_id = i), (c.strings = [a[i - 1]]), $(".chat-content-list").append(t("manager", i)), $(".chat-content-item.manager p.p" + i).typed(c), e.Scroll());
        }),
        $(window).on("load", function () {
            $(".chat-content-list").append(t("manager")),
                e.Scroll(),
                $(".chat-content-item.manager p").typed({
                    strings: [e.managerDialog[0].text],
                    showCursor: !1,
                    typeSpeed: 20,
                    callback: function () {
                        setTimeout(function () {
                            $(".chat-content-list").append(t("manager")),
                                e.Scroll(),
                                $(".chat-content-item.manager p").typed({
                                    strings: [e.managerDialog[1].text],
                                    showCursor: !1,
                                    callback: function () {
                                        setTimeout(function () {
                                            var t;
                                            e.Scroll(),
                                                $(".chat-content-list").append(
                                                    '<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="m">' +
                                                        (t = e.managerDialog[1]).m.text +
                                                        '</span></div><div class="chat-content-buttons-gender-block"><span class="chooseGender" data-type="w">' +
                                                        t.w.text +
                                                        "</span></div></div>"
                                                ),
                                                e.Scroll(),
                                                $(".chooseGender").on("click", function () {
                                                    a($(this).data("type"));
                                                });
                                        }, 100);
                                    },
                                });
                        }, 100);
                    },
                });
        });
});
