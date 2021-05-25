
export default function DogCard(props) {
  const { name, age, kind } = props;
  // const{borderColor}= props;
 const borderStyle= `5px solid ${age>4?"green":"yellow"}` 
  return (
    <div className="dogCard" style= {{border:borderStyle }}>
      <h1> dog:{name} </h1>
      <h2>age:{age}</h2>
      <h2>kind :{kind}</h2>
    </div>
  );
}

