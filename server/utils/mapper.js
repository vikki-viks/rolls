function mapper(obj) {
  return {
    rolls: obj.rows.map((el) => {
      return {
        id: el.id,
        rating: el.rating,
        name: el.name,
      };
    }),
  };
}
module.exports = mapper;
