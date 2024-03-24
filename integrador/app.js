let autosImportados = [
    {
        marca: "Ford",
        modelo: "Fiesta",
        color: "azul",
        anio: 2019,
        km: 200,
        precio: 150000,
        cuotas: 12,
        patente: "APL123",
        vendido: true
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        color: "blanco",
        anio: 2019,
        km: 200,
        precio: 100000,
        cuotas: 14,
        patente: "JJK116",
        vendido: true
    }
];


let concesionaria = {
   autos: autosImportados,

   buscarAuto: function(patente){
    return (this.autos.find(function(auto){
        return auto.patente == patente;
        })) || null;
    },
   
   venderAuto: function(patente){
      if(this.buscarAuto(patente)!=null){
         this.buscarAuto(patente).vendido = true;
      }
   },

   autosParaLaVenta: function(){
      return this.autos.filter(function(auto){
         return auto.vendido == false;
      })
   },

   listaDeVentas: function(){
        autosDisponibles = this.autos.filter(auto => auto.vendido);
        console.log(autosDisponibles.map(auto => auto.precio));
    }
    
}

console.log(concesionaria.listaDeVentas());