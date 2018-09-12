var bmxConfPNP = {
    appear: {
        "status":"1",//нужно ли отрисовывать попап

        "postiton": 'top_left',//положение на стр. top_right/bottom_left/bottom_right
        "onlyurl_val": 'https:\/\/4team.myshopify.com\/search?q=wsa',//а каком адресе показывать
        "onlyurl_val_h":"",//на каком адресе убирать

        "all_with_val":"sweatshirt,jeans",//показывать на страницах, в которых есть одно из этих слов
        "all_with_val_h":"",//скрывать на страницах, на которых есть одно из этих слов
        "pages_hide":"none",
        "pages":"all_with",
        "device":"all",//на каких устройствах показывать all/desctop/mobile

        //конфиг из animate.css
        "animate":"bounce",//название анимации
        "animate_infinite":"on",//бесконечная анимация. пустая строка если 1 раз показывать
        "animate_speed":"2",//скорость анимации
        "animate_loop_delay":"2",//задержка между повторами

        //опции повторного показа
        "re_show": "all",//оказывать ли после смены страницы. варианты: all/exept/none
        /**
         * all - показывать заново все попапы не смотря на действия пользователей
         * exept - показывать все попапы кроме того, который пользователь закрыл
         * none - не показывать ни один попап после того, пользователь закрыл хотя бы один
         */
        "show_list": "all",//количество попапов, которые нужно показывать на одной странице.
        /**
         * all - ыводить весь список попапов
         * 1,2, 3
         */
        "show_delay": '3'//задержка перед показом попапов
    },
    popaps: [
        {
            "opacity":"0.7",//прозрачность попапа
            "background_color":"#000000",
            "text_color":"#5c3131",//цвет онсновного текста
            "title_text_color":"#ff0d0d",//цвет заголовка
            "font_size":"35",
            "bar_padding":"22",//отступы от внешней границы бара
            "bar_showhide":"0",
            "font":"Open_Sans",
            "img":"https:/\/cdn.shopify.com\/s\/files\/1\/0002\/3900\/9803\/t\/1\/assets\/snow.jpg"//картинка
        },
        {
            "opacity":"1",
            "background_color":"#000000",
            "text_color":"#5c3131",
            "title_text_color":"#ff0d0d",
            "font_size":"35",
            "bar_padding":"22",
            "bar_showhide":"0",
            "font":"Open_Sans",
            "img":"https:/\/cdn.shopify.com\/s\/files\/1\/0002\/3900\/9803\/t\/1\/assets\/snow.jpg"
        }
    ]
};
var bmxJq;

//добавленние jquery на стр
if ("undefined" == typeof jQuery) {
    var headTag = document.getElementsByTagName("head")[0],
        jqTag = document.createElement("script");
    jqTag.type = "text/javascript",
        jqTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",
        jqTag.onload = initPNP,
        headTag.appendChild(jqTag)
} else setTimeout(initPNP, 100);

/**
 * метода для определения с какого типа устройств зашел юзер
 */
function is_mobile() {
    var s = !1;
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (s = !0), s
}

/**
 * Чтение из cookie
 * @param el
 * @returns {*}
 */
function readStorageData(el) {

}

/**
 * запись в cookie
 * @param el
 * @param val
 */
function writeStorageData(el, val) {

}

/**
 * Загрузка шрифта
 * @param font_name
 */
function load_font(font_name) {
    var font = barData.font.replace(/\s/g, "+");
    font = font.replace(/\_/g, '+');
    var s = document.createElement("link"), e = document.getElementsByTagName("head")[0];
    s.setAttribute("href", "https://fonts.googleapis.com/css?family=" + font),
        s.setAttribute("type", "text/css"),
        s.setAttribute("rel", "stylesheet"),
        e.insertBefore(s, e.firstChild)
}

/**
 * загрузка animate.css
 * @returns {number}
 */
function injectAnimate () {
    if (barData.animate !== 'none') {
        for (var s = document.getElementsByTagName("link"), e = 0; e < s.length; e++) {
            if (s[e].href.indexOf('animate.min.css') > -1) {
                return e;
            }
        }

        var s = document.createElement("link"), e = document.getElementsByTagName("head")[0];
        s.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"),
            s.setAttribute("type", "text/css"),
            s.setAttribute("rel", "stylesheet"),
            e.insertBefore(s, e.firstChild);
    }
}

function initPNP () {
    bmxJq = jQuery.noConflict();
    //todo do it
}