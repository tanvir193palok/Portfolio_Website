export const getColorByIndex = (index) => {
  const colors = [
    {
      id: 0,
      style: "shadow-orange-500",
      text: "bg-cyan-500",
    },
    {
      id: 1,
      style: "shadow-orange-500",
      text: "bg-orange-500",
    },
    {
      id: 2,
      style: "shadow-blue-500",
      text: "bg-blue-500",
    },
    {
      id: 3,
      style: "shadow-yellow-500",
      text: "bg-yellow-500",
    },
    {
      id: 4,
      style: "shadow-blue-600",
      text: "bg-blue-600",
    },
    {
      id: 5,
      style: "shadow-sky-400",
      text: "bg-sky-400",
    },
    {
      id: 6,
      style: "shadow-rose-500",
      text: "bg-rose-500",
    },
    {
      id: 7,
      style: "shadow-[#2E8A99]",
      text: "bg-[#2E8A99]",
    },
    {
      id: 8,
      style: "shadow-[#F05941]",
      text: "bg-[#F05941]",
    },
    {
      id: 9,
      style: "shadow-gray-400",
      text: "bg-gray-400",
    },
  ];

  return colors[index].text;
};
