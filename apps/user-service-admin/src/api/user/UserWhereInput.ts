import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  products?: ProductWhereUniqueInput;
  username?: StringFilter;
};
