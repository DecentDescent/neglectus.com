export default class ShareModal extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="modal__content">
          <a onClick={this.props.onShareModalClose} className="modal__close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </a>
          <div className="container container--narrow">
            <h2>Let others now - {this.props.title}!</h2>
            <p>
              Do not let the disease spread. Spread awareness and help fight the
              disease.
            </p>
            <div
              className="sharing-avatar"
              style={{
                backgroundImage:
                  "url(static/img/sharing/sharing-" + this.props.name + ".jpg"
              }}
            >
              <a
                href={
                  "http://twitter.com/share?text=Varujte před " +
                  this.props.title +
                  "&url=https://neglectus.com/" +
                  this.props.name
                }
                className="sharing-tw"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 49.652 49.652"
                >
                  <path d="M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM35.9 19.144c.012.246.018.494.018.742 0 7.55-5.746 16.255-16.26 16.255-3.226 0-6.23-.942-8.758-2.564.447.053.902.08 1.363.08 2.678 0 5.14-.914 7.097-2.446-2.5-.046-4.61-1.698-5.338-3.97.348.067.707.104 1.074.104.52 0 1.027-.068 1.506-.2-2.614-.523-4.583-2.832-4.583-5.602v-.072c.77.427 1.65.685 2.587.714-1.532-1.023-2.54-2.773-2.54-4.755 0-1.05.28-2.03.772-2.875 2.816 3.458 7.028 5.732 11.776 5.972-.098-.42-.147-.854-.147-1.303 0-3.155 2.557-5.714 5.712-5.714 1.644 0 3.127.694 4.17 1.804 1.304-.256 2.524-.73 3.63-1.387-.43 1.335-1.332 2.454-2.515 3.162 1.157-.14 2.26-.445 3.282-.9-.763 1.144-1.732 2.15-2.85 2.954z" />
                </svg>
              </a>
              <a
                href={
                  "https://www.facebook.com/sharer/sharer.php?u=https://neglectus.com/" +
                  this.props.name
                }
                className="sharing-fb"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 486.392 486.392"
                >
                  <path d="M243.196 0C108.89 0 0 108.89 0 243.196s108.89 243.196 243.196 243.196 243.196-108.89 243.196-243.196C486.392 108.86 377.502 0 243.196 0zm62.866 243.165l-39.854.03-.03 145.917h-54.69V243.196H175.01v-50.28l36.48-.03-.062-29.61c0-41.04 11.126-65.997 59.43-65.997h40.25v50.31h-25.17c-18.818 0-19.73 7.022-19.73 20.124l-.06 25.17h45.233l-5.318 50.28z" />
                </svg>
              </a>
              <a
                href={
                  "mailto:?&subject=Varujte před " +
                  this.props.title +
                  "! - Lékaři bez hranic&body=Nenechte%20nemoc%20se%20%C5%A1%C3%AD%C5%99it%20a%20%C5%A1i%C5%99te%20pov%C4%9Bdom%C3%AD%20o%20ni.%20To%20ji%20oslabuje.%0ANav%C5%A1tivte%20str%C3%A1nky%20projektu%20Nev%C5%A1%C3%ADmejte%20si%20n%C3%A1s!%20Kala%20Azar%20a%20spol.%20na%20http%3A//www.nevsimejtesinas.cz"
                }
                className="sharing-ma"
              >
                <svg viewBox="0 0 299.997 299.997">
                  <path
                    d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150
  C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009
  c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749
  l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721
  c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0
  c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721
  c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749
  V196.423z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
