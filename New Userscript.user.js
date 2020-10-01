// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let yandexInput=document.getElementByName("q")[0];
let btnK=document.getElementByName("btnK")[0];
let keywords= ["Гобой","Саксафон","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"];
let keyword=keywords[getRandom(0,keywords.length)];
let i=0;

function getRandom(min,max){
    return Math.random()*(max-min)+min;

}

if (btnK!=undefined){
    let timerId=setInterval(()=>{
        yandexInput.value += keyword[i++];
        if(i==keyword.length){
            clearInterval(timerId);
            document.getElementByName("btnK")[0].click();
        }
    },500);
}else{
    let links=document.links;
    let flag=true;
    for(let i=0; i<links.length; i++){
    if(links[i].href.index0f("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!= -1){
        links[i].click()
        flag=false;
        break;
    }
}
}