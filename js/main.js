let vuz = [{
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
    },
    {
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
    },
    {
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
    }
];

for (let i = 0; i < vuz.length; i++) {
    for (let j = 0; j < vuz[i].specialnost.length; j++) {
        document.getElementById("spec").innerHTML += `<option value="${vuz[i].specialnost[j]}">${vuz[i].specialnost[j]}</option>`;
    }
}

function rezult() {
    let rez = document.querySelector("#spec").value;
    let state = (document.querySelector('.filters__state').checked) ? document.querySelector('.filters__state').value = "государственный" : document.querySelector('.filters__state').value = "-";
    let _private = (document.querySelector('.filters__private').checked) ? document.querySelector('.filters__private').value = "частный" : document.querySelector('.filters__private').value = "-";
    let budget = document.querySelectorAll('.filters__budget');
    if (budget[0].checked) {
        budget = budget[0].value;
    } else if (budget[1].checked) {
        budget = budget[1].value;
    } else if (budget[2].checked) {
        budget = budget[2].value;
    } else {
        budget = "-";
    }

    let minPrice = +document.querySelector(".rezmin").value;
    let maxPrice = +document.querySelector(".rezmax").value;

    console.log(minPrice + " " + maxPrice);
    let count = 0;
    if (rez == "ERROR: Вы не выбрали профессию") {
        alert(rez);
    } else {

        if (state === "-" && _private === "-" && (budget === "Dos no matter" || budget === "-") && (minPrice === 0 && maxPrice === 25000)) {
            for (let i = 0; i < vuz.length; i++) {
                for (let j = 0; j < vuz[i].specialnost.length; j++) {
                    if (i % 1 === 0) {
                        if (rez === vuz[i].specialnost[j]) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[i].specialnost[j]) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }

                    }
                }
            }
        } else if (_private !== "-" && state !== "-") {
            for (let i = 0; i < vuz.length; i++) {
                for (let j = 0; j < vuz[i].specialnost.length; j++) {
                    if (i % 1 === 0) {
                        if (rez === vuz[i].specialnost[j] && (state === vuz[i].own || _private === vuz[i].own)) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[i].specialnost[j] && (state === vuz[i].own || _private === vuz[i].own)) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }

                }
            }
        } else if (_private !== "-") {
            for (let i = 0; i < vuz.length; i++) {
                for (let j = 0; j < vuz[i].specialnost.length; j++) {
                    if (i % 1 === 0) {
                        if (rez === vuz[i].specialnost[j] && _private === vuz[i].own) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[i].specialnost[j] && _private === vuz[i].own) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }

                }
            }
        } else if (state !== "-") {
            for (let i = 0; i < vuz.length; i++) {
                for (let j = 0; j < vuz[i].specialnost.length; j++) {
                    if (i % 1 === 0) {
                        if (rez === vuz[i].specialnost[j] && state === vuz[i].own) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[i].specialnost[j] && state === vuz[i].own) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }

                }
            }
        } else if (budget === "yes" || budget === "don't") {
            for (let i = 0; i < vuz.length; i++) {
                for (let j = 0; j < vuz[i].specialnost.length; j++) {
                    if (i % 1 === 0) {
                        if (rez === vuz[i].specialnost[j] && budget === vuz[i].budget) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    } else {
                        if (rez === vuz[i].specialnost[j] && budget === vuz[i].budget) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        }
                    }

                }
            }
        } else if ((minPrice >= 0 && (maxPrice === 25000 || maxPrice <= 25000) || minPrice >= 0 || (maxPrice === 25000 || maxPrice <= 25000))) {
            for (let i = 0; i < vuz.length; i++) {
                for (let j = 0; j < vuz[i].specialnost.length; j++) {
                    if (i % 1 === 0) {
                        if ((rez === vuz[i].specialnost[j] && (minPrice >= vuz[i].minPrice && maxPrice <= vuz[i].maxPrice)) || (rez === vuz[i].specialnost[j] && minPrice >= vuz[i].minPrice)) {
                            document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                            document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
                            document.querySelector(".content__map").classList.add("content__map_style");
                            count++;
                        } else {
                            if ((rez === vuz[i].specialnost[j] && (minPrice >= vuz[i].minPrice && maxPrice <= vuz[i].maxPrice)) || (rez === vuz[i].specialnost[j] && minPrice >= vuz[i].minPrice)) {
                                document.querySelector(".content__rezult").innerHTML = `<li>${vuz[i].name}<a href="${vuz[i].href}" target="_blanck"><br>(Перейти на сайт Учебного Заведения)</a></li>`;
                                document.querySelector(".content__map").innerHTML = `<iframe class="content__map__iframe" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtEUivAyVAwTAW2zMC9IsdJbIlV72NDko&q=${vuz[i].pos.lat},${vuz[i].pos.lng}&zoom=13"></iframe>`;
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