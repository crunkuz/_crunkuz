export const signature = () =>
  console.log(
    "%c              Developed by Illuzion              ",
    "background: black; color: rgb(52 208 255);",
    "https://github.com/illuzionn/"
  );

export const rmTextNodeHelper = (nodes: NodeListOf<ChildNode>): ChildNode[] => {
  const result: ChildNode[] = [];
  nodes.forEach((i) => {
    if (i.nodeName !== "#text") {
      result.push(i);
    }
  });
  return result;
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
