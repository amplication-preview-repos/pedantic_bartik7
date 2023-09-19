import { StringFilter } from "../../util/StringFilter";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  parent?: CategoryWhereUniqueInput;
  parentId?: CategoryWhereUniqueInput;
  products?: ProductWhereUniqueInput;
};
