import { CategoryModel } from "./categoryModel";

export interface ProductModel{
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
  category:CategoryModel;
}

export interface CreateProductDto
  extends Omit<ProductModel, 'id' | 'category'> {  //omit : omite cierto campos que no queremos agregar
  categoryId: number;
}
export interface UpdateProductDto extends Partial<ProductModel> {   //partial para agregar algunos campos
  categoryId?: number;
}
