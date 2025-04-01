import { useThree } from "@react-three/fiber";

export default function CameraHelper() {
    const { camera } = useThree();
    console.log("camera rot:")
    console.log(camera.rotation);
    console.log("camera pos:")
    console.log(camera.position);
    return null
  }
// Compare this snippet from app/components/CanvasItem.tsx: