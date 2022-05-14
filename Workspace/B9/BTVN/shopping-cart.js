'use strict';
/**
 * 1.Tạo giỏ hàng và CRUD với giỏ hàng đó
 */

let cart = ['tao', 'thit ga', 'dau tuong', 'thit bo', 'mi tom'];

// Hiển thị sản phẩm trong giỏ hàng
const displayCart = function () {
    console.log('Các sản phẩm trong giỏ hàng: ');
    for (const item of cart) {
        console.log(item);
    }
};

// Thêm sản phẩm vào giỏ hàng
const addItem = function (newItem) {
    cart.push(newItem);
};

// Xóa sản phẩm khỏi giỏ hàng
const removeItem = function (removedItem) {
    const removedCart = [];
    for (const item of cart) {
        if (item !== removedItem) {
            removedCart.push(item);
        }
    }
    cart = removedCart;
};

//  Test
displayCart();
addItem('thit lon');
displayCart();
removeItem('thit ga');
displayCart();