import React, { Component } from "react";
import * as d3 from "d3";

// import ajcai_logo from "../images/ajcai-logo.png";
import ForceGraph2D from "react-force-graph-2d";

//stackoverflow.com/questions/9071573/is-there-a-simple-way-to-make-a-random-selection-from-an-array-in-javascript-or
function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const NODE_SIZE = 17;

//https://bl.ocks.org/micahstubbs/9d9b51e949272bce05d1ae090607d588
function genRandomTree(N = 220) {
  let nodes = [...Array(N).keys()].map((i) => ({
    id: i,
    val: NODE_SIZE, //5 * Math.max(Math.random() * 5, 1),
    colors: choose([
      { fill: "#244397", stroke: "#173178" },
      { fill: "#856613", stroke: "#543f06" },
    ]),
  }));

  let links = [];
  for (let id = 0; id < nodes.length; id++) {
    if (id === 0) continue;

    let linkedIds = new Set();
    for (let x = 0; x < 1 + Math.round(Math.random() * 12); x++) {
      let r = Math.random() * 1;
      if (r < 0.6) break;

      const linkedId = Math.round(Math.random() * (id - 1));

      if (linkedIds.has(linkedId)) continue;
      linkedIds.add(linkedId);

      links.push({
        source: id,
        target: linkedId,
      });
    }
  }

  return {
    nodes: nodes,
    links: links,
  };
}

class HeroGraph extends Component {
  constructor(props) {
    super(props);
    this.isCentered = false;
    this.fg = null;
  }
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.resetGraphForces();
  }

  resetGraphForces() {
    this.fg.d3Force("charge").strength(-55);
    this.fg.d3Force("link").distance(30);
    this.fg.d3Force(
      "collide",
      d3.forceCollide((d) => {
        return NODE_SIZE * 1.5;
      })
    );
  }

  render() {
    const data = genRandomTree();
    console.log(data);
    let graph = (
      <ForceGraph2D
        ref={(el) => (this.fg = el)}
        height={400}
        graphData={data}
        cooldownTicks={600}
        onEngineStop={() => this.fg.pauseAnimation()}
        onEngineTick={() => {
          if (!this.isCentered) {
            this.fg.centerAt(-800, 0);
            this.isCentered = true;
          }
        }}
        linkDirectionalArrowLength={10}
        linkDirectionalArrowRelPos={1}
        nodeColor={(d) => {
          return d.color;
        }}
        linkColor={() => {
          return "rgba(50, 50, 50, 0.25)";
        }}
        linkWidth={1}
        enableZoomPanInteraction={false}
        d3AlphaDecay={0.015}
        nodeCanvasObject={(node, ctx, globalScale) => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.val, 0, 2 * Math.PI, false);
          ctx.fillStyle = node.colors.fill;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.val, 0, 2 * Math.PI, false);
          ctx.strokeStyle = node.colors.stroke;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }}
      />
    );

    return <div id="hero-graph-wrapper">{graph}</div>;
  }
}

class Hero extends Component {
  render() {
    //console.log(homePage);
    return (
      <div id="hero" className={"flex-container  flex-align-end "}>
        <div className="hero-background "></div>
        <div className="container flex-container flex-align-center ">
          <div className="hero-text">
            <h2>
              <span className="highlight">Technical Language Processing</span>
              <br /> and <span className="highlight">
                Knowledge Graphs
              </span>{" "}
              Demystified
            </h2>

            <div className="ajcai-bit">
              {/*<div className="flex-item">
                <div class="logo">
                  <a
                    href="https://ajcai2022.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={ajcai_logo} alt="AJCAI Logo" />
                  </a>
                </div>
              </div>*/}
              <div className="flex-item">
                <h3>Tutorial at WMC 2023</h3>
                <h4>
                  Monday 26 June, 9am - 4pm AEST
                  <br />
                  Boulevard Level (Room B1), <br />
                  Brisbane Convention & Exhibition Centre, Brisbane, QLD,
                  Australia
                </h4>
              </div>
            </div>
          </div>
        </div>
        <HeroGraph />
      </div>
    );
  }
}

export default Hero;
