const color = ['orange', 'cyan', 'blue', 'red', 'green', 'color9', 'purple', 'color7', 'color8'];
let index = 0;

const getColor = () => {
  index++;
  if (index >= color.length) {
    index = 0;
  }

  return color[index];
};

export { color, getColor };
