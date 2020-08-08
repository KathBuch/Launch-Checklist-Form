// Write your JavaScript code here!

      window.addEventListener("load", function() {
      let form = document.querySelector("form");
      document.getElementById("missionTarget").style.display = "none";
      form.addEventListener("submit", function(event) {
     
       


       let pilotNameInput = document.getElementById("pilotName").value;
       let copilotNameInput = document.getElementById("copilotName").value;
       let fuelLevelInput = document.getElementById("fuelLevel").value;
       let cargoMassInput = document.getElementById("cargoMass").value;
         
   
         
         if (pilotNameInput === "" || copilotNameInput === "" || isNaN(cargoMassInput) || isNaN(cargoMassInput) ){
            alert("All fields are required!");
             
         }
        


      if (fuelLevelInput < 10000 ){
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch"
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
      }

      if (cargoMassInput > 10000 ){
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready For Launch"
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
      }

      if (fuelLevelInput >= 10000 && cargoMassInput <= 10000) {
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle Ready For Launch";
         let planet;
         fetch('https://handlers.education.launchcode.org/static/planets.json')
         .then(function(response){
        return response.json();
         })
         .then(function(data){
           let x = Math.floor((Math.random() * data.length) + 0);
           document.getElementById("name").innerHTML = `Name: ${data[x].name}`;
           document.getElementById("diameter").innerHTML = `Diameter: ${data[x].diameter}`;
           document.getElementById("star").innerHTML = `Star: ${data[x].star}`;
           document.getElementById("distance").innerHTML = `Distance from Earth: ${data[x].distance}`;
           document.getElementById("moon").innerHTML = `Number of Moons: ${data[x].moons}`;
           document.getElementById("image").src = data[x].image
         })
         
         document.getElementById("missionTarget").style.display = "block";

      }

document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput} Ready`;

document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotNameInput} Ready`;

document.getElementById("faultyItems").style.visibility = "visible";

      event.preventDefault();
    
      });
   });

 
   






/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

 
 