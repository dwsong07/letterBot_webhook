const { getMoonIllumination } = require("suncalc");

const LUNAR_MONTH = 29.530589;

const { phase } = getMoonIllumination(new Date());
const age = phase * LUNAR_MONTH;

exports.phase = () => {
    if (age < 1.84566) {
        return "π μ­";
    } else if (age < 5.53699) {
        return "π μ΄μΉλ¬";
    } else if (age < 9.22831) {
        return "π μνλ¬";
    } else if (age < 12.91963) {
        return "π μ°¨κ°λ λ¬";
    } else if (age < 16.61096) {
        return "π λ³΄λ¦λ¬";
    } else if (age < 20.30228) {
        return "π κΈ°μΈμ΄κ°λ λ¬";
    } else if (age < 23.99361) {
        return "π ννλ¬";
    } else if (age < 27.68493) {
        return "π κ·Έλ―λ¬";
    }
};

exports.age = age;
