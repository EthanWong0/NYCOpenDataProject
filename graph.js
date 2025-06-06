let data;
async function init(){
  let link = "https://data.cityofnewyork.us/resource/nc67-uf89.json?"
  info = await fetch(link);
  data = await info.json();
  alert("Data loaded")
}

function violationsByState(){
  let ny = 0, nj = 0, IN = 0, pa = 0, il = 0, mi = 0;
  for(let i = 0; i < data.length; i ++){
    let violation = data[i];
    if(violation.state == "NY"){
      ny ++;
    }else if(violation.state == "NJ"){
      nj ++;
  }else if(violation.state == "IN"){
    IN ++;
  }else if(violation.state == "PA"){
    pa ++;
  }else if(violation.state == "IL"){
    il ++;
  }else if(violation.state =="MI"){
    mi ++;
  }
 }

  let mapdata=[
    ["New York", ny],
    ["New Jersey",nj],
    ["Indiana",IN],
    ["Pennsylvania",pa],
    ["Illnois",il],
    ["Michigan", mi]
  ]

  
  let chartType = document.getElementById("chartType").value;

  displayChart(mapdata,"chart",chartType)
}

function violationsByType(){
  let ph = 0, db = 0, np = 0, ns = 0, ot = 0, ft = 0, bl=0;
  
  for(let i = 0; i < data.length; i ++){
    let violation = data[i];
    console.log(violation.violation)
  if(violation.violation == "PHTO SCHOOL ZN SPEED VIOLATION"){
    ph ++;
  }else if(violation.violation == "DOUBLE PARKING-MIDTOWN COMML"){
    db ++;
  }else if(violation.violation == "NO PARKING-STREET CLEANING"){
    np ++;
  }else if(violation.violation == "NO STANDING-DAY/TIME LIMITS"){
    ns ++;
  }else if(violation.violation == "OBSTRUCTING TRAFFIC/INTERSECT"){
    ot ++;
  }else if(violation.violation =="FAIL TO DSPLY MUNI METER RECPT"){
    ft ++;
  }else if(violation.violation =="BUS LANE VIOLATION"){
    bl ++;
  }
 }

  let mapdata=[
    ["PHTO SCHOOL SPEED VIOLATION", ph],
    ["DOUBLE PARKING-MIDTOWN COMML",db],
    ["NO PARKING-STREET CLEANING",np],
    ["NO STANDING-DAY/TIME LIMITS",ns],
    ["OBSTRUCTING TRAFFIC/INTERSECT",ot],
    ["FAIL TO DSPLY MUNI METER RECPT", ft],
    ["BUS LANE VIOLATION", bl]
  ]

  
  let chartType = document.getElementById("chartType").value;

  displayChart(mapdata,"chart",chartType)
}

function violationsByAgency(){
  let t = 0, dot = 0, pd = 0, ds = 0;
  for(let i = 0; i < data.length; i ++){
    let violation = data[i];
    if(violation.issuing_agency == "TRAFFIC"){
      t ++;
    }else if(violation.issuing_agency == "DEPARTMENT OF TRANSPORTATION"){
      dot ++;
  }else if(violation.issuing_agency == "POLICE DEPARTMENT"){
    pd ++;
  }else if(violation.issuing_agency == "DEPARTMENT OF SANITATION"){
    ds ++;
  }
 }

  let mapdata=[
    ["TRAFFIC", t],
    ["DEPARTMENT OF TRANSPORTATION", dot],
    ["POLICE DEPARTMENT", pd],
    ["DEPARTMENT OF SANITATION", ds]
  ]

  
  let chartType = document.getElementById("chartType").value;

  displayChart(mapdata,"chart",chartType)
}