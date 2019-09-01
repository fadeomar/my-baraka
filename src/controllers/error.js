const clint = (req, res) => {
  res.status(404).render("404", { title: "page noy found 404" });
};

const server = (err, req, res, next) => {
  res.status(500).render("500", { title: "internal server error", err });
};

module.exports = { clint, server };
