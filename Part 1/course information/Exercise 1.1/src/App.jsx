//Unfortunately, the entire application is in the same component.
// Refactor the code so that it consists of three new components: Header, Content, and Total.
// All data still resides in the App component, which passes the necessary data to each component using props. 
//Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.



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


//Content component
const Content = (props) => {


  //console.log(props)
  return (

    <div>

      <p>

        {props.part1}
        {props.part2}
        {props.part3}


        {props.exercises1}
        {props.exercises2}
        {props.exercises3}

      </p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3




  return (
    <div>
      <h1 style={{color: "deeppink"}} >Full Stack Part 1, Exercise 1.1: Course Information, step 1</h1>



{/* Header must use h1, however without emitting DOM Nesting error */}
     <h1> <Header course = {course} />    </h1>
      <Content part1 = {part1 + " " + exercises1}  />    
      {/* <Content exercises1 = {exercises1}  />   */}
      {/* <br /> */}

       <Content part2 = {part2 + " " + exercises2}   />   
       {/* <Content exercises2 = {exercises2}  />   */}
      {/* <br /> */}

       <Content part3 = {part3 + " " + exercises3}  />  
       {/* <Content exercises3 = {exercises3}  />   */}
      {/* <br /> */}

      <Total total = {" Number of exercises: " + total}  />  

      <br />


      
    </div>
  )
}

export default App