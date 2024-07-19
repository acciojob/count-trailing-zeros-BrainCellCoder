function trailingZeros(n) {
      const nArray = n.split("");
      if (nArray.length === 1) return 0;
      let zeroCount = 0;
      for (let i = nArray.length - 1; i >= 0; i--) {
        if (nArray[i] === '0') {
          zeroCount++;
        } else {
          break;
        }
      }
      return zeroCount;
    }
    const input = prompt("Enter a number");
    alert(trailingZeros(input));