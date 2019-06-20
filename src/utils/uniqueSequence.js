export default function uniqueSequenceCalculator(sequence) {
  return sequence.toString().split('').reduce((acc, item) => {
    // compare the current item with the last item in the collected array
    if (acc[acc.length - 1] !== item) {
      // append the current item if it is different
      acc.push(item);
    }

    return acc;
  }, []).join('');
}