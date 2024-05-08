export const getColorByIndex = (index) => {
  const colors = [
    "bg-red-700",
    "bg-green-700",
    "bg-blue-700",
    "bg-yellow-700",
    "bg-orange-900",
    "bg-purple-700",
    "bg-orange-500",
    "bg-blue-500",
    "bg-pink-500",
  ];

  for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
  }

  return colors[index];
};
