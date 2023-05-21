let h1 = document.createElement("h1");
h1.textContent = "Brewery Tracker ";
h1.setAttribute("style","margin-top:50px;text-align:center;color:blue")
document.body.append(h1)
  
let div = document .createElement("div");
div.id="data";
div.style.width = "100%";
div.style.marginTop = "20px";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";

let input = document.createElement("input");
input.type = "text";
input.id = "name";
input.style.width = "20%";
input.placeholder = "Enter the Brewbery name";

let btn = document.createElement("button");
btn.className = "btn btn-primary";
btn.style.width="100px";
btn.textContent ="Search";
btn.style.marginTop ="10px";
btn.addEventListener("click",bar)
div.append(input,btn)
document.body.append(div)


  async function bar(){

    try {
      var name = document.getElementById("name").value
      var url = `https://api.openbrewerydb.org/v1/breweries?by_name=${name}`;
      console.log(url);
      var request = await  fetch(url)
      console.log(url);
      let para = document.querySelectorAll("p");
          if(para.length>0){
            para.forEach((p)=>{
              //p.remove()
            })
          }
       
        if(request){
          let results = await request.json()

			for(let i=0;i<results.length;i++) {

				let result = results[i];

				//   console.log(text[text.length-1])

				let name = result.name;
				let brewery_type = result.rewery_type;
				let address = result.address_1;
				

				let website_url =result.website_url;
				let phone = result.phone

				console.log(name);
				console.log(brewery_type);
				console.log(address);
				console.log(website_url);
				console.log(phone);
				
				let p1 = document.createElement("p");
			
				p1.className ="text-primary";
				p1.textContent = "Brewerys name: " + name
				p1.style.marginTop = "20px"
				document.getElementById("data").append(p1)

				let p5 = document.createElement("p");
			
				p5.className ="text-primary";
				p5.textContent = "Brewery_type: " + brewery_type
				p5.style.marginTop = "20px"
				document.getElementById("data").append(p5)

				let p2 = document.createElement("p");
		
				p2.className ="text-primary";
				p2.textContent = "Brewerys Address: "+address
				document.getElementById("data").append(p2)

				let p3 = document.createElement("p");
				
				p3.className ="text-primary";
				p3.textContent = "Brewerys website: "+website_url
				document.getElementById("data").append(p3)

				let p4 = document.createElement("p");
				
				p4.className ="text-primary";
				p4.textContent = "Brewerys phone: "+phone
				document.getElementById("data").append(p4)

				let hr = document.createElement('hr');
				document.getElementById("data").append(hr);

				
			}

        }
       
       
    } catch (error) {
      console.log(error);
      console.log("no records found")
          let p = document.createElement("p");
          p.className ="text-primary";
          p.textContent = "No records found"
          p.style.marginTop ="20px"
          document.getElementById("data").append(p)
    }
  }