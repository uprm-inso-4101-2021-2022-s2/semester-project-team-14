from flask import jsonify
from server.model.student_DAO import StudentDAO


class StudentController:
    def addNewStudent(self, json, userid):
        department = json['department']
        year = json['year']
        dao = StudentDAO()
        studentid = dao.addNewStudent(userid, year, department)
        result = studentid
        return jsonify(result), 201

    def followGroup(self, json):
        studentid = json['studentid']
        groupid = json['groupid']
        dao = StudentDAO()
        dao.followGroup(studentid, groupid)
        result = "successfully followed group %(groupid)s" % {"groupid" : groupid}
        return jsonify(result), 201
    
    def getAllFollowingUsers(groupid):
        dao = StudentDAO()
        result = dao.getAllFollowingUsers(groupid)
        return jsonify(result), 200

    def getGroupsFollowed(studentid):
        dao = StudentDAO()
        result = dao.getGroupsFollowed(studentid)
        return jsonify(result), 200

    def unfollowGroup(json):
        studentid = json['studentid']
        groupid = json['groupid']
        dao = StudentDAO()
        unfollowed = dao.unfollowGroup(studentid, groupid)
        if(unfollowed):
            result = "student %(studentid)s successfully unfollowed group %(groupid)s" % {"groupid" : groupid, "studentid": studentid}
            return jsonify(result), 200
        else:
            result = "student has not followed group before"
            return jsonify(result), 400
    
    def getAllStudents(self):
        dao = StudentDAO()
        student_list = dao.getAllStudents()
        result_list = []
        for row in student_list:
            obj = self.build_student_map_to_dict(row)
            result_list.append(obj)
        return jsonify(result_list)

    def getSpecificStudents(self, studentid):
        dao = StudentDAO()
        student = dao.getSpecificStudents(studentid)
        return jsonify(self.build_student_map_to_dict(student))

    def build_student_map_to_dict(self, row):
        result = {}
        result['userid'] = row[0]
        result['studentid'] = row[1]
        result['year'] = row[2]
        result['department'] = row[3]
        result['first_name'] = row[4]
        result['last_name'] = row[5]
        return result