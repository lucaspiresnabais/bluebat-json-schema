const Validator = require("jsonschema").Validator;
const axios = require("axios");

const initialSchema = {
  $ref: "https://raw.githubusercontent.com/lucaspiresnabais/bluebat-json-schema/master/test.json",
};

run = async () => {
  const v = new Validator();

  v.addSchema(initialSchema);
  importNextSchema = async () => {
    var nextSchema = v.unresolvedRefs.shift();
    if (!nextSchema) {
      return;
    }
    const res = await axios.get(nextSchema);
    const schema = res.data;
    v.addSchema(schema);
    importNextSchema();
  };

  await importNextSchema();

  const instance = { productId: 3 };

  console.log(v.validate(instance, initialSchema));
};

run();
