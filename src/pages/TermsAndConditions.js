import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import { Container } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms And Conditions"} />
      <BreadCrumb title='Terms And Conditions' />
      <section className='policy-wrapper py-5 home-wrapper-2'>
        <Container fluid='lg'>
          <div className='row'>
            <div className='col-12'>
              <div className='policy'></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TermsAndConditions;
