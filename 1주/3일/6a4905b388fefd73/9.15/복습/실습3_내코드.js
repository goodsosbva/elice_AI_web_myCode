const AlphabetCounter = {
    sentence: '',
    alphabetMap: {},
  
    setSentence: function (sentence) {
      this.sentence = sentence;
      return this;
    },
  
    buildAlphabetMap: function () {
      // this.sentence 로부터 알파벳 맵을 만들어
      // this.alphabetMap에 저장하세요.
      // this.alphabetMap;
      // [{a:1},{b:1}]
      // let data=[{a:1},{s:1},{d:1}];
      for (let i = 0; i < this.sentence.length; i++) {
        if (
          !this.alphabetMap[this.sentence[i]] &&
          this.sentence[i] !== ' ' &&
          this.sentence[i] !== ','
        ) {
          this.alphabetMap[this.sentence[i]] = 1;
        } else {
          this.alphabetMap[this.sentence[i]] += 1;
        }
      }
      return this;
    },
  
    buildResult: function () {
      // Object.entries()를 활용하여 [a: 1] [b: 2] 형태의 문자열을 만들어보세요.
      console.log(this.alphabetMap);
      let resultString = '';
      for (const [key, value] of Object.entries(this.alphabetMap)) {
        if (key === ' ' || key === ',') continue;
        resultString += `[${key}: ${value}]`;
      }
      (this.sentence = ''), (this.alphabetMap = {});
      return `결과는 : ${resultString} 입니다.`;
    },
  };
  
  export default AlphabetCounter;
  