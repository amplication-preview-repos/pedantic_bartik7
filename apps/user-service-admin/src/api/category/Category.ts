import { Product } from "../product/Product";

export type Category = {
  createdAt: Date;
  id: string;
  name: string;
  parent?: Category | null;
  parentId?: Category | null;
  products?: Product | null;
  updatedAt: Date;
};
