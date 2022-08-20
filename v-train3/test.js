//creation ou initualisation du tableau
const  tab = [1,2,3,4,5,6,7,8,9,10]

//fonction permettante de prendre un element et le multiplier par 2
function double(element){
    //operation de multiplication
  let db =  element * 2
    //afficher le resultat dans la console
  console.log(db)
}
//la fonction map et une methode javascript permettante de d'executer un ensemble d'operation sur chaque element du tableau
tab.map(double)
