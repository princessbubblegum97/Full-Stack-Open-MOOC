//1.3: Course Information step 3
//Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works:



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
      
      <p>

        {props.part1}
        {props.exercises1}

      </p>
    </div>
  )
}



const Part2 = (props) => {

  //console.log(props)
  return (
    <div>
      
      <p>

        {props.part2}
        {props.exercises2}

      </p>
    </div>
  )
}



const Part3 = (props) => {

  //console.log(props)
  return (
    <div>
      
      <p>

        {props.part3}
        {props.exercises3}

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

      <Part1 part1 = 'Fundamentals of React '  exercises1 = {10} />
      <Part2 part2 = 'Using props to pass data ' exercises2 = {7} />
      <Part3 part3 = 'State of a component ' exercises3 = {14} />


      </p>
    </div>
  )
}


//Total component
const Total = (props) => {


  // console.log(props.total)
  return (

    <div>

      <p>


          {props.total}
      </p>
    </div>
  )
}




//App component

  const App = () => {
    
    const course = 'Half Stack application development'
    
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }

    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }

    const part3 = {
      name: 'State of a component',
      exercises: 14
      
    }



    //App component continued..

  
    return (
      <div>

       <h1 style={{color: "#FD86A7"}} >Full Stack Part 1, Exercise 1.3: Course Information, step 3</h1>

       <h1> {course} </h1> 

       {/* {part3} */}
       {/* Above generates render child error */}

        <br/>

        {part1.name + " "}  
        {part1.exercises}

        <br/>
        <br/>


        {part2.name + " "}  
        {part2.exercises}

        <br/>
        <br/>



        {part3.name + " "}
        {part3.exercises}

        <br/>

        <p> Number of exercises: {part1.exercises + part2.exercises + part3.exercises}  </p>




      </div>
    )
  }

export default App

//Your data homes is an array