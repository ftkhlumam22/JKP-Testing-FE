const api_dev = "http://localhost:4001";
const api_production = process.env.VUE_APP_API_URL;
let api_url = "";

if (process.env.NODE_ENV === "production") {
  api_url = api_production;
} else if (process.env.NODE_ENV === "development") {
  api_url = api_dev;
}

export { api_url };
