import Root from "./src/Root";
import { TRPCProvider } from "./src/contexts/TRPCProvider";

export default function App() {
  return (
    <TRPCProvider>
      <Root />
    </TRPCProvider>
  );
}
