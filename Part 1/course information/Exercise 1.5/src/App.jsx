
//Let's take the changes one step further. 
//Change the course and its parts into a single JavaScript object.
// Fix everything that breaks.





//Header component
const Header = (props) => {

  console.log(props)
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


  //console.log(props)
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

  const course = {

    name: 'Half Stack application development',
   
    parts: [
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
  }



  // const e = course.parts
  // console.log("first");

  // console.log(e)


//Indexing to unveil parts names and exercises from course.parts array
//The double indexing is one for the name, one for the exercise
let part1name = course.parts[0];
//Index entire part 1 key, value
//Display: {
    //"name": "Fundamentals of React",
    //"exercises": 10
//}
// console.log(part1name.name)
//Display part1 name

let part1exercises = course.parts[0];
//Display part1 exercises

console.log(course.parts[0])


console.log(part1exercises.exercises)
// console.log(course.parts[0])

let part2name = course.parts[1];
console.log(part2name.name)

let part2exercises = course.parts[1];
console.log(part2exercises.exercises)

let part3name = course.parts[2];
console.log(part3name.name)

let part3exercises = course.parts[2];
console.log(part3exercises.exercises)



  return (
    <div>
       <h1 style={{color: "#04C7EC"}} >Full Stack Part 1, Exercise 1.5: Course Information, step 5</h1>
{/* START HERE */}
{/* Figure how to display course content here */}


{/* {JSON.stringify(course)} */}
{/* Above works, however adds unnecessary syntax */}


<h1 style={{fontFamily: "SignPainter", color:"#535353"}}> {course.name} </h1>

{/* <p> {JSON.stringify(course.parts)} </p> */}
{/* Above displays parts array, however weird characters in display */}


 {/* {console.log(course.parts[0])} */}
 

 {/* <p> {JSON.stringify(course.parts)} </p> */}

{/* {console.log(course.parts)} */}
{/* course.parts is an array in itself (standalone item extracted from being inside object literal). For this reason, you can directly extract values from course.parts. */}


{/* {part1exercises} */}


{part1name.name}
&nbsp;
{part1exercises.exercises}
<br/>
<br/>


{part2name.name}
&nbsp;
{part2exercises.exercises}
<br/>
<br/>

{part3name.name}
&nbsp; 
{part3exercises.exercises}
<br/>
<br/>


{console.log("parts array")}

{console.log(course.parts)}

{"Number of exercises:"}
&nbsp; 
{part1exercises.exercises + part2exercises.exercises + part3exercises.exercises}

{/* {console.log(part1exercises.exercises + part2exercises.exercises + part3exercises.exercises)} */}

    </div>
  )
}
  

export default App





