import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useLocation } from "react-router-dom"

const RotatingCube = ({ ...materialProps }) => {
    const cubeRef = useRef()

    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x += 0.01
            cubeRef.current.rotation.y += 0.01
        }
    })

    return (
        <mesh
            ref={cubeRef}
            position={[0, 0, -3]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshLambertMaterial {...materialProps} />
        </mesh>
    )
}

const RotatingSphere = ({ ...materialProps }) => {
    const sphereRef = useRef()

    useFrame(() => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x += 0.01
            sphereRef.current.rotation.y += 0.01
        }
    })

    return (
        <mesh
            ref={sphereRef}
            position={[-2, 2, -2]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshLambertMaterial {...materialProps} />
        </mesh>
    )
}

const RotatingTorus = ({ ...materialProps }) => {
    const torusRef = useRef()

    useFrame(() => {
        if (torusRef.current) {
            torusRef.current.rotation.x += 0.01
            torusRef.current.rotation.y += 0.01
        }
    })

    return (
        <mesh
            ref={torusRef}
            position={[2, 2, -2]}>
            <torusGeometry args={[1, 0.4, 16, 32]} />
            <meshLambertMaterial {...materialProps} />
        </mesh>
    )
}

const ThreeDBackground = () => {
    const location = useLocation()

    const renderBackground = () => {
        switch (location.pathname) {
            case "/":
                return (
                    <>
                        {/* <RotatingCube
                            color="pink"
                            emissive="red"
                        />
                        <RotatingSphere />
                        <RotatingTorus /> */}
                    </>
                )
            case "/about":
                return <RotatingCube />
            case "/projects":
                return <RotatingSphere />
            case "/contact":
                return <RotatingTorus />
            case "/skills":
                return <RotatingCube />
            default:
                return (
                    <>
                        <RotatingCube />
                        <RotatingSphere />
                        <RotatingTorus />
                    </>
                )
        }
    }

    return (
        <Canvas style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }}>
            <ambientLight />
            {renderBackground()}
        </Canvas>
    )
}

export default ThreeDBackground
