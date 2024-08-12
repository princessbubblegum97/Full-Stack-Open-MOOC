//Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. 
//Instead, it only renders three Part components of which each renders the name and number of exercises of one part.




//Header component
const Header = (props) => {

  //console.log(props)
  return (
    <div>
      
      <p>

        {props.course}
      </p>
    </div>
  )
}


const Part1 = (props) => {

  //console.log(props)
  return (
    <div>
      
      

        {props.part1}
        {props.exercises1}

      
    </div>
  )
}



const Part2 = (props) => {

  //console.log(props)
  return (
    <div>
      
      

        {props.part2}
        {props.exercises2}

      
    </div>
  )
}



const Part3 = (props) => {

  //console.log(props)
  return (
    <div>
      
      

        {props.part3}
        {props.exercises3}

      
    </div>
  )
}


//Content component
const Content = (props) => {


  //console.log(props)
  return (

    <div>

      

      <Part1 part1 = 'Fundamentals of React '  exercises1 = {10} />
      <br />
      <Part2 part2 = 'Using props to pass data ' exercises2 = {7} />
      <br />
      <Part3 part3 = 'State of a component ' exercises3 = {14} />


      
    </div>
  )
}


//Total component
const Total = (props) => {


  //console.log(props)
  return (

    <div>

      <p>


          {props.total}
      </p>
    </div>
  )
}





const App = () => {

  const course = 'Half Stack application development'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3




  return (
    <div>
      <h1 style={{color: "#3283B3"}} >Full Stack Part 1, Exercise 1.2: Course Information, step 2</h1>




{/* Apply h1 to Header, avoiding DOM Nesting error */}
       <h1> <Header course = {course} />   </h1>
      

       <Content />  
      {/* <br /> */}

     <Total total = {"Number of exercises: " + total}  />  

      <br />


      
    </div>
  )
}

export default App
