import { Category } from "../category/Category";
import { User } from "../user/User";

export type Product = {
  categoryId?: Category | null;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  userId?: User;
};
