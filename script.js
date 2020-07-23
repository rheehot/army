const ENLISTMENT_AT = 1598850000000
const DISCHARGED_AT = 1651294800000

function convertDayFromEnlistmentAndDischargeDate() {
    const now = Math.round(new Date().getTime())

    return ENLISTMENT_AT < now;
}

function buildDateCount() {
    const now = Math.round(new Date().getTime())

    let time
    if (ENLISTMENT_AT >= now) time = ENLISTMENT_AT
    else time = DISCHARGED_AT
    time -= now

    const DAYS = Math.floor(time / (1000 * 60 * 60 * 24));
    const HOURS = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const MINUTES = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const SECONDS = Math.floor((time % (1000 * 60)) / 1000);

    return `${DAYS}일 ${HOURS}시간 ${MINUTES}분 ${SECONDS}초`;
}

window.addEventListener("load", () => {
    setInterval(()=> {
        let army = convertDayFromEnlistmentAndDischargeDate()
        document.querySelector('h1').innerText = buildDateCount()
        document.querySelector('h2').innerText = (army ? '전역까지' : '입대까지')
    }, 1000)
  }
);
