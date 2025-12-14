function Banner({ menu, info }) {
  return (
    <div
      style={{
        height: 170,
        background: "#001947 url('/images/banner.jpg') no-repeat left",
        filter: "grayscale(100%)",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div style={{marginLeft:400}}>
        <h3 style={{ color: "white" }}>{menu}</h3>
        <h6 style={{ color: "white" }}>{info}</h6>
      </div>
      
    </div>
  );
}

export default Banner;
