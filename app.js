//! Chapter 38 to 42
//? Q1
// function power(a, b) {
//     if (b === 0) {
//       return 1;
//     } else if (b < 0) {
//       return 1 / (a * power(a, -b - 1));
//     } else {
//       let result = 1;
//       for (let i = 0; i < b; i++) {
//         result *= a;
//       }
//       return result;
//     }
//   }
//   document.write("5 raised to -2 is ", power(5, -2));
//   document.write("<br>")
//   document.write("2 raised to 3 is ",power(2, 3));

//? Q2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   const year = 2020;
//   if (isLeapYear(year)) {
//     document.write(year + " is a leap year.");
//   } else {
//     document.write(year + " is not a leap year.");
//   }

//? Q3
// function calculateSemiPerimeter(a, b, c) {
//   return (a + b + c) / 2;
// }
// function calculateTriangleArea(a, b, c) {
//   const s = calculateSemiPerimeter(a, b, c);
//   const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }
// const sideA = 5;
// const sideB = 12;
// const sideC = 13;

// const area = calculateTriangleArea(sideA, sideB, sideC);
// document.write("The area of the triangle is: " + area);

//? Q4
// function calculateAverage(subject1, subject2, subject3) {
//   return (subject1 + subject2 + subject3) / 3;
// }
// function calculatePercentage(subject1, subject2, subject3) {
//   const totalMarks = subject1 + subject2 + subject3;
//   const maximumMarks = 300;
//   return (totalMarks / maximumMarks) * 100;
// }
// function mainFunction(subject1, subject2, subject3) {
//   const average = calculateAverage(subject1, subject2, subject3);
//   const percentage = calculatePercentage(subject1, subject2, subject3);

//   document.write("Average marks: " + average);
//   document.write("<br>Percentage: " + percentage + "%");
// }
// const subject1Marks = 80;
// const subject2Marks = 90;
// const subject3Marks = 85;

// mainFunction(subject1Marks, subject2Marks, subject3Marks);

//? Q5
// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// const text = "Hello, World!";
// const searchChar = "o";

// const index = customIndexOf(text, searchChar);

// if (index !== -1) {
//   document.write(`'${searchChar}' found at index ${index}`);
// } else {
//   document.write(`'${searchChar}' not found in the text.`);
// }

//? Q6
// function removeVowels(sentence) {
//   const vowelRegex = /[aeiouAEIOU]/g;
//   const result = sentence.replace(vowelRegex, "");

//   return result;
// }
// const inputSentence = "This is a sample sentence with vowels.";

// const sentenceWithoutVowels = removeVowels(inputSentence);
// document.write("Sentence without vowels: " + sentenceWithoutVowels);

//? Q7
// function countSuccessiveVowels(text) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < text.length - 1; i++) {
//     const char1 = text[i];
//     const char2 = text[i + 1];
//     if (vowels.includes(char1) && vowels.includes(char2)) {
//       count++;
//     }
//   }
//   return count;
// }
// const inputText = "Pleases read this application and give me gratuity";
// const occurrences = countSuccessiveVowels(inputText);
// document.write("Number of occurrences of two successive vowels: " + occurrences);

//? Q8
// function convertToMeters(kilometers) {
//   return kilometers * 1000;
// }
// function convertToFeet(kilometers) {
//   return kilometers * 3280.84;
// }
// function convertToInches(kilometers) {
//   return kilometers * 39370.1;
// }
// function convertToCentimeters(kilometers) {
//   return kilometers * 100000;
// }
// function printConversions(kilometers) {
//   const meters = convertToMeters(kilometers);
//   const feet = convertToFeet(kilometers);
//   const inches = convertToInches(kilometers);
//   const centimeters = convertToCentimeters(kilometers);

//   document.write("<br>", kilometers + " kilometers is equivalent to:");
//   document.write("<br>", meters + " meters");
//   document.write("<br>", feet + " feet");
//   document.write("<br>", inches + " inches");
//   document.write("<br>", centimeters + " centimeters");
// }
// const distanceInKilometers = 100;
// printConversions(distanceInKilometers);

//? Q9
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;
//     if (hoursWorked <= regularHours) {
//       return 0;
//     } else {
//       const overtimeHours = hoursWorked - regularHours;
//       const overtimePay = overtimeHours * overtimeRate;
//       return overtimePay;
//     }
//   }
//   const hoursWorked = 45;
//   const overtimePay = calculateOvertimePay(hoursWorked);
//   document.write("Overtime pay: Rs. " + overtimePay);
  
//? Q10
// function calculateCurrencyNotes(amount) {
//     const hundredNotes = Math.floor(amount / 100);
//     const fiftyNotes = Math.floor((amount % 100) / 50);
//     const tenNotes = Math.floor(((amount % 100) % 50) / 10);
  
//     document.write(`You will have ${hundredNotes} hundred notes, ${fiftyNotes} fifty notes, and ${tenNotes} ten notes.`);
//   }

//   const amountToWithdraw = prompt("Enter the amount to withdraw in hundreds: ");
//   calculateCurrencyNotes(amountToWithdraw);
  
