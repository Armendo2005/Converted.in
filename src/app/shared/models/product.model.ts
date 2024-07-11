export class Product {
  id!: string;
  title!: string;
  description!: string;
  price!: number;
  discountPercentage!: number;
  rating!: number;
  stock!: number;
  brand!: string;
  category!: string;
  thumbnail!: string;
  returnPolicy!: string;
  sku!: string;
  availabilityStatus!: string;
  dimensions!:{
    width?: string;
    height?: string;
    depth?: string;
  };
  reviews!: string[];
  images!: string[];
}
