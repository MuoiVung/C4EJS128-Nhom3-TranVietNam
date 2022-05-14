'use strict';

const staff1 = {
    id: '1',
    firstName: 'Nguyen',
    lastName: 'Tran',
    age: 35,
    role: 'Manager',
    salary: 10000,
    active: true,
    email: 'NguyenTran@gmail.com',
    address: 'so 112 - ngo A - xa B',
    phone: '12046547'
};

const staff2 = {
    id: '2',
    firstName: 'Long',
    lastName: 'Dang',
    age: 45,
    role: 'Director',
    salary: 5999,
    active: true,
    email: 'NguyenTran@gmail.com',
    address: 'so 112 - ngo A - xa B',
    phone: '12046547'
};

const staff3 = {
    id: '3',
    firstName: 'Vu',
    lastName: 'Dong',
    age: 27,
    role: 'Staff',
    salary: 1000,
    active: true,
    email: 'NguyenTran@gmail.com',
    address: 'so 112 - ngo A - xa B',
    phone: '12046547'
};

const staffs = [staff1, staff2, staff3];

// Kiểm tra id của nhân viên
const checkId = function (foundId) {
    let foundStaff = undefined;
    for (const staff of staffs) {
        if (staff.id === foundId) {
            foundStaff = staff;
            break;
        }
    }
    if (!foundStaff) {
        alert(`Nhân viên có id: ${foundId} không tồn tại!`);
    }
    return foundStaff;
};

// Đọc thông tin nhân viên
const readStaffInfo = function () {
    const foundId = prompt('Nhập id của nhân viên: ');
    let foundStaff = checkId(foundId);
    if (foundStaff) {
        alert(JSON.stringify(foundStaff).replace(/,/g, '\n'));
    }
};

// Thêm thông tin nhân viên
const addStaffInfo = function () {
    const foundId = prompt('Nhập id của nhân viên muốn thêm thông tin: ');
    let foundStaff = checkId(foundId);
    if (foundStaff) {
        const inforName = prompt('Nhập tên thông tin: ');
        if (foundStaff.hasOwnProperty(inforName)) {
            alert('Thông tin này đã tồn tại!\nNếu muốn sửa thông tin, vui lòng chọn sửa!');
        }
        else {
            const inforContent = prompt('Nhập nội dung của thông tin: ');
            foundStaff[inforName] = inforContent;
            alert('Đã thêm thông tin mới thành công!');
        }
    }
};

// Xóa thông tin nhân viên
const removeStaffInfo = function () {
    const foundId = prompt('Nhập id của nhân viên muốn xóa thông tin: ');
    let foundStaff = checkId(foundId);
    if (foundStaff) {
        const inforName = prompt('Nhập tên thông tin muốn xóa: ');
        if (foundStaff.hasOwnProperty(inforName)) {
            delete foundStaff[inforName];
            alert('Đã xóa thành công!');
        }
        else {
            alert('Thông tin này không tồn tại!\nXóa thất bại!');
        }
    }
};

// Sửa thông tin nhân viên
const reviseStaffInfo = function () {
    const foundId = prompt('Nhập id của nhân viên muốn sửa thông tin: ');
    let foundStaff = checkId(foundId);
    if (foundStaff) {
        const inforName = prompt('Nhập tên thông tin: ');
        if (foundStaff.hasOwnProperty(inforName)) {
            const inforContent = prompt('Nhập nội dung mới: ');
            foundStaff[inforName] = inforContent;
            alert('Đã sửa thành công!');
        }
        else {
            alert('Thông tin này không tồn tại!\nSửa thất bại!');
        }
    }
};

// App
const app = function () {
    let running = true;
    do {
        const opt = parseInt(
            prompt(
                'Vui lòng chọn chức năng tương ứng:'
                + '\nNhập 1: đọc thông tin nhân viên\nNhập 2: thêm thông tin cho nhân viên'
                + '\nNhập 3: xóa thông tin nhân viên\nNhập 4: sửa thông tin nhân viên '
                + '\nNhập 0: thoát chương trình'
            )
        );
        switch (opt) {
            case 0:
                running = false;
                alert('Đã thoát chương trình!');
                break;
            case 1:
                readStaffInfo();
                break;
            case 2:
                addStaffInfo();
                break;
            case 3:
                removeStaffInfo();
                break;
            case 4:
                reviseStaffInfo();
                break;
            default:
                alert('Vui lòng nhập đúng chức năng!');
        }
    }
    while (running);
};

app();


