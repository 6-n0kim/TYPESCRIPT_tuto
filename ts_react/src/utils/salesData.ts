// let data = {
//   name: "iPhone",
//   category: "Mobile",
//   specs: {
//     capaciy: 128,
//     color: "Black",
//     weight: 150,
//   },
// };

export type SalesData = {
    name: string;
    category: string;
    specs: {
        capaciy: number;
        color: string;
        weight: number;
    };
    sales: { store: string; price: number }[];
}

export type Specs = {
    capaciy: number;
    color: string;
    weight: number;
}

export type Sales = {
    store: string;
    price: number;
}