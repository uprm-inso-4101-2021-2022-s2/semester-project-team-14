import datetime
from config.dbconfig import pg_config
import psycopg2


class MessageDAO:

    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s  port=%s host = %s" % (
            pg_config['dbname'],
            pg_config['user'],
            pg_config['password'],
            pg_config['dbport'],
            pg_config['host']
        )
        self.conn = psycopg2.connect(connection_url)

    def postNewMessage(self, groupid, text, photoURL):
        cursor = self.conn.cursor()
        dt = datetime.datetime.now()
        query = "insert into message(groupid, text, date, photourl) values (%s,%s,%s,%s) returning postid;"
        cursor.execute(query, (groupid, text, dt, photoURL))
        postid = cursor.fetchone()[0]
        self.conn.commit()
        return postid

    def getSpecificMessage(self, mid):
        cursor = self.conn.cursor()
        query = "SELECT * FROM message where postid=%s ;" % (mid)
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def getAllMessages(self):
        cursor = self.conn.cursor()
        query = "SELECT * FROM message;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result


    def getAllMessagesByGroupid(self, groupid):
        cursor = self.conn.cursor()
        query = "SELECT * FROM message where groupid=%s;" % (groupid)
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result