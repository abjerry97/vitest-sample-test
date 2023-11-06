import { expect, it, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});
it("Should execute the write file method", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);
    // return expect(writeData(testData,testFileName)).resolves.toBeUndefined()

//   expect(fs.writeFile).toBeCalled();
return  expect(fs.writeFile).toBeCalledWith(testFileName,testData);

});

it("Should return a promise that resolves to no value if called correctly", () => {
    const testData = "Test";
    const testFileName = "test.txt";
  
    writeData(testData, testFileName);
      return expect(writeData(testData,testFileName)).resolves.toBeUndefined()
  
  //   expect(fs.writeFile).toBeCalled();
  //   expect(fs.writeFile).toBeCalledWith(testFileName,testData);
  
  });
  