import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductWhereInput = {
  categoryId?: CategoryWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  userId?: UserWhereUniqueInput;
};
