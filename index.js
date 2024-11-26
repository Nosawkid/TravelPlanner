const app = require("./app");
const config = require("./utils/config");

const port = config.port || 3000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
