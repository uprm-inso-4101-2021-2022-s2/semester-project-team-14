from unittest import result
from flask import jsonify
from config.dbconfig import pg_config

from server.model.message_DAO import MessageDAO

import psycopg2

class MessageController:

    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s  port=%s host = %s" % (
             pg_config['dbname'],
             pg_config['user'],
             pg_config['password'],
             pg_config['dbport'],
             pg_config['host']
        )
        self.conn = psycopg2.connect(connection_url)

    def postNewMessage(self, json):
        groupid = json['groupid']
        text = json['text']
        photoURL = json['photourl']
        dao = MessageDAO()
        messageid = dao.postNewMessage(groupid, text, photoURL)
        return jsonify(messageid), 201

    def getSpecificMessage(self, messageid):
        dao = MessageDAO()
        result = dao.getSpecificMessage(messageid)
        return jsonify(result)

    def getAllMessages(self):
        dao = MessageDAO()
        result = dao.getAllMessages()
        result_list = []
        for row in result:
            obj = self.build_message_map_to_dict(row)
            result_list.append(obj)
        return jsonify(result_list)

    def getAllMessagesByGroupid(self, groupid):
        dao = MessageDAO()
        result = dao.getAllMessagesByGroupid(groupid)
        result_list = []
        for row in result:
            obj = self.build_message_map_to_dict(row)
            result_list.append(obj)
        return jsonify(result_list)

    def build_message_map_to_dict(self, row):
        result = {}
        result['postid'] = row[0]
        result['groupid'] = row[1]
        result['text'] = row[2]
        result['date'] = str(row[3])
        result['photoURL'] = row[4]
        return result
