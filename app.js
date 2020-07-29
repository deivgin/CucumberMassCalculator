let changeInMass = 0;
//Routes and navigation
const submitPage = `<div class="container">
<form action="/" class="form" onsubmit="event.preventDefault(); onSubmit();">
    <h1>Calculate that Cucumber!</h1>
    <div class="inputGroup">
        <label for="initWater">Initial water percentage:</label>
        <input type="text" id="initWater" pattern="^[1-9][0-9]?$|^100$" minlength="1" maxlength="2" required>
    </div>

    <div class="inputGroup">
        <label for="initWater">How much water vaporized:</label>
        <input type="text" id="vaporWater" pattern="^[1-9][0-9]?$|^100$" minlength="1" maxlength="2" required>
    </div>

    <input type="submit" value="Submit" class="btn" >
    
</form>
</div>`;

const answerPage = `<div class="container">
<h3 class="answer-text">Mass changed by: </h3>
<h2 class="answer" id="answer"></h2>
<button type="button" class="btn" onclick="onNavigate('/')">Back</button>
</div>`;

const routes = {
    "/": submitPage,
    "/answer": answerPage,
  };
  
 
  const rootDiv = document.getElementById("root");

  rootDiv.innerHTML = routes[window.location.pathname];
  

  const onNavigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
  };
  
  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
  };

//calculation


const onSubmit = () => {
    
    let initWater = document.getElementById('initWater').value;
    let vaporWater = document.getElementById('vaporWater').value;
    
    let constMass = (100 - initWater)/100;
    let constChangeMass =(100 - (initWater - vaporWater))/100;
    let changeInMass = 0;
    
    if(constChangeMass !== 1){
      changeInMass = (constMass / constChangeMass) * 100;
    }

    onNavigate('/answer')
    console.log(constMass, constChangeMass, changeInMass);
    document.getElementById('answer').innerHTML = `${Math.round(changeInMass)}%`;
}

  