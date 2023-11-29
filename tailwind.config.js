/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#5B9CE5",
        sub: "#E6F1FE",
      },
    },
  },
  plugins: [],
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/App.css",
    // Thêm đường dẫn tới các tệp tin CSS của bạn nếu cần thiết
  ],
};
