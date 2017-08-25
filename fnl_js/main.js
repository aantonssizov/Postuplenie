"use strict";

var vuz = [{
    name: "Государственный Университет Телекоммуникаций",
    own: "государственный",
    budget: "yes",
    minPrice: 6500,
    maxPrice: 16900,
    pos: {
        lat: 50.428711,
        lng: 30.476046
    },
    href: "http://www.dut.edu.ua/",
    specialnost: ["Телекоммуникационные системы и сети", "Информационно-коммуникационные технологии", "Мобильные телекоммуникации и системы цифрового телевидения", "Энергосберегающие технологии в телекоммуникациях", "Волоконно-оптические системы передачи", "Спутниковые телекоммуникации и навигационные системы", "Инженерия программного обеспечения", "Компьютерная инженерия", "Компьютерные науки", "Информационные системы и технологии", "Системный анализ", "Безопасность информационных и коммуникационных систем", "Системы технической защиты информации", "Управление информационной безопасностью", "Документоведение и информационная деятельность", "Информационная аналитика и связи с общественностью", "Социология", "Менеджмент", "Управление инновационной деятельностью", "Публичное управление и администрирование"]
}, {
    name: "Киевская Академия парикмахерского искуства",
    own: "частный",
    budget: "don't",
    minPrice: 8900,
    maxPrice: 13600,
    pos: {
        lat: 50.447224,
        lng: 30.431467
    },
    href: "http://kapi.com.ua/",
    specialnost: ["дизайн причёски и макияжа", "дизайн стиля и визажа", "дизайн одежды", "Парикмахер (парикмахер-модельер)", "Визажист-стилист", "бакалавр с дизайна причёски и макияжа", "специалист парикмахерского исскуства и декоративной косметики", "Парикмахер широкого профиля", "Визажист", "Стилист", "Мастер ногтевого сервиса", "Наращивание бровей", "Курсы повышения квалификации парикхмахеров"]
}, {
    name: "Университет экономики и права \"КРОК\"",
    own: "частный",
    budget: "don't",
    minPrice: 7000,
    maxPrice: 25000,
    pos: {
        lat: 50.461129,
        lng: 30.428179
    },
    href: "http://www.krok.edu.ua/ua/",
    specialnost: ["Туристичная деятельность", "Отельный бизнес", "Юридическая психология", "Организационная психология", "Право", "Компьютерная сеть", "Мобильные информационные технологии", "Компьютерная графика и дизайн", "Информационно-аналитическая деятельность в международных отношениях", "Международноя торговая деятельность", "Экспортноориентированный бизнес (английский язык преподование)", "Международный бизнес (русский язык преподование)", "Экономика предпринимательства", "Управление предпринимательскими структурами на рынке недвижимости", "Предпринимательство, сервис и мода", "Цифровая экономика", "Брендинг, продвижение и продажа продукции", "Маркетинговые исследования и политика", "Учёт, аудит и налогооблажение бизнеса", "Финансовая безопасность бизнеса", "Банковский бизнес и страхование", "Ломбардное дело", "Комерционная логистика"]
}];

for (var i = 0; i < vuz.length; i++) {
    for (var j = 0; j < vuz[i].specialnost.length; j++) {
        document.getElementById("spec").innerHTML += "<option value=\"" + vuz[i].specialnost[j] + "\">" + vuz[i].specialnost[j] + "</option>";
    }
}

function rezult() {
    var rez = document.querySelector("#spec").value;
    var state = document.querySelector('.filters__state').checked ? document.querySelector('.filters__state').value = "государственный" : document.querySelector('.filters__state').value = "-";
    var _private = document.querySelector('.filters__private').checked ? document.querySelector('.filters__private').value = "частный" : document.querySelector('.filters__private').value = "-";
    var budget = document.querySelectorAll('.filters__budget');
    if (budget[0].checked) {
        budget = budget[0].value;
    } else if (budget[1].checked) {
        budget = budget[1].value;
    } else if (budget[2].checked) {
        budget = budget[2].value;
    } else {
        budget = "-";
    }

    var minPrice = +document.querySelector(".rezmin").value;
    var maxPrice = +document.querySelector(".rezmax").value;

    console.log(minPrice + " " + maxPrice);
    var count = 0;
    if (rez == "ERROR: Вы не выбрали профессию") {
        alert(rez);
    } else {

        if (state === "-" && _private === "-" && (budget === "Dos no matter" || budget === "-") && minPrice === 0 && maxPrice === 25000) {
            for (var _i = 0; _i < vuz.length; _i++) {
                for (var _j = 0; _j < vuz[_i].specialnost.length; _j++) {
                    if (_i % 1 === 0) {
                        if (rez === vuz[_i].specialnost[_j]) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i].name + "<a href=\"" + vuz[_i].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i].pos.lat + "," + vuz[_i].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[_i].specialnost[_j]) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i].name + "<a href=\"" + vuz[_i].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i].pos.lat + "," + vuz[_i].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }
                }
            }
        } else if (_private !== "-" && state !== "-") {
            for (var _i2 = 0; _i2 < vuz.length; _i2++) {
                for (var _j2 = 0; _j2 < vuz[_i2].specialnost.length; _j2++) {
                    if (_i2 % 1 === 0) {
                        if (rez === vuz[_i2].specialnost[_j2] && (state === vuz[_i2].own || _private === vuz[_i2].own)) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i2].name + "<a href=\"" + vuz[_i2].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i2].pos.lat + "," + vuz[_i2].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[_i2].specialnost[_j2] && (state === vuz[_i2].own || _private === vuz[_i2].own)) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i2].name + "<a href=\"" + vuz[_i2].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i2].pos.lat + "," + vuz[_i2].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }
                }
            }
        } else if (_private !== "-") {
            for (var _i3 = 0; _i3 < vuz.length; _i3++) {
                for (var _j3 = 0; _j3 < vuz[_i3].specialnost.length; _j3++) {
                    if (_i3 % 1 === 0) {
                        if (rez === vuz[_i3].specialnost[_j3] && _private === vuz[_i3].own) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i3].name + "<a href=\"" + vuz[_i3].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i3].pos.lat + "," + vuz[_i3].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[_i3].specialnost[_j3] && _private === vuz[_i3].own) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i3].name + "<a href=\"" + vuz[_i3].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i3].pos.lat + "," + vuz[_i3].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }
                }
            }
        } else if (state !== "-") {
            for (var _i4 = 0; _i4 < vuz.length; _i4++) {
                for (var _j4 = 0; _j4 < vuz[_i4].specialnost.length; _j4++) {
                    if (_i4 % 1 === 0) {
                        if (rez === vuz[_i4].specialnost[_j4] && state === vuz[_i4].own) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i4].name + "<a href=\"" + vuz[_i4].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i4].pos.lat + "," + vuz[_i4].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[_i4].specialnost[_j4] && state === vuz[_i4].own) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i4].name + "<a href=\"" + vuz[_i4].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i4].pos.lat + "," + vuz[_i4].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }
                }
            }
        } else if (budget === "yes" || budget === "don't") {
            for (var _i5 = 0; _i5 < vuz.length; _i5++) {
                for (var _j5 = 0; _j5 < vuz[_i5].specialnost.length; _j5++) {
                    if (_i5 % 1 === 0) {
                        if (rez === vuz[_i5].specialnost[_j5] && budget === vuz[_i5].budget) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i5].name + "<a href=\"" + vuz[_i5].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i5].pos.lat + "," + vuz[_i5].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[_i5].specialnost[_j5] && budget === vuz[_i5].budget) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i5].name + "<a href=\"" + vuz[_i5].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i5].pos.lat + "," + vuz[_i5].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }
                }
            }
        } else if (minPrice >= 0 && (maxPrice === 25000 || maxPrice <= 25000) || minPrice >= 0 || maxPrice === 25000 || maxPrice <= 25000) {
            for (var _i6 = 0; _i6 < vuz.length; _i6++) {
                for (var _j6 = 0; _j6 < vuz[_i6].specialnost.length; _j6++) {
                    if (_i6 % 1 === 0) {
                        if (rez === vuz[_i6].specialnost[_j6] && minPrice >= vuz[_i6].minPrice && maxPrice <= vuz[_i6].maxPrice || rez === vuz[_i6].specialnost[_j6] && minPrice >= vuz[_i6].minPrice) {
                            document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i6].name + "<a href=\"" + vuz[_i6].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                            document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i6].pos.lat + "," + vuz[_i6].pos.lng + "&zoom=13\"></iframe>";
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        } else {
                            if (rez === vuz[_i6].specialnost[_j6] && minPrice >= vuz[_i6].minPrice && maxPrice <= vuz[_i6].maxPrice || rez === vuz[_i6].specialnost[_j6] && minPrice >= vuz[_i6].minPrice) {
                                document.querySelector(".content__rezult").innerHTML = "<li>" + vuz[_i6].name + "<a href=\"" + vuz[_i6].href + "\" target=\"_blanck\"><br>(\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442 \u0423\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0417\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F)</a></li>";
                                document.querySelector(".content__map").innerHTML = "<iframe class=\"content__map__iframe\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=" + vuz[_i6].pos.lat + "," + vuz[_i6].pos.lng + "&zoom=13\"></iframe>";
                                document.querySelector(".content__map").classList.add("content__map_style");
                                count++;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(count);
    if (count == 0) {
        console.log(count);
        alert("Нету таких мест обучения");
    }
}