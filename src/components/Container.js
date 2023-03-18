import React from "react";

const Container = (props) => {
  return (
    <>
      <section className={props.class}>
        <div className='container-lg'>{props.children}</div>
      </section>
    </>
  );
};

export default Container;
