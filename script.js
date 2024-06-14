function eventListener() {
    //Create 2 div elements 
    d3.select("body").append("div");
    d3.select("body").append("div");

    d3.selectAll("div")
    .on("mouseover" , function(){
   d3.select(this) 
   .style("background-color","firebrick")  // changes color to firebrick on mouseover

    })
    .on("mouseout" ,function(){
        d3.select(this)
        .style("background-color","green") //Changes color back to green on the mouseout
    })

    }
