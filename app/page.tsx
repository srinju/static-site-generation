import { revalidatetodos } from "./lib/actions/action1";

type Todo = {
  id : string | number
  title : string
  description : string
}

export default async function Home() {

  //static site generation >>
    //in static site generation what we do is whenver there is suppose a landing page kind of a thing 
    //webpage tht is same for all the users then , what we do is statically geenrate the file that is the files are generated on build time .
    //we can revalidate the webpage by using next revalidate in some seconds for example 10 seconds 

  const response = await fetch('https://sum-server.100xdevs.com/todos',{
    next : {
      tags : ['todos'] //revalidate the statically generated on every 5 seconds
    }
  });
  const data = await response.json();
  const stringified = JSON.stringify(data);
  revalidatetodos();
  console.log("the data from thhe backend is  : ", stringified );

  return (
    <div>
      {data.todos.map((todo : Todo) => (
        <div key={todo.id}>
          {todo.title}
          {todo.description}
        </div>
      ))}
    </div>
  );
}
