import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
const Home = ({pizzas}) => {
  return (
    <>
      <Header />
      <article className="row">  
      {pizzas.map((pizzas,index)=>(
            <div className='col-md-4 col-sm-12 mt-4' key={pizzas.id} >
                <CardPizza pizza={pizzas} />
            </div>
        ))}
      </article>
       
    </>
  );
};

export default Home;
