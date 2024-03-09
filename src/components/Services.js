import Card from "./Card";
function Services() {
  return (
    <div className="container services">
    <h2 className="main-title text-center">SERVICES</h2>
    <div className="card-cover">
        {/* <div className="col-md-12"> */}
            <div className="row ">
                <div className="col-md-4 mb-2 d-flex ">
                    <Card title="Our Mission" img={`${process.env.PUBLIC_URL}/img/tech1.webp`} text="At seagull, our mission is to empower businesses with innovative and reliable IT solutions. We believe in delivering cutting-edge technologies that help our clients stay ahead of the competition while maximizing their ROI. " />
                </div>
                <div className="col-md-4 mb-2 d-flex">
                <Card title="Our Expertise" img={`${process.env.PUBLIC_URL}/img/tech2.webp`}text="Our team comprises of highly skilled and experienced professionals who possess expertise in diverse areas of IT, including software development, web design, cloud computing, and cybersecurity. We stay up-to-date with the latest trends and technologies to ensure that we deliver the best solutions to our clients." />
                </div>
            </div>
        {/* </div> */}
    </div>
</div>
  );
}
export default Services;
