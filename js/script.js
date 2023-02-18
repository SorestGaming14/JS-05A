var info = {}

for (let num = 1; num < 11; num++) {
    // const element = info[i];
    var username = prompt('Введите имя пользователя')
    var agenum = +prompt('Введите возраст пользователя')
    var infoadd = info.user = 'Пользователь - ' + num
    var infoname = info.name = 'Имя - ' + username
    var infoage = info.age = 'Возраст - ' + agenum
    console.log(info);
}