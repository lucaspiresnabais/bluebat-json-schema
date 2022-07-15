const Validator = require("jsonschema").Validator;

const v = new Validator();

const instance = "4";
const schema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "",
  title: "Product",
  description: "A product from Acme's catalog",
  type: "object",
  properties: {
    productId: {
      $ref: "https://raw.githubusercontent.com/lucaspiresnabais/bluebat-json-schema/master/test.json",
    },
    productName: {
      description: "Name of the product",
      type: "string",
    },
  },
  required: ["productId", "productName"],
};

console.log(v.validate(instance, schema));
