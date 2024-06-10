 function randomval(){
    let values='1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,,S,T,U,V,W,X,Y,Z';
values = values.replace(/,/g, '');
let answer=''
for(x=0; x<6; x++){
let secondvalue=Math.floor(Math.random()*values.length);
answer+=values[secondvalue];
}
return answer;
 }
module.exports=randomval;