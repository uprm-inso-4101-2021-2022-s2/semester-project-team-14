from flask import jsonify

from server.model.group_DAO import GroupsDAO


class GroupController:
    def addNewGroup(self, json, userid):
        groupname = json['groupname']
        department = json['department']
        isresearch = json['isresearch']

        dao = GroupsDAO()
        groupid = dao.addNewGroup(userid, groupname, department, isresearch)
        result = groupid
        return jsonify(result), 201

    def getAllGroups(self):
        dao = GroupsDAO()
        group_list = dao.getAllGroups()
        result_list = []
        for row in group_list:
            obj = self.build_group_map_to_dict(row)
            result_list.append(obj)
        return jsonify(result_list)

    def getSpecificGroup(self, groupid):
        dao = GroupsDAO()
        group = dao.getSpecificGroup(groupid)
        return jsonify(self.build_group_map_to_dict(group))

    def build_group_map_to_dict(self, row):
        result = {} # groupid, groupname, department, isresearch
        result['groupid'] = row[0]
        result['groupname'] = row[1]
        result['department'] = row[2]
        result['isresearch'] = row[3]
        return result