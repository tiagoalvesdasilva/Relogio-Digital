function time () {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+ m+':'+s;

    document.querySelector('.relogio').innerHTML = txt;
}
let timer = setInterval(time, 1000);