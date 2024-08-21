import "../Style/Carasole.css"

const Carasole = () => {
  return (
    <div className="container-fluid">
     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/public/carasole.webp" className="d-block w-100 img" alt="..." />
    </div>

   
  </div>
</div>

    </div>
  )
}

export default Carasole
