function About() {
  return (
    <>
      <div style={{marginTop:'5rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={`${process.env.PUBLIC_URL}/img/seagull-cute.jpg`} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">TRANSFORMING THE FUTURE OF IT</h2>
            <p className="main-p">
            We specialize in delivering innovative solutions tailored to your business needs, focusing on enhancing efficiency and driving growth through cutting-edge technology and expert insights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
