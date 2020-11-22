const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let tampil =[]
    if (nilaiAwal<nilaiAkhir){
        if (dataArray.length>5){
            
            for (let i=0;i<=dataArray.length-1;i++){
                
                if(dataArray[i]>nilaiAwal && dataArray[i]<nilaiAkhir){
                    let ambil= tampil.push(dataArray[i]);
                }
            }

            tampil.sort((a, b)=> a - b)
            console.log(`INPUT = (${nilaiAwal}, ${nilaiAkhir}, [${dataArray}]) \nOUTPUT = [${tampil}]`)
        }
        else{
            console.log(`INPUT = (${nilaiAwal}, ${nilaiAkhir}, [${dataArray}]) \nOUTPUT = Jumlah angka dalam dataArray tidak ada`)
        }
    }
    else{console.log(`INPUT = (${nilaiAwal}, ${nilaiAkhir}, [${dataArray}]) \nOUTPUT = Nilai akhir harus lebih besar dari nilai awal`)
    }

    console.log('\n')
    
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17 , [2, 25, 4]) 