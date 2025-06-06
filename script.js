let data;
async function init(){
  let link = "https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=1000"
  info = await fetch(link);
  data = await info.json();
  alert("Data loaded")
}

function violations(){
   
    let output = document.getElementById("output");
    let state = document.getElementById("state");
    let plate = document.getElementById("plate");
    let violation = document.getElementById("violation");
    console.log(state.value);
    for(let i = 0; i < data.length; i ++){
      let thing = data[i];
      let build = "";
      let build2 = "";
      console.log(thing.violation + " " + violation.value);
      if(thing.state == state.value){
        build += `<div class="card">`
        build += `<h3>${thing.violation}</h3>`
        build += `<h4>${thing.state}</h4>`
        build += `<h4>${thing.plate}</h4>`
        build += `<h5>${thing.fine_amount}</h5>`
        build += `</div>`
     
        build2 += `<iframe src="https://${thing.summons_image.url.substring(7)}">`
        console.log(build2)
        modal = new Modal(build,build2);
        modal.render("output");
      }else if(thing.plate == plate.value){
        build += `<div class="card">`
        build += `<h3>${thing.violation}</h3>`
        build += `<h4>${thing.state}</h4>`
        build += `<h4>${thing.plate}</h4>`
        build += `<h5>${thing.fine_amount}</h5>`
        build += `</div>`
     
        build2 += `<iframe src="https://${thing.summons_image.url.substring(7)}">`
        console.log(build2)
        modal = new Modal(build,build2);
        modal.render("output");
      }else if(thing.violation == violation.value){
        build += `<div class="card">`
        build += `<h3>${thing.violation}</h3>`
        build += `<h4>${thing.state}</h4>`
        build += `<h4>${thing.plate}</h4>`
        build += `<h5>${thing.fine_amount}</h5>`
        build += `</div>`
     
        build2 += `<iframe src="https://${thing.summons_image.url.substring(7)}">`
        console.log(build2)
        modal = new Modal(build,build2);
        modal.render("output");
      }
  }

  //output.innerHTML = build;
}

