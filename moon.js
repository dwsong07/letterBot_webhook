const { getMoonIllumination } = require("suncalc");

const LUNAR_MONTH = 29.530589;

const { phase } = getMoonIllumination(new Date());
const age = phase * LUNAR_MONTH;

exports.phase = () => {
    if (age < 1.84566) {
        return "🌑 삭";
    } else if (age < 5.53699) {
        return "🌘 초승달";
    } else if (age < 9.22831) {
        return "🌗 상현달";
    } else if (age < 12.91963) {
        return "🌖 차가는 달";
    } else if (age < 16.61096) {
        return "🌕 보름달";
    } else if (age < 20.30228) {
        return "🌔 기울어가는 달";
    } else if (age < 23.99361) {
        return "🌓 하현달";
    } else if (age < 27.68493) {
        return "🌒 그믐달";
    }
};

exports.age = age;
