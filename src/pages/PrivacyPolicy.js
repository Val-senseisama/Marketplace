import React from "react";
import { Container } from "react-bootstrap";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title='Privacy Policy' />

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

export default PrivacyPolicy;
