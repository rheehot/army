const ENLISTMENT_AT = 1598850000000
const DISCHARGED_AT = 1651294800000
const SMILE_AND_PEOPLE = ["😀","😃","😄","😁","😆","☺️","😊","😇","🙂","🙃","😉","😌","😍","😘","😗","😙","😚","😻","😼","😽","👨‍💻","👩‍⚕","👨‍⚕"]

function hasDayFromEnlistmentAndDischargeDate() {
    const now = Math.round(new Date().getTime())

    return ENLISTMENT_AT < now;
}

function buildDateCount(army) {
    const now = Math.round(new Date().getTime())

    let time
    if (ENLISTMENT_AT >= now) time = ENLISTMENT_AT
    else time = DISCHARGED_AT
    time -= now

    const DAYS = Math.floor(time / (1000 * 60 * 60 * 24));
    const HOURS = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const MINUTES = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const SECONDS = Math.floor((time % (1000 * 60)) / 1000);

    let RANDOM_EMOJI = SMILE_AND_PEOPLE[Math.floor(Math.random() * SMILE_AND_PEOPLE.length)];
    return `${RANDOM_EMOJI} ${DAYS}일 ${HOURS}시간 ${MINUTES}분`
        + (army ? `${SECONDS}초` : '');
}

window.addEventListener("load", () => {
    setInterval(()=> {
        let army = hasDayFromEnlistmentAndDischargeDate()
        document.querySelector('h1').innerText = buildDateCount(army)
        document.querySelector('h2').innerText = '민근이의 ' + (army ? '전역까지' : '입대까지')
    }, 1000)
  }
);
