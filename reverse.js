const input = process.argv.slice(2);

for (let i = 0; i < input.length; i++) {
  const reversed = reverseString(input[i]);
  console.log(reversed);
};

function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
