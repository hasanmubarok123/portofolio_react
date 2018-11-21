import React from 'react';
import slidernew1 from '../slidernew1.jpg';
import slidernew2 from '../slidernew2.jpg';
import slidernew3 from '../slidernew3.jpg';
import slidernew4 from '../slidernew4.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active" style={{backgroundImage: 'url('+slidernew1+')'}}>
              <div className="carousel-caption d-none d-md-block">
                <h3 style={{color:"black"}}>Pilih perlengkapan olahraga dengan dengan bahan terbaik!</h3>
                <p style={{color:"black"}}>powerfull!, perlengkapan olahraga di haSports dibuat dari bahan yang sangat kuat dan paling berkualitas</p>
              </div>
            </div>
            <div className="carousel-item" style={{backgroundImage: 'url('+slidernew2+')'}}>
              <div className="carousel-caption d-none d-md-block">
                <h3>Aktifitas olahraga anda akan sangat luar biasa</h3>
                <p>Running, futsal, ataupun jogging bersama akan lebih menyenangkan.</p>
              </div>
            </div>
            <div className="carousel-item" style={{backgroundImage: 'url('+slidernew3+')'}}>
              <div className="carousel-caption d-none d-md-block">
                <h3>Jangan sampai kehabisan!</h3>
                <p>Stok kami terbatas, sedangkan permintaan terhadap peralatan kami tak pernah berhenti</p>
              </div>
            </div>
            <div className="carousel-item" style={{backgroundImage: 'url('+slidernew4+')'}}>
              <div className="carousel-caption d-none d-md-block">
                <h3>Segera Beli!</h3>
                <p>Jadikan tubuh anda lebih sehat dengan rajin berolahraga!</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
            <section className="py-5">
                <div className="container">
                <h1>haSports by Hasan Mubarok</h1>
                <h5>haSports dibuat untuk semua orang yang menggemari olahraga. Dengan segala keunggulan produknya, aktivitas olahraga anda akan menjadi jauh lebih luar biasa!</h5>
                </div>
            </section>
        </div>
    )
}

export default Banner;