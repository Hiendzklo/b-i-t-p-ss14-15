class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class CartProduct extends Product {
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        super(id, name, price);
        this.quantity = quantity;
    }

    calculatePrice(): number {
        return this.price * this.quantity;
    }

    increaseQuantity(): void {
        this.quantity++;
    }

    decreaseQuantity(): void {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
}

class ShopProduct extends Product {
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        super(id, name, price);
        this.stock = stock;
    }
}

class Cart {
    items: CartProduct[];

    constructor() {
        this.items = [];
    }

    addItem(shopProduct: ShopProduct, quantity: number): void {
        if (quantity > shopProduct.stock) {
            console.log(`Không đủ hàng để thêm vào giỏ hàng cho sản phẩm ${shopProduct.name}`);
            return;
        }

        const cartProduct = new CartProduct(shopProduct.id, shopProduct.name, shopProduct.price, quantity);
        this.items.push(cartProduct);
        console.log(`Đã thêm sản phẩm ${shopProduct.name} vào giỏ hàng.`);
    }

    removeItem(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            console.log(`Đã xóa sản phẩm khỏi giỏ hàng.`);
        } else {
            console.log(`Vị trí không hợp lệ.`);
        }
    }

    getTotal(): number {
        let total = 0;
        this.items.forEach(item => {
            total += item.calculatePrice();
        });
        return total;
    }
}

// Tạo sản phẩm cửa hàng
const shopProducts: ShopProduct[] = [
    new ShopProduct(1, "Áo thun", 100000, 20),
    new ShopProduct(2, "Quần jean", 200000, 15),
    new ShopProduct(3, "Giày thể thao", 300000, 10)
];

// Tạo giỏ hàng và thêm sản phẩm vào giỏ hàng
const cart = new Cart();
cart.addItem(shopProducts[0], 2);
cart.addItem(shopProducts[1], 1);

// Hiển thị tổng giá trị giỏ hàng
console.log("Tổng giá trị giỏ hàng:", cart.getTotal());
