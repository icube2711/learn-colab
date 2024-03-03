let literal = {
    mangan : function (banyak){
        this.energi += banyak
    }
}

function Declare (nama, energi){
    let mhs = Object.create(literal)

    mhs.energi = energi
    mhs.nama = nama

    return mhs
}

let boni = Declare("boni", 20)

function Constructor (asal, sekolah){
    this.asal = asal
    this.sekolah = sekolah
}

let dandy = new Constructor("klaten", "esgul")