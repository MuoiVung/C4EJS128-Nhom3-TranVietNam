
const computer = {
    a: 20,
    b: 30,

    log: function (d, e) {
        console.log('computer - log: ', this.a, this.b, d, e);
    },
    inform: () => {
        console.log('computer - NOTI: ', this.a, this.b);
    }
};

const laptop = {
    a: 0.1,
    b: 0.2,
};

let laptopLog = computer.log.bind(laptop);
// laptopLog();

computer.log.call(laptop, 'ha', 'he');

