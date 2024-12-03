// Home.tsx
import ProductGrid from "./components/ProductGrid";
import { ModalProvider } from "./context/ModalContext";
import Modal from "./components/Modal";

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background text-foreground p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Delicious Recipes
        </h1>
        <ProductGrid />
        <Modal />
      </main>
    </ModalProvider>
  );
}
