import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  categoryId?: CategoryWhereUniqueInput | null;
  name?: string;
  userId?: UserWhereUniqueInput;
};
