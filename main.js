/*function loadjson(file,callback){
      var xhr=new XMLHttpRequest();
      xhr.overrideMimeType("application/json");
      xhr.open("GET",file,true);
      xhr.onreadystatechange=function(){
      	if(xhr.readyState===4 && xhr.status===200){
      		callback(xhr.responseText);
      	}
      };
      xhr.send(null);
}
loadjson("data.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	basics(data.details);*/
	function loadjson(file){
		return new Promise((resolve,reject)=>{
			return fetch(file).then(response=>{
				if(response.ok){
					resolve(response.json());
				}
				else{
					reject(new Error('error'));
				}
			})
		})
	}

var newfile=loadjson("data.json");
newfile.then(data=>{
console.log(data);
basics(data.details);
carrerinfo(data.carrer);
basic(data.technicalskills);
edudetails(data.educational);
})

var ch=document.querySelector(".child1");
function basics(det){
	var img=document.createElement("img");
	img.src=det.image;
	img.alt="picture";
	ch.appendChild(img);

	var s=document.createElement("h2");
	s.textContent=det.name;
	ch.appendChild(s);

	var e=document.createElement("a");
	e.href="mailto:kottanavarshini0412@gmail.com";
	e.textContent="kottanavarshini0412@gmail.com";
	ch.appendChild(e);

	var add=document.createElement("p");
	add.textContent=det.address;
	ch.appendChild(add);
}
var ch2=document.querySelector(".child2");
function carrerinfo(det){
	var c=document.createElement("h2");
	c.textContent="carrer objective";
	ch2.appendChild(c);

	var hr=document.createElement("hr");
	ch2.appendChild(hr);

    var op=document.createElement("h3");
    op.textContent=det.info;
    ch2.appendChild(op);
}
/*var ch1=document.querySelector(".child3");
function basic(det){
	var c=document.createElement("h2");
	c.textContent="technicalskils";
	ch1.appendChild(c);

	var hr=document.createElement("hr");
	ch1.appendChild(hr);
    
    var op=document.createElement("h3");
	op.textContent=det.OP;
	ch1.appendChild(op);


	var pl=document.createElement("h3");
    pl.textContent=det.PL;
    ch1.appendChild(pl);
}*/

var ch4=document.querySelector(".child3");
function edudetails(edu){

	var t1=document.createElement("table");
	t1.border="1";
	ch4.appendChild(t1);

	tabledata="";
	for(i=0;i<edu[i].length;i++)
	{
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].per+"</td><td>"+edu[i].passoutyear+"</td></tr>";

	}
	t1.innerHTML=tabledata;
}