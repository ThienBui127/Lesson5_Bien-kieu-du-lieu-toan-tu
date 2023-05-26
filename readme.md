Nhập vào điểm thi 3 môn Toán,Văn,Anh. Hiển thị ra xem học sinh có đỗ vào Cấp 3 hay không (Biết điểm chuẩn là 30)

Biến - Đại diện - địa chỉ ô nhớ chứa dữ liệu

let a = 7, let b = 6, let c = 8,

let d = a + b + c; (sẽ lưu vào 1 ô nhớ trên bộ nhớ và biến d đại diện cho ô nhớ đó)

Biến - thay đổi được giá trị trong ô nhớ
Hằng - không thay đổi được giá trị trong ô nhớ

Các cách nhúng JS vào HTML

Nhúng file JS bên ngoài vào <script src="đường dẫn file"></script> - external

Mở thẻ <script><script> và code vào bên trong đó - internal

Nhúng thẳng vào sự kiện của thẻ HTML - inline

Quy tắc - Bắt buộc phải làm theo Quy ước - Tự quy chuẩn để đồng bộ và dễ làm việc hơn

Coding Convention - camel: lạc đà - dayofmonth - dayOfMonth - chữ cái từ đầu tiên viết thường - Các từ sau chữ cái đầu viết hoa

- snake: con rắn
- day_of_month


let mathScore

const MULTIPLE_POINT
JS là ngôn ngữ kiểu động - dễ dãi

Number: Số
int: Số nguyên
float: số thực
String: Chuỗi - gồm nhiều kí tự
Nhận diện: "", '', ``
Tất cả dữ liệu người dùng nhập vào đều là string
Boolean: True hoặc False (1 hoặc 0)
TOÁN TỬ

Toán tử số học: +, -, *, /, % vd: a + b => +: toán tử, a,b: toán hạng
Toán tử gán: =; vd: c = a + b;
Toán tử so sánh: >,<,>=,<=, ==, ===, !=, !== => Toán tử so sánh trả về boolean == : so sánh giá trị === : so sánh giá trị và so sánh cả kiểu dữ liệu
Toán tử cộng chuỗi: nối chuỗi "hello " + "abc" = "hello abc" "hello" + 5 = "hello5"
ép kiểu: đổi chuỗi thành số

parseInt: Đưa về số nguyên
parseFloat: Đưa về số thực
Number: Đưa về số (dung lượng cao hơn float)
dùng + : viết tắt của Number