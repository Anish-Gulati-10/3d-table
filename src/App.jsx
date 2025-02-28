import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";
import { useConfigurator } from "./contexts/Configurator";

function App() {
  const {legs} = useConfigurator();
  return (
    <>
      <Canvas
        gl={{ antialias: false, preserveDrawingBuffer: true }}
        shadows
        camera={{ position: [4, 4, -12], fov: 35 }}>
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
