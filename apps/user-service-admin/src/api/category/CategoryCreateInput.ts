import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryCreateInput = {
  name: string;
  parent?: CategoryWhereUniqueInput | null;
  parentId?: CategoryWhereUniqueInput | null;
  products?: ProductWhereUniqueInput | null;
};
