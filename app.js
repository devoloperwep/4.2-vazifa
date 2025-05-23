// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
// let a = 10;
// if (0 < a) {
//   console.log(true);
// }

// Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
// let a = 11;
// if (a % 2 == 1) {
//   console.log(true);
// }

// Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
// let a = 14;
// let b = 2;
// if (a > 2 && b <= 3) {
//   console.log(true);
// }

// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
// let a = 10;
// let b = 20;
// let c = 30;
// if (a <= b || b <= c) {
//   console.log(true);
// }

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
// let a = 15;
// let b = 11;
// if (a % 2 == 1 && b % 2 == 1) {
//   console.log(true);
// } else if (a % 2 == 0 && b % 2 == 0) {
//   console.log(true);
// }

// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
// let a = 5;
// let b = -3;
// let c = -10;
// if (0 < a || 0 < b || 0 < c) {
//   console.log(true);
// }

// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
// let son = 123;
// let sonEnd = (son % 100) % 10;
// let sonMiddle = ((son % 100) - sonEnd) / 10;
// let sonStart = (son - (son % 100)) / 100;
// if (sonStart != sonMiddle && sonMiddle != sonEnd) {
//   console.log(true);
// }

// Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
// let a = 5;
// let b = 9;
// let c = 5;
// if (a == b || b == c || a == c) {
//   console.log(true);
// }

// masala 2
// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// let a = 10;
// if (a % 2 == 0) {
//   console.log(true);
// }

// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:
// "A >= 0 yoki B <-2"
// let a = 9;
// let b = 10;
// if (a >= 0 || b < -2) {
//   console.log(true);
// }

// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
// let a = 10;
// let b = 18;
// let c = 19;
// if (a < b && b < c) {
//   console.log(true);
// }

// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = 11;
// let b = 15;
// if (a % 2 == 1 && b % 2 == 1) {
//   console.log(true);
// }

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// let a = 10;
// let b = 11;
// if (a % 2 == 1 || b % 2 == 1) {
//   console.log(true);
// }

// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
// let a = 10;
// let b = 15;
// if ((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1)) {
//   console.log(true);
// }

// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// let a = 10;
// let b = 15;
// let c = -20;
// if (a > 0 && b > 0 && c > 0) {
//   console.log(true);
// }

// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
// let a = -10;
// let b = 15;
// let c = -20;
// if (a > 0 && b < 0 && c < 0) {
//   console.log(true);
// } else if (b > 0 && a < 0 && c < 0) {
//   console.log(true);
// } else if (c > 0 && a < 0 && b < 0) {
//   console.log(true);
// }

// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// let a = 10;
// let b = 15;
// let c = 20;
// if (a < 0 && b > 0 && c > 0) {
//   console.log(true);
// } else if (b < 0 && a > 0 && c > 0) {
//   console.log(true);
// } else if (c < 0 && b > 0 && a > 0) {
//   console.log(true);
// }

// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
// let son = 18;
// if (son > 9 && son < 99 && son % 2 == 0) {
//   console.log(true);
// }

// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
// let son = 111;
// if (son > 99 && son < 1000 && son % 2 == 1) {
//   console.log(true);
// }

// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
// let a = 10;
// let b = 30;
// let c = -30;
// if (a == -b || a == -c || c == -b) {
//   console.log(true);
// }

// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let son = 345;
// let end = (son % 100) % 10;
// let middle = ((son % 100) - end) / 10;
// let start = (son - (son % 100)) / 100;
// if (start + 1 == middle && middle + 1 == end) {
//   console.log(true);
// }

// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let son = 321;
// let end = (son % 100) % 10;
// let middle = ((son % 100) - end) / 10;
// let start = (son - (son % 100)) / 100;
// if (start + 1 == middle && middle + 1 == end) {
//   console.log(true);
// } else if (start - 1 == middle && middle - 1 == end) {
//   console.log(true);
// }

// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
// let son = 191;
// let end = (son % 100) % 10;
// let start = (son - (son % 100)) / 100;
// if (end == start) {
//   console.log(true);
// }
