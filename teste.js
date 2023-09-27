const originalArray = [
  { name: "L1", lesoes: 0, semLesoes: 0, morte: 0 },
  { name: "L2", lesoes: 1, semLesoes: 1, morte: 0 },
  { name: "L3", lesoes: 2, semLesoes: 1, morte: 0 },
  { name: "L4", lesoes: 1, semLesoes: 0, morte: 1 },
  { name: "L5", lesoes: 0, semLesoes: 0, morte: 0 },
  { name: "L6", lesoes: 1, semLesoes: 2, morte: 0 },
  { name: "L7", lesoes: 1, semLesoes: 1, morte: 1 },
  { name: "LT", lesoes: 2, semLesoes: 1, morte: 0 },
];

const newArray = originalArray.map((item) => {
  const newItem = { ...item };

  // Substituindo 0 por 14 e 1 por 28
  newItem.lesoes =
    item.lesoes === 0 ? 14 : item.lesoes === 1 ? 28 : item.lesoes * 10;
  newItem.semLesoes =
    item.semLesoes === 0 ? 14 : item.semLesoes === 1 ? 28 : item.semLesoes * 10;
  newItem.morte =
    item.morte === 0 ? 14 : item.morte === 1 ? 28 : item.morte * 10;

  return newItem;
});

console.log(newArray);
