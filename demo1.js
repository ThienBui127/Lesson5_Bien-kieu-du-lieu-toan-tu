function tinhDiem3Mon() {
    let diemToan = Number(prompt("Nhập điểm toán")); //let: khai báo biến
    let diemVan = 9;//const: khai báo hằng
    let diemAnh = 6;
    
    console.log(typeof diemAnh)
    let tongDiem = 2 * (diemToan + diemVan) + diemAnh;

    if(tongDiem >= 30){
        alert("Đỗ rồi");
    }else{
        alert("Trượt rồi");
    }
}

tinhDiem3Mon();