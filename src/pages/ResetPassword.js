import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title='Reset Password' />

      <div className='login-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Reset Password</h3>
                <p className='text-center mt-2 mb-3'>
                  We will send you a link to reset your password
                </p>
                <form
                  action=''
                  className='d-flex flex-column gap-15'
                >
                  <div>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='form-control'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='confpassword'
                      placeholder='Confirm Password'
                      className='form-control'
                    />
                  </div>

                  <div>
                    <div className='d-flex mt-3 justify-content-center flex-column align-items-center gap-15'>
                      <button
                        className='button border-0'
                        type='submit'
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
