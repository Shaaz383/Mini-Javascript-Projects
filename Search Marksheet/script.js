const students = [
  {
      rollNo: "101",
      name: "John Doe",
      class: "10th",
      marks: { English: 75, Math: 85, Science: 92, History: 80, Geography: 88 }
  },
  {
      rollNo: "102",
      name: "Jane Smith",
      class: "10th",
      marks: { English: 65, Math: 78, Science: 80, History: 72, Geography: 75 }
  },
  {
      rollNo: "103",
      name: "Alice Johnson",
      class: "10th",
      marks: { English: 40, Math: 35, Science: 42, History: 45, Geography: 38 }
  }
];

const form = document.getElementById('marksheet-form');
const marksheet = document.getElementById('marksheet');
const resultRoll = document.getElementById('result-roll');
const resultName = document.getElementById('result-name');
const resultClass = document.getElementById('result-class');
const marksTable = document.getElementById('marks-table');
const totalMarksElem = document.getElementById('total-marks');
const percentageElem = document.getElementById('percentage');
const divisionElem = document.getElementById('division');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const rollNo = document.getElementById('rollNo').value.trim();
  const student = students.find(s => s.rollNo === rollNo);
  
  if (student) {
      displayMarksheet(student);
  } else {
      alert('Roll number not found!');
  }
});

function displayMarksheet(student) {
  resultRoll.textContent = student.rollNo;
  resultName.textContent = student.name;
  resultClass.textContent = student.class;

  let totalMarks = 0;
  let subjectCount = 0;
  
  marksTable.innerHTML = '';  // Clear previous marks
  for (const [subject, marks] of Object.entries(student.marks)) {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${subject}</td><td>${marks}</td>`;
      marksTable.appendChild(row);
      totalMarks += marks;
      subjectCount++;
  }

  const percentage = (totalMarks / (subjectCount * 100)) * 100;
  totalMarksElem.textContent = totalMarks;
  percentageElem.textContent = percentage.toFixed(2) + "%";

  // Determine division and pass/fail
  let division;
  if (percentage >= 60) {
      division = 'First Division';
      divisionElem.classList.add('pass');
      divisionElem.classList.remove('fail');
  } else if (percentage >= 45) {
      division = 'Second Division';
      divisionElem.classList.add('pass');
      divisionElem.classList.remove('fail');
  } else if (percentage >= 33) {
      division = 'Third Division';
      divisionElem.classList.add('pass');
      divisionElem.classList.remove('fail');
  } else {
      division = 'Failed';
      divisionElem.classList.add('fail');
      divisionElem.classList.remove('pass');
  }

  divisionElem.textContent = division;
  marksheet.style.display = 'block';
}
