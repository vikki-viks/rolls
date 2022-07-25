function mapper(obj) {
  return {
    rolls: obj.rows.map((el) => {
      return {
        id: el.id,
        rating: el.rating,
        name: el.name,
        imageUrl: "http://localhost:3001/" + el.img,
      };
    }),
  };
}
module.exports = mapper;
