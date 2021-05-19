import Layout from '../component/Layout'

function Cart() {
    return (
      <Layout>
       
        <div className="container-fluid" style={{position: 'relative'}}>
          <div className="card shadow mb-4 mt-4">
            <div className="card-body pt-4 pb-4">
              <h1 className="text-center mt-2" style={{fontSize: '300%', color: '#fd7e14', fontFamily: '"Lobster", cursive'}}>Shopping cart
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="mr-4 ml-4 mb-2 mt-2">
            <div className="card shadow mb-4">
              <div className="card-body pt-2">
                <section id="cart">
                  <article className="product">
                    <header>
                      <img src="images/gallery-img-01.jpg" alt="" />
                      <img src="http://www.astudio.si/preview/blockedwp/wp-content/uploads/2012/08/1.jpg" alt="" className="img-fluid" />
                    </header>
                    <div className="content">
                      <h1 style={{fontSize: '250%'}}>Vada Pav</h1>
                    </div>
                    <footer className="content">
                      <span className="qt-minus">-</span>
                      <span className="qt">1</span>
                      <span className="qt-plus">+</span>
                      <button type="button" className="remove  btn-danger badge-pill mt-2 ml-3" style={{width: '80px', backgroundColor: '#d52a1a'}}><i className="fas fa-fw fa-trash-alt" /></button>
                      <h2 className="full-price p-2">
                        20.00 RS
                      </h2>
                      <h2 className="price mt-2" style={{fontSize: '20PX'}}>
                        20.00 RS
                      </h2>
                    </footer>
                  </article>
                  <hr />
                  <article className="product">
                    <header>
                      <a>
                        <img src="images/gallery-img-02.jpg" alt="" />
                      </a>
                    </header>
                    <div className="content">
                      <h1 style={{fontSize: '250%'}}>Pav Bhaji</h1>
                    </div>
                    <footer className="content">
                      <span className="qt-minus">-</span>
                      <span className="qt">1</span>
                      <span className="qt-plus">+</span>
                      <button type="button" className="remove  btn-danger badge-pill mt-2 ml-3" style={{width: '80px', backgroundColor: '#d52a1a'}}><i className="fas fa-fw fa-trash-alt" /></button>
                      <h2 className="full-price p-2">
                        80.00 RS
                      </h2>
                      <h2 className="price mt-2" style={{fontSize: '20PX'}}>
                        80.00 RS
                      </h2>
                    </footer>
                  </article>
                  <article className="product">
                    <header>
                      <img src="images/gallery-img-03.jpg" alt="" />
                    </header>
                    <div className="content">
                      <h1 style={{fontSize: '250%'}}>Southn Indian Dosa</h1>
                    </div>
                    <footer className="content">
                      <span className="qt-minus">-</span>
                      <span className="qt">1</span>
                      <span className="qt-plus">+</span>
                      <button type="button" className="remove  btn-danger badge-pill mt-2 ml-3 " style={{width: '80px', backgroundColor: '#d52a1a'}}><i className="fas fa-fw fa-trash-alt" /></button>
                      <h2 className="full-price p-2">
                        100.00 RS
                      </h2>
                      <h2 className="price mt-2" style={{fontSize: '20PX'}}>
                        100.00 RS
                      </h2>
                    </footer>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
        <footer id="site-footer">
          <div className="container clearfix">
            <div className="left">
              <h2 className="subtotal">Subtotal: <span>200.00 </span>RS</h2>
              <h3 className="tax">Taxes (5%): <span>10 </span>RS</h3>
            </div>
            <div className="right">
              <h1 className="total">Total: <span>215.00 </span>Rs</h1>
              <a className="btn btn-primary text-white pt-3 pb-3 badge-pill" style={{fontSize: '150%', fontFamily: '"PT Sans", sans-serif'}}>Checkout</a>
            </div>
          </div>
        </footer>
    
    </Layout>
    )
}

export default Cart
