import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas
      
      gl={{ antialias: false, preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [4, 0, 6], fov: 75 }}>
        <Experience />
      </Canvas>
  );
}

export default App;
