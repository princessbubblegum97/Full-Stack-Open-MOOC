// 1.11*: unicafe step 6
// Display the statistics in an HTML table, so that your application looks roughly like this:




import { useState } from 'react'
import './eloquentstyles.css';








  const Statistics = (props) => {

 
  


    return (
      <div>

  
  <StatisticLine text="good" goodcounter = {props.goodcounter}/>
  {console.log("*Statistics Component, goodcounter*")}
  {console.log(props.goodcounter)}

  
  <StatisticLine text="neutral" neutralcounter = {props.neutralcounter}/>
  {console.log("*Statistics Component, neutralcounter*")}
  {console.log(props.neutralcounter)}


  <StatisticLine text="bad" badcounter = {props.badcounter}/>
  {console.log("*Statistics Component, badcounter*")}
  {console.log(props.badcounter)}


  <StatisticLine text="grandtotal" grandtotal = {props.grandtotal}/>
  {console.log("*Statistics Component, grandtotal*")}
  {console.log(props.grandtotal)}

  <StatisticLine text="average" average = {props.average}/>
  {console.log("*Statistics Component, average*")}
  {console.log(props.average)}


  <StatisticLine text="positivepercent" positivefeedpercent = {props.positivefeedpercent}/>
  {console.log("*Statistics Component, average*")}
  {console.log(props.positivefeedpercent)}


  


      </div>
    )
  
  }


  



  const StatisticLine = (props) => {
    //StatisticLine for displaying a single statistic, e.g. the average score.
    //To be clear: the StatisticLine component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:
    
    
    
      return(
    
      
    
        <div>
   
   {props.goodcounter}
   {props.neutralcounter}   
   {props.badcounter}
   {props.grandtotal}      
   {props.average}         
   {props.positivefeedpercent}   
    
  {console.log("**StatisticLine Component**")}
  {console.log(props.goodcounter)}
  {console.log(props.neutralcounter)}
  {console.log(props.badcounter)}
  {console.log(props.grandtotal)}
  
    
    
          {/* <br/>
          <br/> */}
    
    
          
    
          
    
    
    
         
        </div>
      )
    }
    
    
    
  
    
  
  
  


const MainDisplay= () => {


  return (


      <div>


      <h1>Full Stack Part 1, Exercise 1.11: unicafe step 6</h1>
      <p style={{fontFamily: "Avenir"}}> To ensure a buttery smooth cafe experience, UniCafe seeks your feedback. Complete the 1 question questionnaire, summing your cafe experience. </p>
      <h2>Rate your cafe experience🍊</h2>



              

     </div>
    )
    
  
  
}





const Button = (props) => {

// store all buttons functionality



  return (
    <div>


  <button onClick={props.onClick}> 
  {props.buttonTitle}
  </button>



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

  


 

if(goodcounter === 0 && neutralcounter === 0 && badcounter === 0){
//Conditional for if zero Statistics are accumulated
    return (

      <div>
      < MainDisplay/>


      { console.log("**Neutral counter: **") }

      { console.log(neutralcounter) }




{/* <Button/> */}
      


<Button
onClick={increasegoodcounter}
buttonTitle = "good"
/>




<Button
onClick={increaseneutralcounter}
buttonTitle = "neutral"
/>



<Button
onClick={increasebadcounter}
buttonTitle = "bad"
/>




     <h2>Statistics</h2>

      <p>No Statistics accumulated yet, since no feedback has been provided.</p>


      <br/>
      <br/>


      


      </div>
    )
  
  }
  


  if(goodcounter > 0 || neutralcounter > 0 || badcounter > 0){
//Conditional for if any button is selected

  // THE ISSUE IS THE BUTTONS ARE NOT UPDATING THEIR RESPECTIVE COUNTS


  
  return (


    
    <div>


{/* { console.log("**Neutral counter: **") }

{ console.log(neutralcounter) }
       */}
< MainDisplay/>


{/* <Button/> */}

<Button
onClick={increasegoodcounter}
buttonTitle = "good"
/>


<Button
onClick={increaseneutralcounter}
buttonTitle = "neutral"
/>

<Button
onClick={increasebadcounter}
buttonTitle = "bad"
/>


     <h2>Statistics</h2>








{/* 
      <br/>
      <br/> */}


      

      {/* <Statistics /> */}


      <table>

      <tr>
    <th>Title</th>
    <th>Statistic</th>
    </tr>




      <tr>
      <td> <Statistics goodcounter = {"Good total: " }/>       </td>    
      <td>    {goodcounter}       </td>    
      </tr> 


      <tr> 
        <td> <Statistics neutralcounter = {"Neutral total: " }/>  </td>   
        <td> {neutralcounter}   </td> 
         </tr>  
      
      
      
      <tr>  
        <td> <Statistics badcounter = {"Bad total: " }/>  </td> 
        <td> {badcounter}   </td> 

         </tr>



      <tr> 
         <td> <Statistics grandtotal = {"Grand Total: " }/>  </td> 
         <td> {grandtotal}   </td> 
         </tr>



      <tr>  
        <td> <Statistics average = {"Average: " }/>  </td>  
        <td> {average} </td>
      
      </tr>


      <tr>  
        <td> <Statistics positivefeedpercent = {"Percentage of positive feedback: "}   />   </td>  
        <td> {positivefeedpercent} </td>
      
      </tr>

     



      
      

      </table>

    </div>

    
  )
}
}



export default App




