import React from "react";

interface ModelErrorBoundaryProps {
  children: React.ReactNode;
}

interface ModelErrorBoundaryState {
  hasError: boolean;
}

class ModelErrorBoundary extends React.Component<ModelErrorBoundaryProps, ModelErrorBoundaryState> {
  constructor(props: ModelErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error("3D Model failed to load:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <group>
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
      );
    }
    return this.props.children;
  }
}

export default ModelErrorBoundary; 