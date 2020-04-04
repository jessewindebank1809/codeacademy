// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//console.log(returnRandBase());
//console.log(mockUpStrand());

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      const randomDNA = returnRandBase(specimenNum);
      const dnaBase = this.dna[0];
    }
  }
}

test = pAequorFactory(3, returnRandBase(mockUpStrand()));
console.log(test)








