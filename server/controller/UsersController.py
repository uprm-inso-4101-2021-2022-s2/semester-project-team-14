from flask import jsonify
from server.model.users_DAO import UsersDAO


class UserController:
    def addNewUser(self, json, role):
        email = json['email']
        password = json['password']
        first_name = json['first_name']
        last_name = json['last_name']
        isValidated = False
        dao = UsersDAO()
        userid = dao.addNewUser(first_name, last_name, email, password, role, isValidated)
        return int(userid)

    def getAllUsers(self):
        dao = UsersDAO()
        user_list = dao.getAllUsers()
        result_list = []
        for row in user_list:
            obj = self.build_user_map_to_dict(row)
            result_list.append(obj)
        return jsonify(result_list)

    def getSpecificUser(self, uid):
        dao = UsersDAO()
        user_list = dao.getSpecificUser(uid)
        result_list = []
        for row in user_list:
            obj = self.build_user_map_to_dict(row)
            result_list.append(obj)
        return jsonify(result_list)

    def loginUser(json):
        dao = UsersDAO()
        email = json['email']
        password = json['password']
        userid = dao.loginUser(email, password)
        return jsonify(userid), 200

    def updateUser(self, userid, json):
        email = json['email']
        password = json['password']
        first_name = json['first_name']
        last_name = json['last_name']
        role = json['role']
        isValidated = json['isValidated']
        dao = UsersDAO()
        dao.updateUser(userid, first_name, last_name, email, password, role, isValidated)
        user_result = self.build_user_attr_dict(userid, first_name, last_name, email, password, role, isValidated)
        return jsonify(user_result), 200

    def build_user_map_to_dict(self, row):
        result = {}
        result['userid'] = row[0]
        result['first_name'] = row[1]
        result['last_name'] = row[2]
        result['email'] = row[3]
        result['password'] = row[4]
        result['role'] = row[5]
        result['isValidated'] = row[6]
        return result

    def build_user_attr_dict(self, userid, first_name, last_name, email, password, role, isValidated):
        result = {}
        result['userid'] = userid
        result['first_name'] = first_name
        result['last_name'] = last_name
        result['email'] = email
        result['password'] = password
        result['role'] = role
        result['isValidated'] = isValidated
        return result