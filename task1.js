let nama = ["abigail", "alexandra", "amanda", "angela", "bella", "carol", "caroline", "carolyn", "deirdre", "diana", "elizabeth", "ella", "faith", "olivia", "penelope"]

// 1. FOREACH = Melakukan pengulangan di dalam Array
const alphabet = ["a", "b", "c"]
alphabet.forEach(abjad =>{
    console.log(abjad)
})
console.log('\n')

// 2. CONCAT = Menggabungkan 2 Array Menjadi 1 Array
const country = ["Japan", "Germany", "Indonesia"]
const number = [1, 3, 5, 7]
const newArray = number.concat(country)
console.log(newArray)
console.log('\n')

// 3. INCLUDES = Mengecek apakah pada elemen array memenuhi kondisi atau tidak
if (nama.includes("amanda")){
    console.log(true)
}
else {console.log(false)}

console.log('\n')

// 4. FILTER = Membuat array baru dengan memperhatikan kondisi tertentu pada array lama
const  filterNama = nama.filter(elemen => elemen.includes("an"))
console.log(filterNama)
console.log('\n')


// 5. SOME = Mengecek setidaknya salah satu elemen array memenuhi kondisi
const someNama = nama.some(item => item[0]=="a") // Output : Boolean
console.log(someNama) 
console.log('\n')

// 6. PI = Mengenerate konstanta phi. 


// 7. POW = Sebagai pangkat. Penulisan syntaxnya sebagai berikut : Math.pow(base, exponent ) ;

let luasLingkaran = Math.PI*Math.pow(6, 2) // phi*r*r = 3.14 * 6 * 6
console.log(luasLingkaran)
console.log('\n')
     
// 8. REPLACE = Mencari string menggunakan regular expression, dan mengganti kata yang dicari

let kalimat = "Aku mau makan"
let hasil = kalimat.replace(/mau/g, "tidak mau")
console.log(hasil)
console.log('\n')

// 9. MATCH = menemukan string menggunakan RegEx
let cetak = ''
for (let n=0;n<=nama.length-1;n++){
    if(nama[n].match(/An/i)){
        cetak +=  nama[n] + " " 
    }
}
console.log(cetak)
console.log('\n')

// 10. TRIM = Membuang bagian spasi atau string kosong di awal dan di akhir
let nm = " satu dua "
console.log(nm)
console.log(nm.trim())