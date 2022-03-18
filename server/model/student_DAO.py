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
         query = "SELECT * FROM student WHERE studentid=%s;" % (studentid)
         cursor.execute(query)
         result = []
         for row in cursor:
             result.append(row)
         return result
         
    def getAllStudents(self):
         cursor = self.conn.cursor()
         query = "SELECT * FROM student;"
         cursor.execute(query)
         result = []
         for row in cursor:
             result.append(row)
         return result
