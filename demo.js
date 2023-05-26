function tinhDiem3Mon() {
    let diemToan = +prompt("Nhập điểm toán"); // let: khai báo biến
    
    // diemToan = parseInt(diemToan);
    // diemToan = parseFloat(diemToan);
    // diemToan = Number(diemToan);

    let diemVan = 9; // const: khai báo hằng
    let diemAnh = 5;

    let tongDiem = 2 * (diemToan + diemVan) + diemAnh;
    // let tongDiem = 2 * ("2" + 9) + 5;
    // 2 * "29" + 5

    if(tongDiem >= 30){
        alert("Đỗ rồi");
    }else{
        alert("Trượt rồi");
    }
}

tinhDiem3Mon();
