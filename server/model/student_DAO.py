from config.dbconfig import pg_config
import psycopg2


class StudentDAO:

    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s  port=%s host = %s" % (
            pg_config['dbname'],
            pg_config['user'],
            pg_config['password'],
            pg_config['dbport'],
            pg_config['host']
        )
        self.conn = psycopg2.connect(connection_url)

    def addNewStudent(self, userid, year, department):
        cursor = self.conn.cursor()
        query = "insert into student(userid, year, department) values (%s,%s,%s) returning studentid;"
        cursor.execute(query, (userid, year, department))
        studentid = cursor.fetchone()[0]
        self.conn.commit()
        return studentid

    def getSpecificStudents(self, studentid):
        cursor = self.conn.cursor()
        query = "SELECT userid, studentid, year, department, first_name, last_name FROM student NATURAL INNER JOIN users WHERE studentid=%s;" % (studentid)
        cursor.execute(query)
        result = cursor.fetchone()
        return result
         
    def getAllStudents(self):
        cursor = self.conn.cursor()
        query = "SELECT userid, studentid, year, department, first_name, last_name FROM student NATURAL INNER JOIN users;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def unfollowGroup(self, studentid, groupid):
        cursor = self.conn.cursor()
        query = "DELETE FROM follows WHERE studentid=%s AND groupid=%s;"
        cursor.execute(query, (studentid, groupid))
        affected_rows = cursor.rowcount
        # if affected rows == 0, the follow row was not found and hence not deleted
        # otherwise, it was deleted, so check if affected_rows != 0
        self.conn.commit()
        return affected_rows != 0

    def followGroup(self, studentid, groupid):
        cursor = self.conn.cursor()
        query = "insert into follows (studentid, groupid, isfollowing) select %s, %s, true where not exists (select studentid from follows where studentid = %s and groupid = %s);"
        cursor.execute(query, (studentid, groupid, studentid, groupid))
        self.conn.commit()
        return
    
    def getAllFollowingUsers(self, groupid):
        cursor = self.conn.cursor()
        query = "select studentid from follows where groupid = %s and isfollowing = true;" % groupid
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def getGroupsFollowed(self, studentid):
        cursor = self.conn.cursor()
        query = "select groupid from follows where studentid = %s and isfollowing = true;" % studentid
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result