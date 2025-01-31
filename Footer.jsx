

const Footer = () => {
  return (
    <div>
{/* Remove the container if you want to extend the Footer to full width. */}
<div className="container my-5">
  <footer className="bg-dark text-center text-white">
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: Form */}
      <section className>
        <form action>
          {/*Grid row*/}
          <div className="row d-flex justify-content-center">
            {/*Grid column*/}
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-5 col-12">
              {/* Email input */}
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example2" className="form-control" />
                <label className="form-label" htmlFor="form5Example2">Email address</label>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-auto">
      <h6 className="my-2">   Subscribe</h6>
             
        
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </form>
      </section>
      {/* Section: Form */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    {/* Copyright */}
  </footer>
</div>
{/* End of .container */}

    </div>
  )
}

export default Footer
