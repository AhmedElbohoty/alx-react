import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const seq = Seq(object);
  const students = seq.filter((s) => s.score >= 70);

  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formattedStudents = students.map((s) => ({
    score: s.score,
    firstName: capitalizeFirstLetter(s.firstName),
    lastName: capitalizeFirstLetter(s.lastName),
  }));

  console.log(formattedStudents.toJS());
};

export default printBestStudents;
