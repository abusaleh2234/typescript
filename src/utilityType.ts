type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

type ProductSummary = Pick<Product, "id">
type productOutStock = Omit<Product, "stock"| "color">
type productWithColor = Required<Product>
type OptionProduct = Partial<Product>
type productReadOnly = Readonly<Product>


const emptyObj: Record<string,unknown> = {}

const product1 = {
    id: 45,
    name: "Mouse",
    Price: "23"
}