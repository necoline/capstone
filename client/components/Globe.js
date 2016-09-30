import React from 'react';

class Globe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { webGLError: false }
  }

  componentDidUpdate() {
    this.showGlobe();
  }

  componentDidMount() {
    if(!window.Detector.webgl) {
      this.setState({ webGLError: true });
    } else {
      let colors = [0x00ff00, 0x0066ff, 0xe20800, 0xffdd00, 0];
      // latitude.length do
      // colors.push(0x00ff00)

      this.globe = window.DAT.Globe( $('#container')[0], (label) => {
          return new THREE.Color(colors[label]);
      });

      $('.topic').show();

      $('.topic').each( (i) => {
        let htmlcolor = colors[i].toString(16);
        htmlcolor = '000000'.substr(0, 6 - htmlcolor.length) + htmlcolor;
        $(this).css('border-left', '20px solid #'+htmlcolor);
          if (i < 4) {
            $(this).click( () => {
               this.displayData(i+1);
               $('.topic').removeClass('active');
               $(this).addClass('active');
            });
          }
        });

        $('#sAll').click( () => {
          this.displayData(false);
          $('.topic').removeClass('active');
        });

        this.showGlobe()
    }
  }

  showGlobe() {
    window.data = this.props.data;
    this.displayData(false);
    this.globe.animate();
    $('#sAll').html('Show all topics ('+(data.length/4)+')');
  }

  displayData(label) {
    this.globe.resetData();
    this.globe.addData(window.data, {format: 'legend', showLabel: label});
    this.globe.createPoints();
  }

  render() {
    return (
      <div id="landing">
        <div id="container"></div>
        <div id="info">
          Created by Necoline
          <span className="bull">&bull;</span>
          Based on
          <strong>
           <a href="http://www.chromeexperiments.com/globe">
             WebGL Globe
           </a>
          </strong>
          <span className="bull">&bull;</span>
        </div>

        {/*these titles need to be dynamically extracted from the user csv file */}
        <div id="currentInfo">
          <div id="sFirst" className="topic">Model Data</div>
          {/* <div id="sAll" className="topic">&nbsp;</div> */}
        </div>

        <div id="title">
          Model Globe
        </div>

        <a id="ce" href="http://www.chromeexperiments.com/globe">
          <span>This is a Chrome Experiment</span>
        </a>
      </div>
    )
  }

}

export default Globe;
