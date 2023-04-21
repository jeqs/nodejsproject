const Suma = () => {
  console.log(10);
};
module.expor = Suma();

/*
const SumaUno = (num) => {
  console.log(num);
};
//SumaUno(10);

const SumaDos = (num) => {
  console.log(num);
};
//SumaDos(20);

const SumaTres = (numX, numY) => {
  return numX + numY;
};
const result = SumaTres(30, 40);
//console.log(result);

const SumaCuatro = (numX, numY) => numX + numY;
const resultCuatro = SumaCuatro(10, 20);
//console.log(resultCuatro);

const Template = (numX = 1, numY = 2) => `La suma es ${numX + numY}`;
const resultTemplate = Template(10, 10);
//console.log(resultTemplate);

const CreateObj = () => {
  const myObj = {
    name: "Jose",
    age: 20,
    skills: ["dev", "backend", "frontend"]
  };
  return myObj;
};
const myObj = CreateObj();
//console.log(myObj);

const { skills } = myObj;
//console.log(skills);

const jsonObj = {
  name: "Jose",
  age: 20,
  skills: {
    name: "dev",
    type: ["backend", "frontend"]
  },
  socials: {
    name: "twitter",
    url: "www.twitter.com/jeqs"
  }
};

//console.log(jsonObj.socials.name);
const { name, url } = jsonObj.socials;
//console.log(url);

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then((data) => {
//     //console.log(data.results);
//     data.results.forEach((element) => {
//       console.log(element);
//     });
//   })
//   .catch((error) => console.Error(Error));

const datafetchMap = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    //console.log(data.results);
    const arrayNombres = data.results.map((pkm) => pkm.name);

    console.log(arrayNombres);
  } catch (error) {
    console.error(error);
  }
};
//datafetchMap();

const datafetchFilter = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    //console.log(data.results);
    const arrayNombres = data.results.map((pkm) => pkm.name);

    console.log(arrayNombres);
  } catch (error) {
    console.error(error);
  }
};
datafetchFilter();
*/