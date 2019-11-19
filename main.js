//window.onload = function() {
//    let englishWrods = {
//        title: "hello word",
//    }
//    
//    window.onclick = function () {
//        for (let name in englishWrods) {
//            let element = document.querySelector('.' + name);
//            element.insertAdjacentHTML('afterbegin', englishWrods[name]);
//        }
//    }
//}

window.onload = function () {
    let stats = document.querySelectorAll('.block-stat__greenline');

    for (let i = 0; i < stats.length; i++) {
        let percent = +stats[i].textContent;
        if (percent > 5) {
            stats[i].style.width = (percent + 3) + '%';
        } else {
            stats[i].style.width = (6 + percent) + '%';
        }
    }

}
