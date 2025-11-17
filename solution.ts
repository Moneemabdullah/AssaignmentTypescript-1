type Value = string | number | boolean;

const formatValue = (value: Value): Value => {
    if (typeof value === "string") return value.toUpperCase();
    if (typeof value === "number") return value * 10;
    return !value;
};


type p2Value = string | Array<Number>;

const getLength = (input: p2Value): number => {
    if (typeof input === "string") {
        return input.length;
    } else {
        return input.length;
    }
};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


interface items {
    title: string;
    rating: number;
}

const filterByRating = (items: items[]): items[] => {
    const highRatingItems: Array<items> = [...items]
    return highRatingItems.sort((a, b) => b.rating - a.rating);
};


interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
};


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}


const printBookDetails = (book: Book) => {
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
};


type arr = Array<number>;

const getUniqueValues = (arr1: arr, arr2: arr): arr => {

    return Array.from(new Set([...arr1, ...arr2]));
}


class Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;

    constructor(name: string, price: number, quantity: number, discount?: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

}

const calculateTotalPrice = (arr: Product[]): number => {
    let total = 0;
    for (const item of arr) {
        let itemTotal = item.price * item.quantity;
        if (item.discount) {
            itemTotal -= (itemTotal * item.discount) / 100;
        }
        total += itemTotal;
    }
    return total;
};
