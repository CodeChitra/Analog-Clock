setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    console.log(htime)
    // console.log(mtime)
    // console.log(stime)
    let hrotation = 30 * htime + mtime / 2 + stime / 120;
    let mrotation = 6 * mtime + stime / 10;
    let srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Black - Hour
// Green - Minute
// Red - Seconds