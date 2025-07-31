function Expr() {
  return {
    isDark: false,
    posts: [
      {
        // title: "Template",
        // href: "posts/template.html",
      },
    ],
    initTheme() {
      this.isDark = localStorage.getItem("theme") === "dark";
      document.documentElement.classList.toggle("dark", this.isDark);
    },

    toggleTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", this.isDark);
    },
  };
}
