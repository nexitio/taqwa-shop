import ProductList from "../components/product/list";
import Hero from "./hero";

export default function Home() {
    return <div className="container mx-auto max-w-6xl py-4 space-y-10">
        <Hero />
        <ProductList title="Best Selling Products" viewAllLink="/products" products={[
            {
                id: "1",
                image: "https://cdn.dribbble.com/userupload/37683943/file/original-401a048289b3f65a5735efdc298c54a8.jpg?resize=752x&vertical=center",
                name: "Cougar DarkBlader-G ARGB Full Tower Case",
                description: "Product 1 description",
                price: 100
            },
            {
                id: "2",
                image: "https://cdn.dribbble.com/userupload/46066196/file/6c1bed17ea1b675ba52895caf40d86cf.jpg?resize=752x&vertical=center",
                name: "HP Envy 13-BA0071TX Laptop - 10th Gen Ci7",
                description: "Product 2 description",
                price: 200
            },
            {
                id: "3",
                image: "https://cdn.dribbble.com/userupload/4387822/file/original-bcb0e512fb97fb7b669545bc787a2acb.jpg?resize=752x&vertical=center",
                name: "Product 3",
                description: "Product 3 description",
                price: 300
            }
        ]} />
    </div>
}