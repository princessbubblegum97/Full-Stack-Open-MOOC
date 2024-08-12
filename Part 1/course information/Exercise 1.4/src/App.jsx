//1.4: Course Information step 4
//Place the objects into an array. 
//Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:




//Header component
const Header = (props) => {

  console.log(props)
  return (
    <div>
      

        {props.course}
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
      <br/>
      <Part2 part2 = 'Using props to pass data ' exercises2 = {7} />
      <br/>
      <Part3 part3 = 'State of a component ' exercises3 = {14} />
      <br/>


    </div>
  )
}


//Total component
const Total = (props) => {


  //console.log(props)
  return (

    <div>

      


          {props.total}
    </div>
  )
}




//App component



    const App = () => {

      

      const course = 'Half Stack application development'
      
      
      const parts = [

        {
          name: 'Fundamentals of React',
          exercises: 10

        },

        {
          name: 'Using props to pass data',
          exercises: 7
        },

        {
          name: 'State of a component',
          exercises: 14
        }
      ]


      // Extracting values of exercises of each part through indexing

      const part1exerindex = parts[0];
      console.log(part1exerindex.exercises)
      //displays 10 in Console

      const part2exerindex = parts[1];
      console.log(part2exerindex.exercises)
      //displays 7 in Console


      const part3exerindex = parts[2];
      console.log(part3exerindex.exercises)
      //displays 14 in console


      //  const totalExercises = part1exerindex + part2exerindex + part3exerindex


       


    
      return (
        <div>


          <h1 style={{color: "#AEE1BC"}} >Full Stack Part 1, Exercise 1.4: Course Information, step 4</h1>

          <h1>  <Header course={course} /> </h1>

          <Content parts={parts} />
          <Total parts={parts} />

{/* I think the remaining task is displaying the total exercises using array directly. */}
         {/* Figure method to index exercises to add them. */}
         
           Number of exercises: { parseInt(JSON.stringify(part1exerindex.exercises)) + parseInt(JSON.stringify(part2exerindex.exercises)) + parseInt(JSON.stringify(part3exerindex.exercises))} 


          {/* {parseInt(JSON.stringify(part1exerindex.exercises))}  */}
          {/* oddly, above displays part1-exercise number in integer format */}

          {/* {parseInt(JSON.stringify(part2exerindex.exercises))} */}
          {/* oddly, above displays part2-exercise number in integer format */}

          {/* {parseInt(JSON.stringify(part3exerindex.exercises))}  */}
          {/* oddly, above displays part3-exercise number in integer format */}




          


        </div>
      )
    }
    

        
    
  

export default App

