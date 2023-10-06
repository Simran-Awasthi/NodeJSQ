import TrafficLight from "./TrafficLight";
type TrafficLightConfig = {
  [key: string]: {
    duration: number;
    next: string;
  };
};
const config: TrafficLightConfig = {
  red: {
    duration: 4000,
    next: "green",
  },
  yellow: {
    duration: 500,
    next: "red",
  },
  green: {
    duration: 3000,
    next: "yellow",
  },
};

function App() {
  return (
    <div>
      <TrafficLight config={config} />
      <TrafficLight config={config} />
    </div>
  );
}

export default App;
