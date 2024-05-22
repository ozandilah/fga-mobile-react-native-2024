const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
];

// Selesaikan loop for di bawah
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  // Tentukan nilai constant character
  const character = characters[i];
  
  // Cetak "Nama saya adalah ____"
  console.log(`Nama saya adalah ${ character.name}`);
  
  // Cetak "Saya berusia ____ tahun"
  console.log(`Saya berusia ${character.age} tahun`);
  
}
