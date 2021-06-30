// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks


addFood(steak[0], '#steak',async () => {
  // ... your code here
  addFood(steak[1], '#steak', async() => {
    addFood(steak[2], '#steak', async() => {
      addFood(steak[3], '#steak', async() => {
        addFood(steak[4], '#steak', async() => {
          addFood(steak[5], '#steak', async() => {
            addFood(steak[6], '#steak', async() => {
              addFood(steak[7], '#steak', async() => {
             
           
     let html=`<img  src="../images/steak.jpg" alt="steak" width="10" height="100"'>`;
   
     document.querySelector("#table").innerHTML=html;
                
              })
            })

          })

        })
      })
    })
  })
  
});

              


// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')
  addFood(mashPotatoes[2], '#mashPotatoes')
  addFood(mashPotatoes[3], '#mashPotatoes')
  addFood(mashPotatoes[4], '#mashPotatoes')
  addFood(mashPotatoes[5], '#mashPotatoes')
  let html=`<img id="mash" src="../images/mashPotatoes.jpg" alt="mashPotatoes" ' width="10" height="100"' >`;
   
  document.querySelector("#table").innerHTML=html;
});

// Iteration 3 using async/await

  async function makeFood(step) {
    // ... your code here
 
    for (let i = 0; i < brusselSprouts.length; i++) {
      try{
    const passo = await   addFood(step[i], '#brusselSprouts')

  
      }catch(err){

      console.log(err)
    }
    }
    let html=""
     html+=`<div class="pic">`;
     html+=`<img  src="../images/mashPotatoes.jpg" alt="mashPotatoes" width="10" height="100"' >`;
     html+=`</div>`;
    document.querySelector("#table").innerHTML=html;
  }
  
  makeFood(brusselSprouts);
  
