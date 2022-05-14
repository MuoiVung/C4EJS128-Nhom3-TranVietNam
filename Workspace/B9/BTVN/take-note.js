'use strict';
/**
 * 2.Tạo ghi chú
 */

const notes = {
    note1: 'hello, how are you?'
};

// Đọc ghi chú
const readNote = function () {
    const noteKeys = Object.keys(notes);
    const noteName = prompt(`Danh sách ghi chú:\n${noteKeys.join('\n')}\nNhập tên ghi chú muốn đọc: `);
    notes[noteName] !== undefined ? alert(noteName + '\n' + notes[noteName]) : alert(`Ghi chú ${noteName} không tồn tại!`);;
};

// Thêm mới ghi chú
const addNote = function () {

    let noteName = prompt('Nhập tên ghi chú: ');
    let isValid = !notes.hasOwnProperty(noteName);
    while (!isValid) {
        noteName += '-copy';
        isValid = !notes.hasOwnProperty(noteName);
    }
    // do {
    //     isValid = !notes.hasOwnProperty(noteName);
    //     if (notes.hasOwnProperty(noteName)) {
    //         alert('Tên ghi chú đã bị trùng, vui lòng nhập tên khác!');
    //     }
    // }
    // while (!isValid);

    const noteContent = prompt('Nhập nội dung ghi chú: ');
    notes[noteName] = noteContent;
    alert(`Thêm ghi chú ${noteName} thành công!`);
};

// Xóa ghi chú
const removeNote = function () {
    const noteName = prompt('Nhập tên ghi chú muốn xóa: ');
    if (notes.hasOwnProperty(noteName)) {
        delete notes[noteName];
        alert(`Xóa ghi chú ${noteName} thành công!`);
    }
    else {
        alert(`Ghi chú ${noteName} không tồn tại!`);
    }
};

// Sửa ghi chú
const reviseNote = function () {
    const noteName = prompt('Nhập tên ghi chú muốn sửa: ');
    if (notes.hasOwnProperty(noteName)) {
        const newContent = prompt('Nhập nội dung mới cho ghi chú: ');
        notes[noteName] = newContent;
    }
    else {
        alert(`Ghi chú ${noteName} không tồn tại!`);
    }
};

const app = function () {
    let running = true;
    do {
        const opt = parseInt(
            prompt(
                'Vui lòng chọn chức năng tương ứng:'
                + '\nNhập 1: đọc ghi chú\nNhập 2: thêm ghi chú '
                + '\nNhập 3: xóa ghi chú \nNhập 4: sửa ghi chú '
                + '\nNhập 0: thoát chương trình'
            )
        );
        switch (opt) {
            case 0:
                running = false;
                alert('Đã thoát chương trình!');
                break;
            case 1:
                readNote();
                break;
            case 2:
                addNote();
                break;
            case 3:
                removeNote();
                break;
            case 4:
                reviseNote();
                break;
            default:
                alert('Vui lòng nhập đúng chức năng!');
        }
    }
    while (running);
};

app();



