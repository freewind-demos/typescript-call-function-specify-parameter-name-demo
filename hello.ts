function hello(name1?: string, name2?: string) {
  console.log(`Hello, ${[name1, name2]}`);
}

hello(name2 = 'typescript');

