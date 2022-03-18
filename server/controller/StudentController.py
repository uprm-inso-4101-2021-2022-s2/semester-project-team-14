from flask import jsonify
from server.model.student_DAO import StudentDAO


class StudentController:
    def addNewStudent(self, json, userid):
        department = json['department']
        year = json['year']
        dao = StudentDAO()
        studentid = dao.addNewStudent(userid, department, year)
        emailverificaton = "TODO: send email verification to user"
        result = studentid
        return jsonify(result), 201