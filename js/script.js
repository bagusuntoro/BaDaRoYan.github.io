// kubus
const sisi=document.getElementById('Lkubus')
const Hkubus=document.getElementById('Hkubus')
const kHasil=document.getElementById('kHasil')

Hkubus.addEventListener('click',function(){
    kHasil.innerText=eval(sisi.value*sisi.value*sisi.value)
})

// bola
const jari=document.getElementById('LBola')
const hBola=document.getElementById('hBola')
const bHasil=document.getElementById('bHasil')

hBola.addEventListener('click',function() {
    bHasil.innerText=eval((1.33333)*3.14*(jari.value*jari.value*jari.value))
})

// prisma
const lAlas=document.getElementById('lAlas')
const kAlas=document.getElementById('kAlas')
const tinggi=document.getElementById('tinggi')
const hPrisma=document.getElementById('hPrisma')

hPrisma.addEventListener('click',function(){
    const hasil= eval(kAlas.value +(2*lAlas.value) *tinggi.value)
    alert(hasil)
})



// bola
const jari=document.getElementById('LBola')
const hBola=document.getElementById('hBola')
const bHasil=document.getElementById('bHasil')

hBola.addEventListener('click',function() {
    bHasil.innerText=eval((1.33333)*3.14*(jari.value*jari.value*jari.value))
})

// prisma
const lAlas=document.getElementById('lAlas')
const kAlas=document.getElementById('kAlas')
const tinggi=document.getElementById('tinggi')
const hPrisma=document.getElementById('hPrisma')

hPrisma.addEventListener('click',function(){
    const hasil= eval(kAlas.value +(2*lAlas.value) *tinggi.value)
    alert(hasil)
})








