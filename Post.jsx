import "../Style/Post.css"

const Post = () => {
  return (
    <div>
       <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6 ani">
        <img src="/public/hero1.webp" className="d-block mx-lg-auto img" alt="Bootstrap Themes" style={{width:"120%" , height:"250%"}}  loading="lazy" />
      </div>
      <div className="col-lg-6 lol">
        <p>Sanam Jung Official</p>
        <h1 className="display-5 fw-bold lh-1 mb-3">Gift box - Bundle of Four</h1>
        <p>
        Rs.3,499.99 PKR
        </p>
        <div className="form-group">
  <label>Quantity</label>
  <input type="quantiy" placeholder={1} className="form-control quantity qty" />
</div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-start lol">
{/* buttons */}

<a className="fancy" href="#">
  <span className="top-key" />
  <span className="text">Add to Cart</span>
  <span className="bottom-key-1" />
  <span className="bottom-key-2" />
</a>




        </div>
        
<button>
  <svg height={32} width={32} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="empty">
    <path d="M0 0H24V24H0z" fill="none" />
    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={32} height={32} className="filled">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
  </svg>
  Like
</button>




      </div>
  <a href="#" className="btn-shine text-dark">View full details&nbsp;&#8594;</a>


 <div className="loader">
  <div className="circle">
    <div className="dot" />
    <div className="outline" />
  </div>
  <div className="circle">
    <div className="dot" />
    <div className="outline" />
  </div>
  <div className="circle">
    <div className="dot" />
    <div className="outline" />
  </div>
  <div className="circle">
    <div className="dot" />
    <div className="outline" />
  </div>
</div>




    </div>







  </div>
    </div>
  )
}

export default Post
