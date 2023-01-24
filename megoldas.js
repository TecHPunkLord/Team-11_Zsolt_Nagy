
//1. feladat
function keszito()
{
document.write("Nagy Zsolt <br>")
document.write("Team#11 <br>")
document.write("Junior Frontend vagy Webfejlesztő")
}  
 
keszito();

//2. feladat
function hatvanyozo()
{
let szamEgy=prompt("Add meg az elso számot:");
let szamKetto=prompt("Add meg a hatványozás mértékét:");

let hatvany = (Math.pow(szamEgy, szamKetto));
document.write(`A ${szamEgy} a ${szamKetto}. hatvanyon: ${hatvany}`);

 }
hatvanyozo();



//3. feladat

function parosLetrehoz(interVallumalso,interVallumfelso)
{
//let interVallumalso=Number(prompt("Add meg az Intervallumo also erteket:"));
//let interVallumfelso=prompt("Add meg az Intervallumo felso erteket:");
let Randomszam=Math.round(Math.random()*(interVallumfelso-interVallumalso))+interVallumalso;


if(Randomszam % 2 == 0){
document.write(`Az on altal megadott intervallum(${interVallumalso}-${interVallumfelso}) altal veletlen genaralt paros random szam pedig a kovetkezo: ${Randomszam}`);
}
else if(Randomszam != interVallumfelso)
{
document.write(`Az on altal megadott intervallum(${interVallumalso}-${interVallumfelso}) altal veletlen genaralt paros random szam pedig a kovetkezo: ${Randomszam + 1}`);
}
else{

document.write(`Az on altal megadott intervallum(${interVallumalso}-${interVallumfelso}) altal veletlen genaralt paros random szam pedig a kovetkezo: ${Randomszam - 1}`);
}
}
parosLetrehoz(2,67);



//4. feladat
function testTomegIndex(tomeg,magassag)

{

let TTI=tomeg/(magassag*magassag);

if(TTI<16){
	document.write(`${TTI} esetén, súlyos soványság`);
}

else if(TTI<17){
	document.write(`${TTI} esetén, mérsékelt soványság`);
}
else if(TTI<18.5){
	document.write(`${TTI} esetén, enyhe soványság`);
}
else if(TTI<25){
	document.write(`${TTI} esetén, normális testsúly`);
}
else if(TTI<30){
	document.write(`${TTI} esetén, túlsúlyos`);
}
else if(TTI<35){
	document.write(`${TTI} esetén, I. fokú elhízás`);
}
else if(TTI<40){
	document.write(`${TTI} esetén, II. fokú elhízás`);
}
else{
	document.write(`${TTI} esetén, III. fokú (súlyos) elhízás`);
}
}




testTomegIndex(45,1.5);



//5. feladat
function egeszOsztoE()

{
let szam=prompt("Add meg a számot:");
let oszto=prompt("Add meg a mennyivel szeretned osztani:");

if(szam % oszto == 0)
{
document.write("True");
}
else{
document.write("False");
}
}




egeszOsztoE();

