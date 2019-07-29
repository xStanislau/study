import React from "react";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import { Col } from "react-bootstrap";
import "./Chart.scss";

const Chart = () => {
  return (
    <Col className="col-8 chart">
      <VictoryChart
        width={722}
        height={350}
        events={[
          {
            childName: ["line"],
            target: "data",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    childName: "line",
                    target: "data",
                    mutation: props => {
                      return {
                        style: Object.assign({}, props.style, { stroke: "red" })
                      };
                    }
                  }
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    childName: "line",
                    mutation: () => {
                      return null;
                    }
                  }
                ];
              }
            }
          }
        ]}
      >
        <VictoryAxis
          name="axis-1"
          dependentAxis
          style={{
            axis: {
              stroke: "#334561",
              strokeWidth: 3,
              fill: "transparent"
            }
          }}
        />
        <VictoryAxis
          name="axis-2"
          style={{
            axis: {
              stroke: "#334561",
              strokeWidth: 3,
              fill: "transparent"
            }
          }}
        />
        <VictoryLine
          name="line"
          style={{
            data: { stroke: "#1e87f0", strokeWidth: 3 }
          }}
          interpolation="natural"
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>
    </Col>
  );
};

export default Chart;
