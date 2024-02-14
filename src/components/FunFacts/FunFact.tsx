import { Link } from "react-router-dom";
import { factList } from "./factList";
import "./FunFact.scss";

export default function FunFacts(props: any) {
  const randomN = Math.floor(Math.random() * 4);
  return (
    <body>
      {props.facts.map((cate: any) => (
        <div className="card-container">
          <p className="category">
            See more on this topic:{" "}
            <Link to={`/funfact/${cate.category}`}> {cate.category} </Link>{" "}
          </p>
          <div className="fact-container">
            <p className="title">{cate.facts[randomN].title} </p>
            <img src={cate.facts[randomN].image} alt="fact image" />
            <p className="content">{cate.facts[randomN].content} </p>
          </div>
        </div>
      ))}
    </body>
  );
}

// //const facts = factList;
// export default function FunFacts(props: any) {
//   return (
//     <body>
//       <p>factList</p>
//       <div className="gridContainer">
//         {props.facts.map((fact: any, index: number) => (
//           <div className="card-container">
//             <div className="fact-container">
//               <p className="title">{fact.title} </p>
//               <img src={fact.image} alt="fact image" />
//               <p className="content">{fact.content} </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </body>
//   );
// }
