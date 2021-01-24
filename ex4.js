var readlineSync = require('readline-sync');
var KosherRest;
var KosherType = -1;
var indexType;

// ask count people
var PeopleNum = readlineSync.question('How many people are you going with?\n');
// check if the count is number
if (isNaN(PeopleNum) || PeopleNum <= 0 || PeopleNum.indexOf('.') != -1) {
    throw 'stop execution';
}
// ask if need to be kosher 
else {
    KosherRest = readlineSync.question('Should it be Kosher? (y/n)\n');
    if (!isNaN(KosherRest)) {
        throw 'stop execution';
    }
    // ask for type of kashrot
    else {
        if (KosherRest == 'y') {

            KosherType = readlineSync.question('Should it be Kashrut Lemehadrin? (y/n)\n');
            if (!isNaN(KosherType)) {

                throw 'stop execution';
            }
        }

        RestType = ['Italian', 'French', 'Israeli', 'Seafood', 'Fast Food'];
        indexType = readlineSync.keyInSelect(RestType, 'What kind of food do you want?');
    }
}

// Lemehadrin rest
if (KosherType == 'y') {

    if (PeopleNum > 5) {

        var options = ["alfredo-Em Hamoshavot Rd 94, Petah Tikva   ", " Le Bistrot Français -49, Nakhalat Binyamin, Tel Aviv 6516308 Israel",
                        "Lagoona- Ha-Banim St 2, Tiberias", " Oy Vey ✖ ✖ ✖ ✖ ✖", 'Habib Falafel -  8 Avizohar Street, Ramat Beit Hakerem neighborhood, Jerusalem '];
        console.log(options[indexType]);
    }
    else {

        var options = ["Biga-Kaplan 26, Tel Aviv Israel ", "le relais jaffa- 7 Bat Ami St, Tel Aviv Israel",
            "Pinato al haesh-Printing House 11 Givat Shaul  ", " Oy Vey  ✖ ✖ ✖ ✖ ✖", 'humus-eli-yahoo -Hayarkon 10, Bnei Brak'];
        console.log(options[indexType]);

    }
}
// regular kosher
else if (KosherRest == 'y') {
    if (PeopleNum > 5) {
        var options = ["Bocca Bocca-HaCarmel 40, Tel Aviv Israel", "Rendez Vous- Lilienblum 1 Neve Zedek Quarter, Tel Aviv 6514631 Israel",
            "West Side-Hayarkon 19 Tel-Aviv, Tel Aviv Israel ", "Oy Vey ", 'SABICH TSERNIKOVSKI-Tsernicovski No2, Tel Aviv Israel '];
        console.log(options[indexType]);
    }
    else {
        var options = ["Pankina Italian Restaurant and Wine Bar-39 Gordon Street Corner of Dizengoff Street, Tel Aviv Israel ", "Carmen-22 Lilienblum Street, Tel Aviv Israel",
            "nomi -12 Kaufman St., Tel Aviv 68012 Israel ", "Oy Vey", 'SABICH TSERNIKOVSKI-Tsernicovski No2, Tel Aviv Israel'];
        console.log(options[indexType]);

    }
}
//no kosher
else {
    if (PeopleNum > 5) {
        var options = ["Cicchetti-Yehuda Halevi 58, Tel Aviv 43000 Israel ", "Dizengoff Cafe-190 Diezengoff, Tel Aviv 6346229 Israel",
            "Ahuva BaShuk-Rehov Rabbi Pinhas 13, Tel Aviv Israel ", "Yulia TLV- Hangar 2, Tel Aviv Port, Tel Aviv 6350631 Israel ", 'Sabich Oved- 7 Sirkin, Givatayim 5329410 Israel'];
        console.log(options[indexType]);

    }
    else {
        var options = ["Cafe CUCU-Rehov Dizengoff 83 CUCU Hotel, Tel Aviv 6433257 Israel ", "Brasserie M&R -70 Ibn Gabirol Rabin Square, Tel Aviv 6495206 Israel",
            "Ahuva BaShuk-Rehov Rabbi Pinhas 13, Tel Aviv Israel", "Shtsupak-256 Ben Yehuda, Tel Aviv 6350112 Israel", 'Sabich Oved- 7 Sirkin, Givatayim 5329410 Israel'];
        console.log(options[indexType]);

    }

}

