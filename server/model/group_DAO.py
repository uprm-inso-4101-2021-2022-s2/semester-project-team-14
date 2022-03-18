from config.dbconfig import pg_config
import psycopg2


class GroupsDAO:

    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s  port=%s host = %s" % (
            pg_config['dbname'],
            pg_config['user'],
            pg_config['password'],
            pg_config['dbport'],
            pg_config['host']
        )
        self.conn = psycopg2.connect(connection_url)

    def addNewGroup(self, userid, groupname, department, isresearch):
        cursor = self.conn.cursor()
        query = "insert into research_group(userid, groupname, department, isresearch) values (%s,%s,%s,%s) returning groupid;"
        cursor.execute(query, (userid, groupname, department, isresearch))
        groupid = cursor.fetchone()[0]
        self.conn.commit()
        return groupid

    def getAllGroups(self):
        cursor = self.conn.cursor()
        query = "SELECT groupid, groupname, department, isresearch FROM research_group;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def getSpecificGroup(self, groupid):
        cursor = self.conn.cursor()
        query = "SELECT groupid, groupname, department, isresearch FROM research_group WHERE groupid=%s;" % (groupid)
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result
