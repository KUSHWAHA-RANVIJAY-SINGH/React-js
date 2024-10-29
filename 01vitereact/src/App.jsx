import Netflixseries from "./Components/Netflixseries"
export const App =()=>{
  return (
    <div>
      <Netflixseries/>
     <Series/>

    </div>
  )
}

//* Method Two how print watch or not 

// let age =19;
//Method two 
// let canWatch ="Not Avilable Watch"
//  if(age >=18) canWatch ="Watch Now"

//? Method Three
// const canWatch = () => {
//   if(age >=18) return "Watch Now";
//   else return "Not Avilable Watch";
// };
// const Netflixseries =()=>{
//   return (
//     <>
//       <ul>
//         {
//           seriesdata.map((curEle)=> {
//             return(
//               <ul key={curEle.id}>
//       <li>
//       <div>
//         <img src={curEle.img_url}  width="40%" height="40%"/>
//       </div>
//       <h2>Name :{curEle.name}</h2>
//       <h3>Rating :{curEle.rating}</h3>
//       <p>Description: {curEle.description}
//       </p>
//       <p>Genre :{curEle.genre}</p>
//       <p>Cast : {curEle.cast}</p>
//       <a href={curEle.watch_url} target="_blank">
//       <button onClick={canWatch}>Watch Now</button>
//       </a>
//       {/* <button>{canWatch()}</button>
//       <button>{age>=18 ? "Watch Now" : "Not Watch"}</button>
//        */}
//       </li>
//      </ul>
//             )
//           })
//         }
//       </ul>
  
//     </>
//   )
// }