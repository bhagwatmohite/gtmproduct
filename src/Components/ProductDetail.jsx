import React from 'react'
import BankOfferIcon from '../assets/Bankoffericon.svg'
import ProductImg1 from '../assets/ProductImg1.svg'
import ProductImg2 from '../assets/ProductImg2.svg'
import ProductImg3 from '../assets/ProductImg3.svg'
import ProdutImg from '../assets/ProdutImg.svg'
import Star from '../assets/star.svg'
import './ProductDetail.css'


const ProductDetail = () => {


  return (
    <>
      <div className='container'>
        <div className='left-div'>
          <div className='left-div3'>
            <img style={{ width: 77, height: 60, position: 'absolute', margin: '0px', paddingTop: '70px' }} src={ProductImg1} />
            <img style={{ width: 77, position: 'absolute', margin: '0px', paddingTop: '50px' }} src={ProductImg3} />
            <img style={{ width: 77, position: 'absolute', margin: '0px', paddingTop: '200px' }} src={ProductImg2} />
          </div>

          <img src={ProdutImg} alt='badnet'></img>
          <div className='button-div'>
            <button>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className='right-div'>
          <div className='right-content'>
            <h1>Win Go Betting Web Game</h1>
            <br></br>
            <img src={Star} alt='star img'></img>
            <span className='review'>1,32 Rating & 197 Review</span>
            <br></br>
            <h1>₹1,29,999 <span className='price'> ₹1,29,999 </span><span className='off-color'> 3% off</span></h1><br></br>
            <h3 className='availabel-offer'>Available offers</h3>
            <br></br>
            <div>
              <img src={BankOfferIcon} alt="Bank Offer Icon" />
              <span className='bank-offer'>Bank Offer</span> 10% Upto 2500 off on Axis Bank Signature credit card
              <span className='tc-color'> T&C</span>
            </div>
            <br></br>
            <div>
              <img src={BankOfferIcon} alt="Bank Offer Icon" />
              <span className='bank-offer'>Bank Offer</span> 10% Upto 2500 off on Axis Bank Signature credit card
              <span className='tc-color'> T&C</span>
            </div>
            <br></br>
            <h4 className='view-7offer'>View 7 more offers</h4>
            <br></br>
            <div>3 month On Going Support.</div><br></br>
            <div>3 month On Going Support.</div><br></br>
            <div>3 month On Going Support.</div><br></br>
            <div>3 month On Going Support.</div><br></br>

          </div>
        </div>
      </div>
      {/* <div>
        <button><img src={ButtonArrow} alt='l'></img>click me</button>

      </div> */}
      <hr></hr>

      <div className='container' style={{ paddingTop: '50px', paddingRight: '50px' }}>
        <div className='left-div' style={{ textAlign: 'start', paddingRight: '50px', paddingLeft: '50px', position: 'relative' }}>
          <h1>Product Specifications</h1>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum veritatis eaque, in harum dolores magni? Aut soluta obcaecati repudiandae minus eligendi dolor non accusantium consectetur iste minima. Odit, expedita libero.
            Quis minima ipsa odio inventore est laborum. Voluptatem incidunt doloremque assumenda tenetur temporibus laudantium laborum, consectetur, praesentium corporis reiciendis nisi expedita quis obcaecati saepe facilis molestiae aliquid debitis ipsa? Aspernatur.
            Adipisci in officiis ab recusandae suscipit, voluptatibus cumque dolores! Consectetur corporis quidem ipsam mollitia magni fuga doloribus dolorem, facere vitae impedit sit facilis magnam cumque nostrum enim quaerat praesentium excepturi.
            Obcaecati, laboriosam nihil unde quam nemo quo commodi non illum magnam, in delectus. Animi quos deserunt, obcaecati a dicta perspiciatis, corporis rem, similique eveniet quod distinctio atque libero earum facilis.
            Blanditiis aperiam dicta veritatis consequatur in nisi quisquam quibusdam neque? Deleniti nam, tenetur ducimus dolorum facere atque rem iste similique modi fugiat aut ullam hic eaque molestiae quod placeat nesciunt?
          </p>
          <br></br>
          <h5>Feature:</h5>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae, aspernatur beatae totam in eos aperiam, eligendi ipsa dolorum dolor odit voluptates repellat. Adipisci, reprehenderit vero eius omnis sapiente vel.
            Eligendi ipsa aspernatur amet harum nisi. Vel tenetur enim eius quos, velit, nihil eos dignissimos ipsam numquam voluptatem ducimus recusandae similique ipsum! Corrupti nam, debitis quibusdam molestias quis necessitatibus maxime.</p>
        </div>
        <div className='right-div' style={{ textAlign: 'start', paddingTop: '0px' }} >
          <h5 >Product Compability:</h5>
          <br></br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas perferendis consequatur cum, voluptatibus rerum suscipit minus molestias impedit autem nulla neque ex voluptates ipsam est placeat iusto eum aliquid.</p>
          <br></br>
          <h5>Version:</h5>
          <p>333.4443</p>
          <br></br>
          <h5>File Size:</h5>
          <p>802MB {`(After Extraction and installation)`}</p>
          <br></br>
          <h5>Languages:</h5>
          <p>Marathi,Hindi,English and more...</p>
          <br></br>
          <h5>Liecence:dummy</h5></div>
      </div>
      <br></br>
      <div className='review-section'>
        <h1>Customer Review</h1>
        <br></br>
        <h5>Users:</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus sapiente obcaecati nemo aliquam eos suscipit esse quisquam? Similique minima esse tempore. Expedita, numquam unde atque cupiditate at beatae. Nisi?
          Odio minima adipisci error nisi eius impedit est voluptas necessitatibus, labore exercitationem nam ex cum natus? Qui hic cum quis repudiandae incidunt labore quae quod facilis provident et, praesentium pariatur?</p>
        <br></br>
        <h5>Users:</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus sapiente obcaecati nemo aliquam eos suscipit esse quisquam? Similique minima esse tempore. Expedita, numquam unde atque cupiditate at beatae. Nisi?
          Odio minima adipisci error nisi eius impedit est voluptas necessitatibus, labore exercitationem nam ex cum natus? Qui hic cum quis repudiandae incidunt labore quae quod facilis provident et, praesentium pariatur?</p>
        <br></br>
        <h5>Users:</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus sapiente obcaecati nemo aliquam eos suscipit esse quisquam? Similique minima esse tempore. Expedita, numquam unde atque cupiditate at beatae. Nisi?
          Odio minima adipisci error nisi eius impedit est voluptas necessitatibus, labore exercitationem nam ex cum natus? Qui hic cum quis repudiandae incidunt labore quae quod facilis provident et, praesentium pariatur?</p>
      </div>




    </>
  )
}

export default ProductDetail