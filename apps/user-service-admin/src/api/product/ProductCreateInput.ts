import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  categoryId?: CategoryWhereUniqueInput | null;
  name: string;
  userId: UserWhereUniqueInput;
};
