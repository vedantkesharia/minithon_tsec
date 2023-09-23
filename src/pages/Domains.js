// // import '../components/styles/Product.css';
// import img1 from '../images/img1.jpg'
// import img2 from '../images/img2.jpg'
// import img3 from '../images/img3.jpg'
// import img4 from '../images/img4.jpg'
// import img5 from '../images/img5.jpg'
// import img6 from '../images/img6.jpg'
// import img7 from '../images/img7.jpg'
// import img8 from '../images/img8.jpg'
// import img9 from '../images/img9.jpg'
// import img10 from '../images/img10.jpg'

// import React from 'react'

// const Domains = () => {
//   return (
//     <>
//       <div class="container-xl">
// 	<div class="row">
// 		<div class="col-md-12">
// 			<h2>Featured <b>Products</b></h2>
// 			<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
		
// 			<ol class="carousel-indicators">
// 				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
// 				<li data-target="#myCarousel" data-slide-to="1"></li>
// 				<li data-target="#myCarousel" data-slide-to="2"></li>
// 			</ol>   
			
// 			<div class="carousel-inner">
// 				<div class="item carousel-item active">
// 					<div class="row">
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img1} class="img-fluid" alt=""/>									
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Apple iPad</h4>									
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<p class="item-price"><strike>$400.00</strike> <b>$369.00</b></p>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img2} class="img-fluid" alt="Headphone"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Sony Headphone</h4>									
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>		
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img3} class="img-fluid" alt="Macbook" />
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Macbook Air</h4>									
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
// 										</ul>
// 									</div>
// 									<p class="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>								
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img4} class="img-fluid" alt="Nikon"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Nikon DSLR</h4>									
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<p class="item-price"><strike>$315.00</strike> <b>$250.00</b></p>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div class="item carousel-item">
// 					<div class="row">
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img2} class="img-fluid" alt="Play Station"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Sony Play Station</h4>
// 									<p class="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img5} class="img-fluid" alt="Macbook"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Macbook Pro</h4>
// 									<p class="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
// 										</ul>
// 									</div>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img6} class="img-fluid" alt="Speaker"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Bose Speaker</h4>
// 									<p class="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img7} class="img-fluid" alt="Galaxy"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Samsung Galaxy S8</h4>
// 									<p class="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>						
// 					</div>
// 				</div>
// 				<div class="item carousel-item">
// 					<div class="row">
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img8} class="img-fluid" alt="iPhone"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Apple iPhone</h4>
// 									<p class="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img9} class="img-fluid" alt="Canon"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Canon DSLR</h4>
// 									<p class="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img10} class="img-fluid" alt="Pixel"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Google Pixel</h4>
// 									<p class="item-price"><strike>$450.00</strike> <span>$418.00</span></p>
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
// 										</ul>
// 									</div>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>	
// 						<div class="col-sm-3">
// 							<div class="thumb-wrapper">
// 								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
// 								<div class="img-box">
// 									<img src={img1} class="img-fluid" alt="Watch"/>
// 								</div>
// 								<div class="thumb-content">
// 									<h4>Apple Watch</h4>
// 									<p class="item-price"><strike>$350.00</strike> <span>$330.00</span></p>
// 									<div class="star-rating">
// 										<ul class="list-inline">
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star"></i></li>
// 											<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
// 										</ul>
// 									</div>
// 									<a href="#" class="btn btn-primary">Add to Cart</a>
// 								</div>						
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
			
// 			<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
// 				<i class="fa fa-angle-left"></i>
// 			</a>
// 			<a class="carousel-control-next" href="#myCarousel" data-slide="next">
// 				<i class="fa fa-angle-right"></i>
// 			</a>
// 		</div>
// 		</div>
// 	</div>
//     </div>
//     </>
//   )
// }

// export default Domains


import React, { useEffect } from "react";
import "./styles/Domains.css";
import Card from "../components/Card";
import data from "../data/domains/domains.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Domains = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="domains">
        <div className="domains_title">
          <h1>Hot Products</h1>
          <p>
            {" "}
            <span>&gt;</span> These are some of our best selling products currently{" "}
            <span>&lt;</span>{" "}
          </p>
        </div>
        <div className="domains_cards">
          {data.map((item) => {
            return (
              <Card
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
                color={item.color}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
      {/* <Product/> */}
    </>
  );
};

export default Domains;
