//1.9: unicafe step 4
//Change your application to display statistics only once feedback has been gathered.

// CONDITIONAL RENDERING: Instructing buttons on event(s) to execute depending on button


import { useState } from 'react'
import './eloquentstyles.css'





const Statistics = (props) => {

 


  return (
    <div>

<p> {props.goodcounter}      </p>
<p> {props.setgoodCounter}   </p>


<p> {props.neutralcounter}    </p>
<p> {props.setneutralCounter} </p>


<p> {props.badcounter}      </p>
<p> {props.setbadCounter}   </p>


<p> {props.grandtotal}      </p>

<p> {props.average}         </p>

<p> {props.positivefeedpercent}   </p>




{console.log(props.goodcounter)}
{console.log(props.neutralcounter)}
{console.log(props.badcounter)}
{console.log(props.grandtotal)}






    </div>
  )

}



const MainDisplay= (props) => {


  return (


      <div>


      <h1>Full Stack Part 1, Exercise 1.9: unicafe step 4</h1>
      <p style={{fontFamily: "Avenir"}}> To ensure a buttery smooth cafe experience, UniCafe seeks your feedback. Complete the 1 question questionnaire, summing your cafe experience. </p>
      <h2>Rate your cafe experience🍵🍮</h2>



              

     </div>
    )
    
  
  
}





const App = () => {

  //Declaring three different counters, plus initialising their initial value to 0
  const [ goodcounter, setgoodCounter ] = useState(0)
  const [ neutralcounter, setneutralCounter ] = useState(0)
  const [ badcounter, setbadCounter ] = useState(0)

  const grandtotal = goodcounter + neutralcounter + badcounter
  const average = ((goodcounter * 1) + (neutralcounter * 0) + (badcounter * -1)) / grandtotal 
  const positivefeedpercent = (goodcounter / grandtotal) * 100

  const increasegoodcounter = () => setgoodCounter(goodcounter + 1)
  const increaseneutralcounter = () => setneutralCounter(neutralcounter + 1)
  const increasebadcounter = () => setbadCounter(badcounter + 1)
  
  // ** Below to completely wipe away screen and display new items on fresh page.**
  // if(goodcounter ===1){

  //   return 9;
  // }


  // if(goodcounter === 6){

  //   alert("njnjnj");
  // }
  






      
    
  
  


  
  if(goodcounter === 0 && neutralcounter === 0 && badcounter === 0){

  
  return (


    
    <div>


< MainDisplay/>

      
{/* If good button is selected, increase goodcounter by 1 */}
<button onClick =  {increasegoodcounter  } >
      good

      </button>



      { console.log("**good counter: **") }

     { console.log(goodcounter) }


{/* If neutral button is selected, increase neutralcounter by 1 */}

      <button onClick = {increaseneutralcounter }>
      neutral
      </button>

{/* If bad button is selected, increase badcounter by 1 */}

      <button onClick = {increasebadcounter }>
      bad
      </button>


     <h2>Statistics</h2>

      <p>No Statistics accumulated yet, since no feedback has been provided.</p>



      <br/>
      <br/>

      
      

    </div>

    
  )
  
  }

  else

  return (
    <div>


< MainDisplay/>



      
      

{/* If good button is selected, increase goodcounter by 1 */}
      <button onClick =  {increasegoodcounter  } >
      good

      </button>


     { console.log(goodcounter) }


{/* If neutral button is selected, increase neutralcounter by 1 */}

      <button onClick = {increaseneutralcounter }>
      neutral
      </button>

{/* If bad button is selected, increase badcounter by 1 */}

      <button onClick = {increasebadcounter }>
      bad
      </button>


     <h2>Statistics</h2>


      {/* <p>Good total: </p> */}
      <Statistics goodcounter = {"Good total: " + goodcounter} /> 


      {/* <p>Neutral total: </p> */}
      <Statistics  neutralcounter = {"Neutral total: " + neutralcounter} />
      
      {/* <p>Bad total: </p> */}
      <Statistics  badcounter = {"Bad total: " + badcounter}/>
      
      {/* <p> Grand Total: </p> */}
      <Statistics grandtotal = {"Grand Total: " + grandtotal}/> 

      {/* <p> Average: </p> */}
      <Statistics average = {"Average: " + average}/>



       <Statistics positivefeedpercent = {"Percentage of positive feedback: " + positivefeedpercent + " %"}   />  


      <br/>
      <br/>


      

      

    </div>

  )
}

// NOTE: Align content on same line


export default App





