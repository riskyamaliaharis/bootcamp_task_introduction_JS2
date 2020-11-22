const name = ["Abigail", "Alexandra", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"]

function find(cek, batas, panggil){
    cek = cek.toLowerCase()
    
    if (typeof cek !== 'string' || typeof batas !== 'number'){
        console.log("PARAMETER PENCARIAN HARUS BERUPA STRING, DAN BATAS HARUS BERUPA NUMBER")
    }

    else {
        let ambil=[]
        for (let i = 0; i<=name.length-1;i++){
            name[i] = name[i].toLowerCase()
        
            
            let tarik // Untuk menyimpan potongan string yang dihasilkan dari setiap huruf dalam kata a[i]
            let tarikNama //Untuk menyimpan nama yang sesuai dengan kata pencarian yang berupa potongan string
            for (j=0;j<=name[i].length-1;j++){

                tarik = name[i].substr(j, cek.length)
                
                if (tarik===cek){
                    tarikNama = name[i]
                    tarikNama = tarikNama.charAt(0).toUpperCase() + tarikNama.slice(1)
                    ambil.push(tarikNama)
                }
            }              
            
        }

        ambil.length = batas
                
        panggil(ambil)
        
        
    }
}

  function callback (cetak){
    console.log(cetak)
  } 

find("ar", 3, callback)