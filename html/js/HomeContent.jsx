import React, { useState } from "react";
import "../css/styles.css";

const HomeContent = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State mới: Lưu sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);

  const slides = [
    {
      title: "Ưu đãi hấp dẫn",
      description: "Giảm 20% cho đơn hàng đầu tiên.",
      background: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
    },
    {
      title: "Miễn phí giao hàng",
      description:
        "Giao hàng nhanh trong ngày cho đơn hàng từ 500.000 VND trở lên.",
      background: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)",
    },
    {
      title: "Sản phẩm mới",
      description: "Cập nhật hàng mới mỗi tuần với giá ưu đãi.",
      background: "linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Sản phẩm 1",
      price: "100.000 VND",
      image:
        "https://thumbs.dreamstime.com/b/product-icon-symbol-creative-sign-quality-control-icons-collection-filled-flat-computer-mobile-illustration-logo-150923733.jpg", // Sử dụng imported image
      detail:
        "Đây là mô tả chi tiết cho sản phẩm 1. Chất liệu bền bỉ, thiết kế sang trọng.",
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      price: "200.000 VND",
      image:
        "https://thumbs.dreamstime.com/b/product-icon-symbol-creative-sign-quality-control-icons-collection-filled-flat-computer-mobile-illustration-logo-150923733.jpg", // Sử dụng imported image
      detail: "Đây là mô tả chi tiết cho sản phẩm 2. Phù hợp cho mọi lứa tuổi.",
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      price: "150.000 VND",
      image:
        "https://thumbs.dreamstime.com/b/product-icon-symbol-creative-sign-quality-control-icons-collection-filled-flat-computer-mobile-illustration-logo-150923733.jpg", // Sử dụng imported image
      detail:
        "Đây là mô tả chi tiết cho sản phẩm 3. Phiên bản giới hạn năm 2026.",
    },
    {
      id: 4,
      name: "Sản phẩm 4",
      price: "100.000 VND",
      image:
        "https://thumbs.dreamstime.com/b/product-icon-symbol-creative-sign-quality-control-icons-collection-filled-flat-computer-mobile-illustration-logo-150923733.jpg", // Sử dụng imported image
      detail: "Sản phẩm bán chạy nhất tháng qua.",
    },
    {
      id: 5,
      name: "Sản phẩm 5",
      price: "200.000 VND",
      image:
        "https://thumbs.dreamstime.com/b/product-icon-symbol-creative-sign-quality-control-icons-collection-filled-flat-computer-mobile-illustration-logo-150923733.jpg", // Sử dụng imported image
      detail: "Đảm bảo chất lượng tiêu chuẩn quốc tế.",
    },
    {
      id: 6,
      name: "Sản phẩm 6",
      price: "150.000 VND",
      image:
        "https://thumbs.dreamstime.com/b/product-icon-symbol-creative-sign-quality-control-icons-collection-filled-flat-computer-mobile-illustration-logo-150923733.jpg", // Sử dụng imported image
      detail: "Màu sắc đa dạng, bảo hành 12 tháng.",
    },
  ];

  // Hàm quay lại trang chủ
  const handleBackToHome = () => {
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div onClick={handleBackToHome} style={{ cursor: "pointer" }}>
          <h1 className="site-title">Shop Demo</h1>
          <p className="site-tagline">Web Demo</p>
        </div>
        <div className="hamburger-wrapper">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-button"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          {isMenuOpen && (
            <nav className="mobile-nav">
              <a
                href="#"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleBackToHome();
                }}
                className="mobile-nav-link primary"
              >
                Trang chủ
              </a>
              <a
                href="#products"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleBackToHome();
                }}
                className="mobile-nav-link secondary"
              >
                Sản phẩm
              </a>
            </nav>
          )}
        </div>
      </header>

      <main className="main-content">
        {selectedProduct ? (
          /* GIAO DIỆN TRANG CHI TIẾT */
          <div className="product-detail-page">
            <button className="back-btn" onClick={handleBackToHome}>
              ← Quay lại danh sách
            </button>
            <div className="detail-container">
              <div className="detail-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="detail-info">
                <h1 className="detail-name">{selectedProduct.name}</h1>
                <p className="detail-price-large">{selectedProduct.price}</p>
                <div className="detail-description">
                  <h3>Mô tả sản phẩm:</h3>
                  <p>{selectedProduct.detail}</p>
                </div>
                <div className="detail-actions">
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    className="qty-input"
                  />
                  <button className="buy-now-btn">Thêm vào giỏ hàng</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* GIAO DIỆN TRANG CHỦ */
          <>
            <div
              className="hero-banner"
              style={{ background: slides[slideIndex].background }}
            >
              <div className="hero-content">
                <h2 className="hero-title">{slides[slideIndex].title}</h2>
                <p className="hero-description">
                  {slides[slideIndex].description}
                </p>
              </div>
              <button
                onClick={() =>
                  setSlideIndex((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1,
                  )
                }
                className="slider-button"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setSlideIndex((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1,
                  )
                }
                className="slider-button next"
              >
                ›
              </button>
            </div>

            <h1 className="section-title">Sản phẩm</h1>
            <p className="section-subtitle">
              Chào mừng đến với cửa hàng của chúng tôi!
            </p>

            <div id="products" className="product-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <button
                      className="product-button"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <footer id="contact" className="footer">
        <p>© 2026 Shop Demo. Liên hệ: zalo@demostore.vn</p>
      </footer>
    </div>
  );
};

export default HomeContent;
