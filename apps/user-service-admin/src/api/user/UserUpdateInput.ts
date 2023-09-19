import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  products?: ProductWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
