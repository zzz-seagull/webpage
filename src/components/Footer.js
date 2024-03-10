function Footer() {

  return (
    <footer style={{ backgroundColor: "#000", color: "#fff"}}>
      <div className="container">
        <div className="row justify-content-center text-center">
          {/* Location Section */}
          <div className="col-md-4">
            <h4>Location</h4>
            <p>30 North Gould Street</p>
            <p>Sheridan, Wyoming 82801</p>
          </div>

          {/* Hours Section */}
          <div className="col-md-4">
            <h4>Hours</h4>
            <p>Mon-Fri: 9am - 5pm</p>
            <p>Sat-Sun: Closed</p>
          </div>

          {/* Contacts Section */}
          <div className="col-md-4">
            <h4>Contacts</h4>
            <p>Email: info@seagull-tech.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
