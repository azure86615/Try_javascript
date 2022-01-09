/* object寫法，用大括號，
    member variable的給值用冒號，中間用逗號隔開
，也可以放在陣列中
*/
var fbk = {
    lastname: "白上",
    firstname: "フブキ",
    age: 20,
    category: "fox",
    iscat: false,
    introduction: function () {
        document.write("フブキ超可愛!!!!<br/>")
    }
};

/*class寫法*/
class holomem {
    constructor(name, color, category="human", age=18) {
        this.name = name;
        if(category == "human")
            this.ishuman = true;
        else
            this.ishuman = false;
        this.category = category;
        this.color = color;
        this.age = age;
    }
    intro() {
        if(this.ishuman)
            return this.name + " is a human who's age is " + this.age + "\n";
        else
            return this.name + " is not a human, she is "+this.category+" and color is " + this.color + "\n";
    }
}

document.write(
    "The last name is: " + fbk.lastname + "<br/>"
    + "The first name is: " + fbk.firstname + "<br/>"
    + "Her age is: " + fbk.age + "<br/>"
    + "Is she a cat? " + fbk.iscat + "<br/>"
);
fbk.introduction();

var mio = new holomem("mio","black","wolf",20);
document.write(mio.intro());

/*---------------------------------------------------------------------*/
/*觸發效果監聽: event listener*/
/* 按鈕效果觸發1 */
function btnclick(element) {
    var str = document.getElementById("content");

    var tmp = str.innerText;
    str.innerText = element.innerText;
    element.innerText = tmp;
}
/* 按鈕效果觸發2 */
var btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    var str = document.getElementById("content");
    var tmp = str.innerText;
    str.innerText = this.innerText;
    this.innerText = tmp;
})

/* 部落格製作練習---------------------------------------------------------------------------- */
var subaru = new holomem("subaru","yellow","human");
var ayame = new holomem("ayame","red","oni",2000);
var korone = new holomem("korone","brown","dog",300);
var okayu = new holomem("okayu","purple","cat",50);
var fubuki = new holomem("fubuki","white","fox",19);

var name_list = ["okayu","korone","fubuki","ayame","mio","subaru"];
var OKFAMS_list = [okayu,korone,fubuki,ayame,mio,subaru];


var intro = document.getElementById("intro");
var histcontent = document.getElementById("histcontent")
var histlimit = 3;
var searchlist = [];
function search(element){
    var searchname = prompt("輸入你想找的holomem名字\nex: fubuki, mio...");
    if (searchname){
        var idx = name_list.indexOf(searchname);
        if(idx != -1){
            intro.innerHTML = `
            <h1>${searchname}</h1><br/>
                <p>${OKFAMS_list[idx].intro()}</p><br/><hr/>
            `;
        }else{
            alert("您輸入的名字不在名單中");
        }
        searchlist.unshift(searchname);
        if(searchlist.length > histlimit){
            searchlist.pop();
        }
        histcontent.innerHTML = ``;
        for(var i=0; i<searchlist.length; i++){
            histcontent.innerHTML += `<p>${searchlist[i]}</p>`;
        }
    }
}