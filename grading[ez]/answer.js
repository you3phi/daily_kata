function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade >= 38) {
            let distance = 5 - grade % 5;
            switch (true) {
                case (distance < 3):
                    return grade + distance;
                case (distance >= 3):
                    return grade;
            }
        }
        return grade;
    })
}

console.log([73, 67, 38, 33]) // MUST BE: [75,67,40,33]