// 1.8: unicafe step 3
// Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

// Remember that components should not be defined inside other components:




import { useState } from 'react'
import './eloquentstyles.css';



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




  return (
    <div>
      <h1>Full Stack Part 1, Exercise 1.8: unicafe step 3</h1>
      <p style={{fontFamily: "Avenir"}}> To ensure a buttery smooth cafe experience, UniCafe seeks your feedback. Complete the 1 question questionnaire, summing your cafe experience. </p>
      <h2>Rate your cafe experience🥛🧇</h2>

      {/* <img src = "/Users/sunshine_in_a_bag/Full Stack/Part 1/Exercise 1.8/src/3d-white-clipboard-task-management-todo-check-list-with-pencil-efficient-work-on-project-plan-fast-progress-level-up-concept-assignment-and-exam-checklist-icon-3d-render-on-pink-background-vector.jpg" alt="An iconic Dutch windmill in a sunny Dutch meadow"></img>
      <br/>
      <img src="https://www.inspiredtaste.net/wp-content/uploads/2024/03/Easy-Fluffy-Pancakes-Recipe-Video.jpg" alt="W3Schools.com"></img> */}
      {/* <br/> */}


{/* If good button is selected, increase goodcounter by 1 */}
<button onClick =  {increasegoodcounter  } >
      good

      </button>


     { console.log(setgoodCounter) }


{/* If neutral button is selected, increase neutralcounter by 1 */}

      <button onClick = {increaseneutralcounter }>
      neutral
      </button>

{/* If bad button is selected, increase badcounter by 1 */}

      <button onClick = {increasebadcounter }>
      bad
      </button>



      <br/>
      <br/>

      <h2>Statistics</h2>


      {/* <Statistics/> */}
      {/* <p> Good total: </p> */}
      <Statistics goodcounter = {"Good total: " + goodcounter} />


      {/* <p>Neutral total: </p> */}
      <Statistics  neutralcounter = {"Neutral total: " + neutralcounter} />
      
      {/* <p>Bad total: </p> */}
      <Statistics  badcounter = {"Bad total: " + badcounter}/>
      
      {/* <p> Grand Total: </p> */}
      <Statistics grandtotal = {"Grand Total: " + grandtotal}/>

      {/* <p> Average: </p> */}
      <Statistics average = {"Average: " + average}/>

      {/* <p> Percentage of positive feedback: </p> */}
      {/* <Statistics positivefeedpercent = {positivefeedpercent}   /> */}
     <Statistics positivefeedpercent = {"Percentage of positive feedback: " + positivefeedpercent + " %"}   />  
    </div>
  )
}


// NOTE: Align content on same line


export default App


