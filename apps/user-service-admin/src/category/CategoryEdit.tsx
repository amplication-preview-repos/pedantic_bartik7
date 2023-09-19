import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CategoryTitle } from "./CategoryTitle";
import { ProductTitle } from "../product/ProductTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="parent.id" reference="Category" label="parent">
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="parentId.id"
          reference="Category"
          label="parentId"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="products.id"
          reference="Product"
          label="Products"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
