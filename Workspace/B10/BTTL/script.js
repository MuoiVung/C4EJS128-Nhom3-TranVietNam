// BT: tạo hàm tính tổng số tiền đã chi tiêu, các tham số tổng số tiền và số tiền đã tiêu
console.log(pow(4, 2));

const danhSachChiTieu = {
    tienAn: 1500,
    tienNha: 2700,
    tienDiChoi: 3200,
};

// Tính tổng
const calcSum = function () {
    let tong = 0;
    for (const tien of Object.values(danhSachChiTieu)) {
        tong += tien;
    }
    alert('Số tiền đã tiêu: ' + tong);
};

// Thêm chi tiêu
const themChiTieu = function () {
    const tenChiTieu = prompt('Vui lòng nhập tên chi tiêu: ');
    while (danhSachChiTieu.hasOwnProperty(tenChiTieu)) {
        tenChiTieu += '-copy';
    }
    const soTienTieu = parseFloat(prompt('Vui lòng nhập số tiền đã tiêu: '));
    danhSachChiTieu[tenChiTieu] = soTienTieu;
    alert('Đã thêm chi tiêu thành công!');
};

const app = function () {
    let running = true;
    do {
        const opt = parseInt(prompt('Vui lòng chọn chức năng:\nNhập 1: thêm chi tiêu\nNhập 2: tính tổng và hiển thị tổng\nNhập 0: thoát chương trình'));
        switch (opt) {
            case 0:
                running = false;
                alert('Đã thoát chương trình!');
                break;
            case 1:
                themChiTieu();
                break;
            case 2:
                calcSum();
                break;
            default:
                alert('Không tồn tại chức năng này');
                break;
        }
    }
    while (running);
};

app();

// BT: Viết một hàm pow (x, n) trả về x theo lũy thừa n. Hay nói cách khác, nhân x với chính nó n lần và trả về kết quả.
const pow = function (x, n) {
    let xInit = x;
    for (let i = 1; i < n; i++) {
        x *= xInit;
    }
    return x;
};
